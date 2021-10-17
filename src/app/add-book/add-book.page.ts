import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
})
export class AddBookPage implements OnInit {
  saveBookForm: FormGroup;
  book: any = {};
  titleInput: any;
  author: any;
  publisheddate: any;
  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.saveBookForm = this.fb.group({
      titleInput: [[], Validators.required],
      author: [[], Validators.required],
      publisheddate: [[], Validators.required],
    });
  }

  onSubmit() {
    if (!this.saveBookForm.valid) {
      console.log('All fileds required');
      return false;
    }
    else {
      console.log(this.saveBookForm.value);
      this.book = Object.assign(this.book, this.saveBookForm.value);
      this.addBook(this.book);
      this.saveBookForm.reset();
    }
  }

  addBook(books: any) {
    let book = [];
    if (localStorage.getItem('Book')) {
      book = JSON.parse(localStorage.getItem('Book'));
      book = [books, ...book];
    }
    else {
      book = [books];
    }
    localStorage.setItem('Book', JSON.stringify(book));
  }

}
