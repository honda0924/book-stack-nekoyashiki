import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
// import { BooksModule } from './books/books.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BooksModule],
  // imports: [TypeOrmModule.forRoot(), BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
