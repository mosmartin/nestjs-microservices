import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MICROSERVICES_CLIENTS } from 'src/constants';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject(MICROSERVICES_CLIENTS.ORDERS_SERVICE)
    private ordersServiceClient: ClientProxy,
  ) {}

  @Post()
  createOrder(@Body() order: object) {
    return this.ordersServiceClient.send('order.create', order);
  }
}
