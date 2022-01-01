

let getDate=function(){
var options={
    day:"numeric",
    weekday:"long",
    month:"long"
}
var today=new Date
var currentDay=today.toLocaleDateString("en-us",options)
return currentDay;
}

exports.getDate=getDate;