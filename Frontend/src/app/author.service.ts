import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  api="http://localhost:3000";
  constructor(private http:HttpClient) { }
 
  getauthors(){
    console.log("author")
    
    return this.http.get(this.api+"/authors");
  }
  getauthor(id:any){
    return this.http.get(`${this.api}/authors/${id}`);
  }

  newauthor(item:any)
  {   
    console.log("trfgggg")
     return this.http.post(this.api+"/addauthor/add",item)
    
  }

  editauthor(id:any,author:any)
  {
    console.log(id)
    console.log(author)
    return this.http.put(`${this.api}/authors/${id}/editauthor`,author)
    .subscribe(data =>{console.log(data)})
    
  }
  editauthorimage(id:any,item:any){
    return this.http.put(`${this.api}/authors/${id}/editauthorimage`,item)
    .subscribe(data =>{console.log(data)})
  }

  deleteauthor(id:any)
  {

    return this.http.delete(`${this.api}/authors/${id}/deleteauthor`)
    .subscribe(data =>{console.log(data)})
  }
}
