const bcrypt = require("bcryptjs");
const { any } = require("joi");
const mongoose=require('mongoose');
const {validateNewUser,validateUpdateUser}=require("../middleware/validation");
const User=require('../models/user');

module.exports.create=async(req,res)=>{
    try{
        const username=req.body.username;
        const name=req.body.name;
        const password=req.body.password;
        const phoneNumber=req.body.phoneNumber;

        const validation=validateNewUser(req);
        if(validation.error){
            return res.status(400).send({success:false,msg:validation.error.details[0].message});
        }

        const user=await User.findOne({username:username});
        if(user){
            res.status(403).json({success:false,msg:"User already exists"});
        }else{
            const salt=await bcrypt.genSalt(10);
            const secpassword=await bcrypt.hash(password,salt);
            const newuser=await User.create({username:username,name:name,password:secpassword,phoneNumber:phoneNumber});
            res.status(200).json({success:true,msg:"User registered successfully",newuser});
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({success:false,msg:"Internal server error"});
    }
}

module.exports.update= async (req,res)=>{
    try{
        const user=await User.findOne({username:req.params.username});
        if(user){ 
            const validation=validateUpdateUser(req);
            if(validation.error){
                return res.status(400).send({success:false,msg:validation.error.details[0].message});
            }
            user.name=req.body.name || user.name;
            if(req.body.password){
                const salt=await bcrypt.genSalt(10);
                const secpassword=await bcrypt.hash(req.body.password,salt);
                user.password=secpassword;
            }
            user.phoneNumber=req.body.phoneNumber || user.phoneNumber;
            user.save();
            return res.status(200).json({success:true,msg:"User updated successfully",user});
        }else{
            res.status(404).json({success:false,msg:"User not found"});
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({success:false,msg:"Internal server error"});
    }
}

module.exports.getdetails= async (req,res)=>{
    try{
        const user = await User.findOne({username:req.params.username});
        if(user){
            return res.status(200).json({success:true,user});
        }else{
            return res.status(404).json({success:false,msg:"User not found"});
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({success:false,msg:"Internal server error"});
    }
}

module.exports.delete= async(req,res)=>{
    try{
        const user = await User.findOne({username:req.params.username});
        if(user){
            user.remove();
            return res.status(200).json({success:true,msg:"user deleted successfully"});
        }else{
            return res.status(404).json({success:false,msg:"User not found"});
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({success:false,msg:"Internal server error"});
    }
}