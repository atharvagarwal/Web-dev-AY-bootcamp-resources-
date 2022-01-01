let randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage1="images/" + "dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src",randomImage1);

console.log(randomImage1)
let randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2= "images/" + "dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImage2);

if(randomNumber2>randomNumber1)
{document.querySelector("h1").innerHTML= "PLAYER 2 WINS";}
else if(randomNumber1>randomNumber2)
{document.querySelector("h1").innerHTML= "PLAYER 1 WINS";}
else {document.querySelector("h1").innerHTML= "DRAW";}



