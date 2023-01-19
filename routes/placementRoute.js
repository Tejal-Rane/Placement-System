const mongoose=require('mongoose')
const router=require('express').Router()
const User=require('../model/addplacement')

router.post(`/addplacement`,(req,res)=>{
    console.log(req.body)
    const user=new User(req.body);
    user.save()
        .then(user=>{
            res.status(200).send("placement added successfully");
        })
        .catch(err=>{
            res.status(400).send('adding data failed');
        });
})

module.exports=router
