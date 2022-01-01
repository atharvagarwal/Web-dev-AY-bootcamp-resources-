const express=require('express')
const app=express()
const body=require('body-parser')
const https=require('https')
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get("/",function(req,res){

res.status(200).sendFile(__dirname+"/index.html");
})



app.post("/",function(req,res){
    const email= req.body.email
    const f_name=req.body.fName
    const l_name=req.body.lName
console.log("the email of " + f_name +" " + l_name+' is '+email);

var data={
    members:[{
        email_address:email 
        ,
        status:"subscribed"
    ,
    merge_fields:{
        FNAME:f_name,
        LNAME:l_name,
    }}]}
    var jsonData= JSON.stringify(data)
    const url="https://us5.api.mailchimp.com/3.0/lists/9ee630dfd"
const options={
    method: 'POST',
    auth:'API_KEY:44806744054f65cad65e4ae0c72243e3-us5'
}
const request=https.request(url,options,function(response){
console.log("The response is recorded on mailchimp audience list")
if (response.statusCode===200){
    res.status(200).sendFile(__dirname+"/success.html")
}
else{res.sendFile(__dirname+"/failure.html")}
})


request.write(jsonData)
request.end();
})

app.listen(3000,function(){console.log("the port is running on port 3000")})




//https is only a get request TO GIVE POST REQ USE .REQUEST




//44806744054f65cad65e4ae0c72243e3-us5
/*
audience id
 9ee630dfd5
 */





