const express = require('express')
const app = express();
const port = 3000;

app.get('/',(request , response)=>{
  response.send("This is mt first server . welcome to my server");
})

app.get('/myMom',(request , response)=>{
  response.send("this is my second destination . welcome . i am started to learn")
})

app.listen(port , ()=>{
  console.log(`This is the port number : ${port}`);
  
})