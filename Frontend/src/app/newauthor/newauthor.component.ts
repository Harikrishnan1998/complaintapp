import { Component, OnInit } from '@angular/core';
import { AuthorserviceService } from '../authorservice.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewAuthorComponent implements OnInit {

  constructor(private authorService: AuthorserviceService,private router: Router) { } 
    authorItem= {
       authorName:'',
       authorCode:'',
       genre:'',
       works:'',
       country:'',
       imageUrl:''}
  
  ngOnInit (){
    
  }
  AddAuthor()
  {  
    if(this.authorItem.authorName=='' || this.authorItem.genre=='' || this.authorItem.works=='' || this.authorItem.imageUrl=='') {
      alert("Please fill all the  fields"); }
      else{
    this.authorService.newAuthor(this.authorItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['authors']);
  }}
}
