import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
    private users: UserDto[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 23,
    },
    {
      id: 2,
      name: 'dev Tsatsu',
      email: 'tsatsu@example.com',
      age: 23,
    },
  ];

  findAll(): UserDto[] {
    return this.users;
  }
}
