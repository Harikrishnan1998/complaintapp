import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import  {UserModel} from '../usermodel'
import {UserService} from '../user.service'
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  errorMsg = '';
userData ={email:'',
          password:''};
  
    constructor(private UserService:UserService,private _router:Router,public _auth:AuthService) {}
  
    ngOnInit(): void {}
  
    login()
    {
      this.UserService.uSign(this.userData)
      // console.log("called");
      // alert("Login Successful"); 
      // this.router.navigate(['/']);
      .subscribe((data: any) => console.log('Login Successful',data,alert("Login Successful"), this._router.navigate(['/add'])),
      err => {
        console.log(err);
        alert(" invalid ");
        this._router.navigate(['/userlogin'])
      })
    }
    logoutUser()
{
localStorage.removeItem('token')
this._router.navigate(['/products'])
}
loggedUser()
{
  this._router.navigate(['/add'])
  // this._router.navigate(['/authors'])
}
  
  }
  
