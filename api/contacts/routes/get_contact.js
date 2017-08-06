const express=require('express');
const mongoose=require('mongoose');
const Contact=require('../model/Contact');
const router=express.Router();

router.route('/:id')     //some part of add is desc in server.js
  .get((req,res)=>{
    const _id = req.params.id;
    Contact.findOne({ _id },(err,contact)=>{ //findOne({_id: _id } is also ok....es6....space is important
      if(err)
          res.status(400).json(err);
      
      if(!contact){
        res.status(404).json({message:'Contact not found.'});
      }
      res.json(contact);
    });
  });

module.exports=router;