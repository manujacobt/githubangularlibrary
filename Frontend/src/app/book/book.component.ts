import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private router:ActivatedRoute, public booksservice:BooksService,
    private rout:Router, public _auth:AuthService) { }

  pageTitle: string = 'BOOK DETAILS';
book:any={};
imageWidth: number = 200;
imageMargin: number = 2;

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) =>
      {        
        console.log(params.get("id"))
        this.booksservice.getbook(params.get("id")).subscribe((data:any)=>{
          this.book=data;
        })
      })      
  }

  deletebook()
  {
    this.router.paramMap.subscribe((params) =>
    {        
      console.log(params.get("id"))
      this.booksservice.deletebook(params.get("id"));  
    alert("Deleted");
    this.rout.navigate(['books']);
      }) 
  }

}
