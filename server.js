'use strict';

const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const cors       = require('cors'),
      mongoose   = require('mongoose'),
      uriUtil    = require('mongodb-uri');
let contacts =require('./data');//=require('./data');

const mongodbUri='mongodb://noderest:restapi@ds038319.mlab.com:38319/node_rest_api';
const mongooseUri=uriUtil.formatMongoose(mongodbUri);
const dbOptions={};


app.use(bodyParser.json());   //angular
app.use(bodyParser.urlencoded({extended:true}));  //json, text, urlencoded
app.use(cors());

app.use('/api/contacts',require('./api/contacts/routes/post_contact'));
app.use('/api/contacts',require('./api/contacts/routes/get_contacts'));



const hostname='localhost';
const port=3000;

app.listen(port, hostname,()=>{
  mongoose.connect(mongooseUri,dbOptions,(err)=>{
    if(err)
      console.log(err);
    console.log(`Server is running on http://${hostname}:${port}`);
  });
});