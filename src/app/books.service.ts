import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(): Books {
    return [
      {id: 1, title: 'The book', author: 'The author'}
    ];
  }

  getBook(requestedId: number): Book | undefined {
    const books = this.getBooks();

    return books.find(({ id }) => id === requestedId);
  }
}
