import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements OnInit {
  book = [];
  searchTerm: string;
  constructor() { }

  ngOnInit() {
    this.book = JSON.parse(localStorage.getItem('Book'));
    // console.log(this.book);
  }
  onDelete(id) {
    console.log(id);
    let final: any = this.book.slice(id);
    localStorage.setItem('Book',JSON.stringify(final));
    this.book = final;
  }
}
