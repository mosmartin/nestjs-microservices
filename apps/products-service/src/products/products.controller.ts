import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  @MessagePattern('product.create')
  createProduct(product: object) {
    return {
      message: 'Product created successfully',
      data: product,
    };
  }

  @MessagePattern('product.get')
  getProduct(id: string) {
    return {
      message: 'Product retrieved successfully',
      data: { id, name: 'Sample Product' },
    };
  }

  @EventPattern('order.created')
  updateStock(order: { id: string; productId: string }) {
    console.log('Updating stock for order:', order);
    return {
      message: 'Stock updated successfully',
      data: order,
    };
  }
}
