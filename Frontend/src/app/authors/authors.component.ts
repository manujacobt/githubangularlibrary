import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(public authorservice:AuthorService) { }
  role:any;
  
  pageTitle: string = 'AUTHORS DETAILS';
  imageWidth: number = 100;
  imageMargin: number = 2;
  showImage: boolean = false;

  authors:any=[];

  ngOnInit(): void {
    this.role=localStorage.getItem("role")
    this.authorservice.getauthors().subscribe((data:any)=>{
      this.authors=data;
    })
  }

}
