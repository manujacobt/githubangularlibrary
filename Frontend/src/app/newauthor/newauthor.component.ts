import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {
  selectedFile: any = null;
  fd = new FormData();

  constructor(private router:Router, private authorService:AuthorService) { }

  authorItem : any= {
    name :'',
    place:'',
    main:'',
    works:'',
    numb:'',
        
    }  
    createFormData(event:any) {
      this.selectedFile = <File>event.target.files[0];
      this.fd.append('image', this.selectedFile, this.selectedFile.name);
     }
   

  ngOnInit(): void {
  }

  Addauthor()
  {        
    for (const prop in this.authorItem)
    {
      this.fd.append(prop, this.authorItem[prop]);
    }
    
    this.authorService.newauthor(this.fd)
    .subscribe(data =>
      {console.log(data);
        this.router.navigate(['/authors']);
      })    
   
    
  }

}
