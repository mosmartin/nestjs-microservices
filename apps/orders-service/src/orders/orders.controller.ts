import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { MICROSERVICES_CLIENTS } from 'src/constants';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject(MICROSERVICES_CLIENTS.PRODUCTS_REDIS_CLIENT)
    private readonly productsRedisClient: ClientProxy,
  ) {}

  @MessagePattern('order.create')
  createOrder(order: object) {
    console.log('Creating order:', order);
    this.productsRedisClient.emit('order.created', order);

    return this.productsRedisClient.send('product.get', {});

    // return {
    //   message: 'Order created successfully',
    //   data: order,
    // };
  }
}
