import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  @MessagePattern('user.get')
  getUser(id: string) {
    return {
      message: 'User retrieved successfully',
      data: { id, name: 'Mos Martin' },
    };
  }
}
