import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productservice.service'
import { Router } from '@angular/router';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private productService: ProductService,private router: Router,public _auth:AuthService){  } 
  productItem= {
    name:'',
    rno:'',
    housename:'',
    status:'',
    //  description:'',
    email:'',
    phno:'',
    details:'',
    doc:''}
  ngOnInit() {
  }
  AddProduct()
  { 
    
    this.productService.newProduct(this.productItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/products']);
  
}
logoutUser()
{
localStorage.removeItem('token')
this.router.navigate(['/userlogin'])
}
}