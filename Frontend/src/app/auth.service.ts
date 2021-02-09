import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  loginUser(user:any){
    return this.http.post<any>("http://localhost:3000/login",user)
    
  }
  
  constructor(private http: HttpClient) { }


  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
}