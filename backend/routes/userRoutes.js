const mongoose=require("mongoose");
const express=require("express")
const router=express.Router();
const users=require("../model/userModel")
const bodyParser=require("body-parser");
const bcrypt=require("bcrypt");
const SECRET="app";
const jwt=require("jsonwebtoken");

router.use(bodyParser());

router.post('/',async(req,res)=>{
    try{
        // console.log(req.body);
        const user=await users.findOne({"email":req.body.emailORphone});
        if(!user){
            const user=await users.findOne({"phone":req.body.emailORphone});
            if(user){
                bcrypt.compare(req.body.password,user.password,(err,result)=>{
                    if (result) {
                        var token = jwt.sign({
                            exp: Math.floor(Date.now() / 1000) + (60 * 60),
                            data: user._id
                        }, SECRET);
                    return res.status(200).json({
                        success:true,
                        message:"Logged in phone successfully",
                        username:user.name,
                        token
                    })
                    }else{
                        return res.json(
                            {
                                success:false,
                                message:"wrong password"
                            }
                        );
                    }
                })
            }else{
                return res.json({
                    success:false,
                    message:"Enter correct email/phone number"
                });
            }
        }else{
            bcrypt.compare(req.body.password,user.password,(err,result)=>{
                if (result) {
                    var token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: user._id
                    }, SECRET);
                return res.status(200).json({
                    success:true,
                    message:"Logged in Email successfully",
                    username:user.name,
                    token
                })
                }else{
                    return res.json({
                        success:false,
                        message:"wrong password"});
                }
            })
        }

    }catch(e){
        return res.status(404).json({
            success:false,
            message:"Internal server error"
        })
    }
})

router.post('/register',async(req,res)=>{
    try{

        console.log(req.body);
        let userEmail=await users.findOne({email:req.body.email})
        let userPhone=await users.findOne({phone:req.body.phone})
        if(userEmail || userPhone){
            res.json({
                success:false,
                message:"user already registered"
            })
        }else{
            bcrypt.hash(req.body.password,10,async(err,hash)=>{
                if(hash){
                    const user=await users.insertMany({
                        name:req.body.name,
                        email:req.body.email,
                        phone:req.body.phone,
                        password:hash
                    })
                    console.log(user)
                    return res.status(200).json({
                        success:true,
                        message:"Registered  successfully",
                        user
                    })
                }
            })
        }
        
    }catch(e){
        return res.status(404).json({
            success:false,
            message:e.message
        })
    }
})
module.exports=router;
