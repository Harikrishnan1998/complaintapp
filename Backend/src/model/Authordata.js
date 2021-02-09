const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@hkfiles.rh7e8.mongodb.net/LibraryDb?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    // productId : Number,
    authorName : String,
    authorCode : String,
    genre : String,
    // description : String
    works: String,
    country:String,
    imageUrl : String
});

var Authordata = mongoose.model('author', AuthorSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Authordata;