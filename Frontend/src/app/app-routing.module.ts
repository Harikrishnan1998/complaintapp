import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProductsComponent } from './products/products.component'
import { NewProductComponent } from './newproduct/newproduct.component';
import {LoginComponent} from './login/login.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AuthorsComponent } from './authors/authors.component'
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { NewAuthorComponent } from './newauthor/newauthor.component';
import {SignupComponent} from './signup/signup.component';
import { SingleComponent } from './single/single.component';
import {UserloginComponent} from './userlogin/userlogin.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: '/userlogin',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path:'product/:id',
    component:SingleComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'userlogin',
    component: UserloginComponent
  },
  
  {
    path: 'signup',
    component: SignupComponent
  },
  {path:'add', 
  
  component: NewProductComponent,
},
{
  path:'update',
  component:UpdateProductComponent
},
{
  path: 'add/products',
  component: ProductsComponent
},

{
  path: '',
  redirectTo: '/authors',
  pathMatch: 'full'
},
{
  path: 'authors',
  component: AuthorsComponent
},
{
  path:'updateauthor',
  component:UpdateAuthorComponent
},
{path:'addauthor', 
   canActivate: [AuthGuard],
  component: NewAuthorComponent,
},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
