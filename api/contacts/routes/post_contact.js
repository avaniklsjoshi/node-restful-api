'use strict';

const express=require('express');
const mongoose=require('mongoose');
const Contact=require('../model/Contact');
const router=express.Router();

router.route('/')     //some part of add is desc in server.js
  .post((req,res)=>{
    const contact=new Contact(req.body);
    contact.save((err,contact)=>{
      if(err)
        res.status(400).json(err);

      res.json(contact);
    });
  });

module.exports=router;
