import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {
  
   
  constructor(private http:HttpClient) { }
  getSignup(signup:any){
    return this.http.post("http://localhost:3000/signup",{"signup":signup})
    .subscribe(data=>{console.log(data)})
  }
}
