import { Component } from '@angular/core';
import { ProductService } from '../productservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'pm-products',
  templateUrl:'./products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  title = '';
  imageWidth: number = 150;
  imageMargin: number = 70;
  imageHeight: number = 150;
  showImage: boolean = true;

  products=<any>{};
  
  constructor(private router:Router,private productService: ProductService,public _auth:AuthService){   
    
  }
  ngOnInit(): void{
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
  })
  }
 
  editProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(['update']);

  }
  deleteProduct(product:any)
  {
    this.productService.deleteProduct(product._id)
      .subscribe((data) => {
        this.products = this.products.filter((p: any) => p !== product);
      })
  

  }
  logoutUser()
{
localStorage.removeItem('token')
this.router.navigate(['/userlogin'])
}
}
  