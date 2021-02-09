import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorserviceService } from '../authorservice.service';
@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
  authorItem= {
    // productId :'',
    authorName:'',
    authorCode:'',
    genre:'',
    // description:'',
    works:'',
    country:'',
    imageUrl:''}
  constructor(private router:Router,private authorService:AuthorserviceService) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("editAuthorId");
    this.authorService.getAuthor(authorId).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));

})
}
editAuthor()
  {    
    this.authorService.editAuthor(this.authorItem);   
    alert("Success");
    this.router.navigate(['authors']);
  }

}