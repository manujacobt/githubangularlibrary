import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private router:ActivatedRoute, public authorservice:AuthorService, 
    public _auth:AuthService,private rout:Router ) { }
  pageTitle: string = 'AUTHOR DETAILS';
author:any={};
imageWidth: number = 200;
imageMargin: number = 2;

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) =>
    {        
      console.log(params.get("id"))
      this.authorservice.getauthor(params.get("id")).subscribe((data:any)=>{
        this.author=data;
        console.log(this.author)
      })
    }) 
  }

  deleteauthor()
  {
    this.router.paramMap.subscribe((params) =>
    {        
      console.log(params.get("id"))
      this.authorservice.deleteauthor(params.get("id"));  
    alert("Deleted");
    this.rout.navigate(['authors']);
      }) 
  }

}
