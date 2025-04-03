import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
  @MessagePattern('order.create')
  createOrder(order: object) {
    console.log('✅ Order received in MicroService:', order);
    return {
      message: 'Order created successfully',
      data: order,
    };
  }
}
