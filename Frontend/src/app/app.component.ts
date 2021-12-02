import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Library APP';
  constructor(private _router:Router, public _auth:AuthService){}
  
  ngOnInit(){
    
  }
logoutUser()
{
localStorage.removeItem('token')
localStorage.removeItem('role')

this._router.navigate(['/'])
}
loggedUser()
{
  this._router.navigate(['/add'])
}
}
