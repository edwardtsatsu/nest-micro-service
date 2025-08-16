import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksService {
  private books: BookDto[] = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      price: 22,
      publicationDate: new Date(),
      publisher: 'Publisher 1',
      rating: 'Rating 1',
      description: 'Description 1',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      price: 33,
      publicationDate: new Date(),
      publisher: 'Publisher 2',
      rating: 'Rating 2',
      description: 'Description 2'
    },
  ];

  create(createBookDto: CreateBookDto) {
    console.log('This action adds a new book');

    const newBook: BookDto = {
      id: this.books.length + 1,
      ...createBookDto,
    }

    this.books.push
    return newBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
