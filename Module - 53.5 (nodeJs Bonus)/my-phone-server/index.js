const express= require('express')
const phones= require('./phones.json')
const app = express();
const cors = require('cors')
const port = 3000;

app.use(cors())

app.get('/' , (request , response)=>{
  response.send("this is my phone server. data coming soon");
})

app.get('/phones',(request,response)=>{
  response.send(phones)
})

app.get('/phones/:id' , (request , response)=>{
  const id = parseInt(request.params.id);
  console.log("I need data for :" ,id);
const phoneData = phones.find(item=>item.id===id) || {};
  response.send(phoneData)

  
})

app.listen(port)