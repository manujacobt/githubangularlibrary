import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }
  api="http://localhost:3000";
  getbooks(){
    return this.http.get(this.api+"/books");
  }
  getbook(id:any){
    return this.http.get<any>(`${this.api}/books/${id}`);
  }
  newbook(item:any)
  {   
     return this.http.post(this.api+"/addbook/add",item)
    
  }
  editbook(id:any,book:any)
  {
    console.log(id)
    console.log(book)
    return this.http.put(`${this.api}/books/${id}/editbook`,book)
    .subscribe(data =>{console.log(data)})
    
  }
  ediitbookimage(id:any,item:any){
    return this.http.put(`http://localhost:3000/books/${id}/editbookimage`,item)
    .subscribe(data =>{console.log(data)})
  }

  deletebook(id:any)
  {

    return this.http.delete(`http://localhost:3000/books/${id}/deletebook`)
    .subscribe(data =>{console.log(data)})
  }
}
