import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
<<<<<<< HEAD
    path: 'book',
    loadChildren: () => import('./book/book.module').then( m => m.BookPageModule)
=======
    path: 'add-book',
    loadChildren: () => import('./add-book/add-book.module').then( m => m.AddBookPageModule)
  },
  {
    path: 'book-list',
    loadChildren: () => import('./book-list/book-list.module').then( m => m.BookListPageModule)
>>>>>>> 376d4f4035a080718c46bae5008674f68898b931
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
