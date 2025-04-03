import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

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
}
