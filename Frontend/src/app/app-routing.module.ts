import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';
import { BooksComponent } from './books/books.component';
import { NewbookComponent } from './newbook/newbook.component';
import { BookComponent } from './book/book.component';
import { EditbookComponent } from './editbook/editbook.component';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';
import { EditauthorComponent } from './editauthor/editauthor.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home', 
        pathMatch: 'full'
  },  
  {path:'home',
component:HomeComponent},
  {path:'login',
component:LoginComponent},
{path:'signup',
component:SignupComponent}, 
{path:'books',
canActivate: [AuthGuard],
component:BooksComponent},
  { path: 'books/:id',
  canActivate: [AuthGuard],
component:BookComponent },
{ path: 'books/:id/editbook',
canActivate: [AuthGuard],
component:EditbookComponent },
{path:'addbook',
canActivate: [AuthGuard],
component:NewbookComponent},
{path:'authors',
canActivate: [AuthGuard],
component:AuthorsComponent },
{path:'authors/:id',
canActivate: [AuthGuard],
component:AuthorComponent },
{path:'authors/:id/editauthor',
canActivate: [AuthGuard],
component:EditauthorComponent },
{path:'addauthor',
canActivate: [AuthGuard],
component:NewauthorComponent},

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
