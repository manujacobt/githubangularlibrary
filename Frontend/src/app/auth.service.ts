import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
role:any;

  constructor(private http:HttpClient) {
    this.role=localStorage.getItem("role");
  }
  api = "http://localhost:3000";
  
  loginuser(user:any){
    console.log(user)
return this.http.post<any>(this.api+"/login/check",user)

  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
}
