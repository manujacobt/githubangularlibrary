import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { TokenInterceptorService } from './token-interceptor.service';
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

@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent,
    SignupComponent,
    BooksComponent,
    NewbookComponent,
    BookComponent,
    EditbookComponent,
    HomeComponent,
    AuthorsComponent,
    AuthorComponent,
    EditauthorComponent,
    NewauthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
