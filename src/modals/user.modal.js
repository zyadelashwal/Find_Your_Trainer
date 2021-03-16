const mongoose=require('mongoose');

const {Schema}=mongoose;

const UserSchema= Schema({
name:{type:String},
email:{type:String,required:true,index:true,unique:true},
password:{type:String,required:true},
joined:{type:Date,default:new Date()},
});

const User = mongoose.model('User',UserSchema);
module.exports=User;