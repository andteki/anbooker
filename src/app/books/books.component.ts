import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getBooks()
  }
  getBooks() {
    this.api.getBooks()
    .subscribe( res => {
      console.log(JSON.stringify(res));
      this.books = res;
    })
  }

}
