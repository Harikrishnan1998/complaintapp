import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule} from '@angular/material/input'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './newproduct/newproduct.component';
import {ProductService} from './productservice.service';
import { LoginComponent } from './login/login.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { UpdateProductComponent } from './update-product/update-product.component';
 import { AuthorsComponent } from './authors/authors.component';
 import {AuthorserviceService} from './authorservice.service';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { NewAuthorComponent } from './newauthor/newauthor.component';
import { SignupComponent } from './signup/signup.component';
import { SignupserviceService } from './signupservice.service';
import { SingleComponent } from './single/single.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserService} from './user.service';
@NgModule({ 
  declarations: [
    AppComponent,
    ProductsComponent,
    NewProductComponent,
    LoginComponent,
    UpdateProductComponent,
    AuthorsComponent,
    UpdateAuthorComponent,
    NewAuthorComponent,
    SignupComponent,
    SingleComponent,
    UserloginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [AuthService,AuthGuard,ProductService,AuthorserviceService,SignupserviceService,UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
