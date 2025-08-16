import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user/userDto';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('users.findAll')   // in here users is the domain name and findall is the pattern
  findAll(): UserDto[] {
    return this.usersService.findAll();
  }
}
