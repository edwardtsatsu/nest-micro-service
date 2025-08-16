import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_CLIENT') private userClient: ClientProxy) {}
  findAll() {
    return 'mock findAll reponses of users';
  }
}
