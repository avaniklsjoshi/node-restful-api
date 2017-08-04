'use strict';

const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const cors       = require('cors');
let contacts =require('./data');//=require('./data');

app.use(bodyParser.urlencoded({extended:true}));  //json, text, urlencoded
app.use(cors());

app.get('/api/contacts',(request,response)=>{
  console.log('hello avani');
  // response.send('hi');
  if(!contacts){
    response.status(404).json({message:'No contacts found'});
  }
  response.json(contacts);

});

app.get('/api/contacts/:id',(req,res)=>{
  const requestId=req.params.id;

  let contact=contacts.filter(contact=>{
    return contact.id==requestId;
  });

  if(!contacts){
    response.status(404).json({message:'No contacts found'});
  }

  res.json(contact[0]);
});

app.post('/api/contacts',(req, res)=>{
  const contact={
    id: contacts.length+1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email:req.body.email,
    website: req.body.website
  }

  contact.push(contact);
});

const hostname='localhost';
const port=3000;

app.listen(port, hostname,()=>{
  console.log(`Server is running on http://${hostname}:${port}`);
});