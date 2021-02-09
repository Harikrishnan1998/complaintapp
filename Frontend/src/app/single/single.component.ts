import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  single={
    name:'',
    phno:'',
    rno:'',
    email:'',
    housename:'',
    details:'',
    _id:''
  }
  id='';

  constructor(private router:Router,private productService: ProductService,public _auth:AuthService,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.params['id'];  
 
   //    this.id=this._Activatedroute.snapshot.paramMap.get("id");
   //this.bookService.getBook(this.id).subscribe((data)=>{
    //this.book=JSON.parse(JSON.stringify(data));
      
   this.productService.getProduct(this.id).subscribe((data)=>{
    this.single=JSON.parse(JSON.stringify(data));
   });
  }
}