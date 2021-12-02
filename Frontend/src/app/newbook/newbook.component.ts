import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent implements OnInit {
  selectedFile: any = null;
  fd = new FormData();
  constructor(private bookService: BooksService ,private router: Router){  } 
  bookItem : any= {
     title :'',
     author:'',
     genre:'',
     pages:'',
     lang:'',
     trans:'',     
     }
 // productItem: IProduct;

 

  
  createFormData(event:any) {
   this.selectedFile = <File>event.target.files[0];
   this.fd.append('image', this.selectedFile, this.selectedFile.name);
  }

  
  ngOnInit() {
  }
  Addbook()
  {    
    for (const prop in this.bookItem)
    {
      this.fd.append(prop, this.bookItem[prop]);
    }
    
    this.bookService.newbook(this.fd)
    .subscribe(data =>
      {console.log(data);
        this.router.navigate(['/books']);
      })    
   
    
  }
}
