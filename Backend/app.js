const express = require('express');
const ProductData = require('./src/model/Productdata');
const AuthorData=require('./src/model/Authordata');
const user=require('./src/model/user');
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();

app.use(cors());
app.use(bodyparser.json());
username='admin';
password='1234';


function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }

app.post('/insert',function(req,res){
   
    console.log(req.body);
   
    var product = {       
        // productId : req.body.product.productId,
        name : req.body.product.name,
        rno : req.body.product.rno,
        housename : req.body.product.housename,
        // description : req.body.product.description,
        email : req.body.product.email,
        phno : req.body.product.phno,
        status:req.body.product.status,
        details : req.body.product.details,
        doc : req.body.product.details
   }       
   var product = new ProductData(product);
   product.save();
});

app.post('/insertauthor',verifyToken,function(req,res){
   
  console.log(req.body);
  
  var author = {       
      // productId : req.body.product.productId,
      authorName : req.body.author.authorName,
      authorCode : req.body.author.authorCode,
      genre : req.body.author.genre,
      // description : req.body.product.description,
      works: req.body.author.works,
      country : req.body.author.country,
      imageUrl : req.body.author.imageUrl,
 }       
 var author = new AuthorData(author);
 author.save();
});
app.get('/products',function(req,res){
    
    ProductData.find()
    .then(function(products){
         res.send(products);
     });
});
app.get('/authors',function(req,res){
    
  AuthorData.find()
              .then(function(authors){
                  res.send(authors);
              });
});

app.get('/:id',  (req, res) => {
  
  const id = req.params.id;
  ProductData.findOne({"_id":id})
    .then((product)=>{
        res.send(product);
  });
})

app.post('/login', (req, res) => {
    let userData = req.body;
     if (!username) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
    })

    app.put('/update',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
      // productName = req.body.productName,
      // productCode = req.body.productCode,
      // releaseDate = req.body.releaseDate,
      // price = req.body.price,
      // starRating = req.body.starRating,
      // imageUrl = req.body.imageUrl
      status=req.body.status
     ProductData.findByIdAndUpdate({"_id":id},
                                  {$set:{
                                  // "productName":productName,
                                  // "productCode":productCode,
                                  // "releaseDate":releaseDate,
                                  // "price":price,
                                  // "starRating":starRating,
                                  // "imageUrl":imageUrl
                                "status":status}})
     .then(function(){
         res.send();
     })
   })
app.get('/author/:id',  (req, res) => {
  
    const id = req.params.id;
      AuthorData.findOne({"_id":id})
      .then((author)=>{
          res.send(author);
      });
    })
    app.put('/updateauthor',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
      authorName = req.body.authorName,
      authorCode = req.body.authorCode,
      genre = req.body.genre,
      works = req.body.works,
      country = req.body.country,
      imageUrl = req.body.imageUrl
     AuthorData.findByIdAndUpdate({"_id":id},
                                  {$set:{
                                  "authorName":authorName,
                                  "authorCode":authorCode,
                                  "genre":genre,
                                  "works":works,
                                  "country":country,
                                  "imageUrl":imageUrl}})
     .then(function(){
         res.send();
     })
    })
    
app.delete('/remove/:id',(req,res)=>{
   
     id = req.params.id;
     ProductData.findByIdAndDelete({"_id":id})
     .then(()=>{
         console.log('success')
         res.send();
     })
   })
   app.delete('/removeauthor/:id',(req,res)=>{
  
    id = req.params.id;
    AuthorData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
   })

app.post('/signup',function(req,res){
   console.log(req.body);

  var signup = {
    name:  req.body.signup.name,
     email: req.body.signup.email,
    username:  req.body.signup.username,
    password :req.body.signup.password,
    confirmPassword:req.body.signup.confirmPassword,
  }  
 var signup = new user(signup);
 signup.save();

});



app.post('/userlogin',(req,res)=>{ 
  res.header("Access-Control-Allow-Origin","*");
  res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE,OPTIONS');
  var users ={email:req.body.users.email,password:req.body.users.password};
  console.log(users);
  user.findOne({email:users.email,password:users.password},(err,userdata)=>{
      if(err)
      {
          console.log(err)
      }
      else
      {
          if(!userdata)
          {
              res.status(401).send('Invalid Credentials')
      
          }
      else
      {
          res.status(200).send(userdata);
              
      }
      }
  })

})
app.listen(3000, function(){
  console.log('listening to port 3000');
});
