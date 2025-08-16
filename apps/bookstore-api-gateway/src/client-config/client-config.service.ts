import { ClientConfigModule } from './client-config.module';
import { Injectable } from "@nestjs/common";
import { ConfigService } from '@nestjs/config'
import { ClientOptions, MicroserviceOptions, Transport } from '@nestjs/microservices';


@Injectable()
export class ClientConfigService {
  constructor(private config: ConfigService) {}

  getBooksClientPort(): number {
    return this.config.get<number>('BOOK_CLIENT_PORT')!;
  }

  getUserClientPort(): number {
    return this.config.get<number>('USERS_CLIENT_PORT')!;
  }

  get booksClientOptions(): ClientOptions {
    return {
      transport: Transport.TCP,
      options: {
        port: this.getBooksClientPort(),
      },
    };
  }

  get usersClientOptions(): ClientOptions {
    return {
       transport: Transport.TCP,
      options: {
        port: this.getUserClientPort(),
       },
    };
  }
}