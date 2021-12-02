import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./editauthor.component.css']
})
export class EditauthorComponent implements OnInit {

  selectedFile: any = null;
  fd = new FormData();

  constructor(private authorservice:AuthorService, private router:ActivatedRoute,
    private rout:Router) { }

  authorItem : any= {
    name :'',
    place:'',
    main:'',
    works:'',
    numb:'',
        
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
      this.authorservice.getauthor(params.get("id")).subscribe((data:any)=>{
        this.authorItem=data;
      })
    })  
  }

  editauthor()
  {   this.router.paramMap.subscribe((params) =>
    {        
      console.log(params.get("id"))
      this.authorservice.editauthor(params.get("id"),this.authorItem);   
    alert("Success");
    this.rout.navigate([`authors/${(params.get("id"))}`]);
      })     
  }
  authorimage(){
      
    for (const prop in this.authorItem)
    {
      this.fd.append(prop, this.authorItem[prop]);
    }
    this.router.paramMap.subscribe((params) =>
    {        
      console.log(params.get("id"))
      this.authorservice.editauthorimage(params.get("id"),this.fd);   
    alert("Success");
    this.rout.navigate([`authors/${(params.get("id"))}`]);
      }) 
  }

}
