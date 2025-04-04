import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const logger = new ConsoleLogger({
    json: true,
    colors: true,
  });

  const tcpApp = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      logger,
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3002,
      },
    },
  );

  const redisApp = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      logger,
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    },
  );

  // await app.listen();
  await Promise.all([tcpApp.listen(), redisApp.listen()]);
  logger.log('🚀 ...products tcp service is running on port 3002');
  logger.log('🚀 ...products redis service is running on port 6379');
}

void bootstrap();
