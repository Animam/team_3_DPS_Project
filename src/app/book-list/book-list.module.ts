import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookListPageRoutingModule } from './book-list-routing.module';

import { BookListPage } from './book-list.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookListPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [BookListPage]
})
export class BookListPageModule {}
