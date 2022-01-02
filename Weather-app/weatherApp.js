const express=require('express');
const app=express();
app.use(express.urlencoded({ extended: true }));
const bodyParser  = require('body-parser');
const http= require("http");

app.get("/",function(request,response){
    response.sendFile(__dirname+"/index.html")
})

app.post("/about",function(req,response){
 console.log("post req recieved")
 const cityN = req.body.cityName
 
const url= "http://api.openweathermap.org/data/2.5/weather?q="+cityN+"&appid=2f346ffa6bdc42db52ea92dd3f2780e4"
http.get(url,function(res){
    //this is saying that whenever user requests to api https get back data and res.on gets the data and then calls callback function.
    
    res.on('data',function(data){
    const weatherData= JSON.parse(data)
    console.log(weatherData)
    var tempr= weatherData.main.temp
    var celsius=tempr-273
    var weatherDescription= weatherData.weather[0].description
    const icon=weatherData.weather[0].icon
    const imgURL= "http://openweathermap.org/img/wn/"+icon+"@2x.png"

    response.status(200).write(("<h1>The Temperature of the " +cityN +" is" + celsius + " degree Celcius <h1>").toString());
    response.status(200).write(("The Temperature of "+cityN+" is "+ weatherDescription).toString());
    response.status(200).write("<img src=" + imgURL +">");
    response.status(200).send();
    

    })
    
})
 
})

app.listen(3000,function(){console.log("server is running on local host 3000")});
