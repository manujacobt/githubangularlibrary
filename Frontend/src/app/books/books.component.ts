import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(public booksservice:BooksService) { }
role:any;
  
  pageTitle: string = 'BOOKS DETAILS';
  imageWidth: number = 100;
  imageMargin: number = 2;
  showImage: boolean = false;

  books:any=[];
    ngOnInit(): void {
    this.role=localStorage.getItem("role")
    this.booksservice.getbooks().subscribe((data:any)=>{
      this.books=data;
    })
  }
}
