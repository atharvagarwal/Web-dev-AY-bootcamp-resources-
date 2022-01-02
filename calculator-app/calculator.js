
const express = require("express")
const app=express()
const bodyParser  = require('body-parser');

app.use(express.urlencoded({ extended: true }));


app.get("/",function(request,res){
    res.status(200).sendFile(__dirname+"/index.html");

})



app.post("/",function(req,res){
    
    var n1= Number(req.body.num1);
    var n2= Number(req.body.num2);
    var add= n1+n2
    res.status(200).send((add).toString());
    
})

app.get("/bmi",function(request,res){
    res.sendFile(__dirname + "/bmi.html");

})


app.post("/bmi",function(req,res){
    
    var h= parseFloat(req.body.h1);
    var w= parseFloat(req.body.w1);
    var cln= (h*h)/w
    
    res.status(200).send((cln).toString());
    
    
})



app.listen(3000,function(){console.log("server is running on local host 3000")});