const express=require('express');
const mongoose=require('mongoose');
const Contact=require('../model/Contact');
const router=express.Router();

router.route('/:id')     //some part of add is desc in server.js
  .get((req,res)=>{
   Contact.findOne({},(err,contacts)=>{
    if(err)
        res.status(400).json(err);

    res.json(contacts);
   });
  });

module.exports=router;