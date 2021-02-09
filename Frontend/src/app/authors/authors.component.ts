import { Component, OnInit } from '@angular/core';
import { AuthorserviceService } from '../authorservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent  {
  pageTitle: string = 'Authors';
  imageWidth: number = 150;
  imageHeight: number = 150;
  imageMargin: number = 70;
  showImage: boolean = false;

  authors=[{
    //  productId :'',
    authorName:'',
    authorCode:'',
    genre:'',
    // description:'',
    works:'',
    country:'',
    imageUrl:''}]
  
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor(private router:Router,private authorService: AuthorserviceService,public _auth:AuthService) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
  })}
  editAuthor(author:any)
  {
    localStorage.setItem("editAuthorId", author._id.toString());
    this.router.navigate(['updateauthor']);

  }
  deleteAuthor(author:any)
  {
    this.authorService.deleteAuthor(author._id)
      .subscribe((_data) => {
        this.authors = this.authors.filter(p=> p !== author);
      })
  

  }
  }

