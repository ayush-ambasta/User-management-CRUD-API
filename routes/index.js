const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("hello from routers");
});

router.use('/user',require('./user'));

module.exports=router;