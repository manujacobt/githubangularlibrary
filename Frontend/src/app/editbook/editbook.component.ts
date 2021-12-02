import { Component, OnInit } from '@angular/core';

import { BooksService } from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
  selectedFile: any = null;
  fd = new FormData();
 
   
  
  constructor(private router:ActivatedRoute, private bookservice: BooksService, 
    private rout:Router) { }

    bookItem : any= {
      title :'',
      author:'',
      genre:'',
      pages:'',
      lang:'',
      trans:''
      
      }  

createFormData(event:any) {
   this.selectedFile = <File>event.target.files[0];
   console.log(this.selectedFile);
   this.fd.append('image', this.selectedFile, this.selectedFile.name);
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) =>
    {        
      console.log(params.get("id"))
      this.bookservice.getbook(params.get("id")).subscribe((data:any)=>{
        this.bookItem=data;
      })
    })    
}
editbook()
  {   this.router.paramMap.subscribe((params) =>
    {        
      console.log(params.get("id"))
      this.bookservice.editbook(params.get("id"),this.bookItem);   
    alert("Success");
    this.rout.navigate([`books/${(params.get("id"))}`]);
      })     
  }
  bookimage(){
      
    for (const prop in this.bookItem)
    {
      this.fd.append(prop, this.bookItem[prop]);
    }
    this.router.paramMap.subscribe((params) =>
    {        
      console.log(params.get("id"))
      this.bookservice.ediitbookimage(params.get("id"),this.fd);   
    alert("Success");
    this.rout.navigate([`books/${(params.get("id"))}`]);
      }) 
  }

  
}
