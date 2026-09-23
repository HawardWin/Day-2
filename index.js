const express = require(`express`);

const main = express() ;

 main.get('/',(req , res)=>{
    res.send("Hii")
 })

  main.get('/contact' , (req,res)=>{
   res.send('hello , this is contact page')
  })

main.listen(5100)