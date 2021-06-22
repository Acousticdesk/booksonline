import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: Books = [];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }
}
