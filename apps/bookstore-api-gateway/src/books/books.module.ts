import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ClientProxyFactory } from '@nestjs/microservices';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { BOOKS_CLIENT } from '../contants';
import { ClientConfigModule } from '../client-config/client-config.module';
import { ClientConfigService } from '../client-config/client-config.service';

@Module({
  imports: [ClientConfigModule],
  controllers: [BooksController],
  providers: [
    BooksService,
    {
      provide: BOOKS_CLIENT,
      useFactory: (ConfigService: ClientConfigService) => {
        const clientOptions = ConfigService.booksClientOptions;
        return ClientProxyFactory.create(clientOptions);
      },

      inject: [ClientConfigService],
    },
  ],
})
export class UsersModule {}
