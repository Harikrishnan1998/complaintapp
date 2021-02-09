const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@hkfiles.rh7e8.mongodb.net/LibraryDb?retryWrites=true&w=majority');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    name: String,
   
    email: String,
    username:String,
    password:String,
    confirmPassword:String,
});
var user=mongoose.model('user',userSchema);
module.exports=user;