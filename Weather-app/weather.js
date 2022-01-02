
const express=require('express');
const app=express();
const bodyparser=require('body-parser');
app.use(express.urlencoded({ extended: true }));
const http= require("http");

app.get("/",function(req,response){
const cityN = req.body.cityName
const url= "http://api.openweathermap.org/data/2.5/weather?q="+cityN+"&appid=2f346ffa6bdc42db52ea92dd3f2780e4";
http.get(url,function(res){
    
    res.on('data',function(data){
    const weatherData= JSON.parse(data)
    console.log(weatherData)
    var temp1= weatherData.main.temp
    var celsius=temp1-273
    var weatherDescription= weatherData.weather[0].description
    const icon=weatherData.weather[0].icon
    const imgURL= "http://openweathermap.org/img/wn/"+icon+"@2x.png"

    response.status(200).write(("<h1>The Temperature of the" +cityN +" is" + celsius + " degree Celcius <h1>").toString());
    response.status(200).write(("The Temperature of"+cityN+" is"+ weatherDescription).toString());
    response.status(200).write("<img src=" + imgURL +">");
    response.status(200).send();
    

    })
    
})

})




















app.listen(3000,function(){console.log("server is running on local host 3000")})