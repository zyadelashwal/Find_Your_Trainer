const express=require('express');
const router = express.Router();

const userController=require('../controllers/user.controller');



//auth 
router.post('/register',userController.register);

module.exports=router;