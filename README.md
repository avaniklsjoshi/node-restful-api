# node-restful-api
Make sure http-server is installed globally:

npm install -g http-server
Clone the repo, then:

http-server
The app will be served at localhost:8080.
============================
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
    email: req.body.email,
    website: req.body.website
  }
 
  contacts.push(contact);

  res.json(contact);
});

app.put('/api/contacts/:id',(req, res)=>{
  const requestId=req.params.id;

  let contact=contacts.filter(contact=>{
    return contact.id==requestId;
  })[0];

  const index=contacts.indexOf(contact);

  const keys=Object.keys(req.body);

  keys.forEach(key=>{
    contact[key]=req.body[key];
  });
  contacts[index]=contact;
  res.json(contacts[index]);
});

app.delete('/api/contacts/:id',(req, res)=>{
  const requestId=req.params.id;

  let contact=contacts.filter(contact=>{
    return contact.id==requestId;
  })[0];

  const index=contacts.indexOf(contact);

  contacts.splice(index,1);

  res.json({message:`User ${requestId} deleted.`});
});
