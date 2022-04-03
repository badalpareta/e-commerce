const express=require('express')
const router=express.Router()
const User=require('../models/usersModel')
router.post('/login',async(req,res)=>{
    const{username,password}=req.body
    try{
        const user=await User.findOne({username,password})
        if(user)
        {
            res.send(user.name)
        }
        else
        {
            return res.status(400).json(error)
        }
    }
    catch(error)
    {
        return res.status(400).json(error)
    }
})

router.post('/signup',async(req,res)=>{
    try{
const newUser=new User(req.body)
await newUser.save()
res.send("Success")
    }
    catch(e)
    {
        console.log(e)
    }
})
module.exports=router