const User=require("../modals/user.modal")

const userController={};

/**
 * Sign Up
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
userController.register= async (req,res,next)=>{
    const {name , email,password , joined}=req.body;
    const newUser=new User({
        name , email,password , joined
    });
    
    try{
        const user = await newUser.save();
        return res.send({user});
    }catch(e){
        next(e);   
    }
}

module.exports=userController;