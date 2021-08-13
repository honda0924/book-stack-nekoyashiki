import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Book } from 'src/entity/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
})
export class BooksModule {}
