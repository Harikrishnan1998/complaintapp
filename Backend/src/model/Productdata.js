const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@hkfiles.rh7e8.mongodb.net/LibraryDb?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    name : String,
    rno : String,
    housename : String,
    email : String,
    phno :Number,
    status:String,
    details : String,
    doc:String
});

var Productdata = mongoose.model('product', NewProductSchema);                

module.exports = Productdata;