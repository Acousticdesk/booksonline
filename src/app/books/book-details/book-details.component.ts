import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {BooksService} from '../../books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.book = this.booksService.getBook(Number(id));
  }
}
