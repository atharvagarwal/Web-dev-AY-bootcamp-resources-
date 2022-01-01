function anotherAddEventListener(eventType, Callback){
  var eventHappened={eventType:"keypress",key:"p",value:"xyz"}         
  if (eventHappened.eventType=== eventType); {                                   
     Callback(eventHappened);} }
     
    anotherAddEventListener("keypress" , function(event){ console.log(event);}) 
// {eventType: 'keypress', key: 'p', value: 'xyz'}
//callbacks ka concept clear 


// objects 
let myObject = { name:"rahul dravid ", nickname: " the wall"}

//calling objects 

myObject.name // property call

//higher order functions 

function addition (num1,num2) {
  var a = num1 + num2;
}

function multiplication (num1,num2) {
  var b = num1+num2
}

function higherOrder (num1,num2,operator){
return operator(num1,num2);

}

higherOrder(1,3,addition);

//know about debugger mode in javascript 


//eventlisteners 

document.querySelector(".class").addEventListener("click", handleclick);
handleclick(){
  alert("click click click")
}
//know about this property

//switchstatements ( a important concept)


//Constructor Functions 

function ConstFunction(x,y,z){
  this.name= x;
  this.clss= y;
  this.section = z;

}
var objectName = new ConstFunction("rahul" , 5, "c");
objectName.clss; // calling of our function. 

//methods (nested functions in object - easy language )

function MethodFunc(x,y,z){
  this.namme= x;
  this.class= y;
  this.sectionn = z;
  this.clean= function( ) {
    alert("");
  }
}
//call method 
var methodObj = new MethodFunc(p,q,r);
methodObj.clean;
//calling over

//keyboardeventlisteners 

$0.addEventListener("keypress", function(event){console.log(event);})
//we dont need to call these functions since these are based on events 

//the end 







