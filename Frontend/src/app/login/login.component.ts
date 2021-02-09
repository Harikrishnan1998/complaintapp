import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={uname:'', password:''}

  constructor(public _auth: AuthService,private _router:Router,private fb:FormBuilder) { }
            

  loginUser () {
    if (this.user.uname=='' && this.user.password==''){
      alert("please fill all the fields");
      this._router.navigate(['/login']);
    }
    else{
    this._auth.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        alert("Login success ");
        this._router.navigate(['/products'])
      },
      err => {
        console.log(err);
        alert(" invalid ");
        this._router.navigate(['/login'])
      }
    ) }
  }
  
  ngOnInit() {
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
