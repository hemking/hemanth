var rand1=Math.floor(Math.random()*6)+1;
var randDiceImg="dice"+rand1+".png";
var randSourc="images/"+randDiceImg;
 var image1=document.querySelectorAll("img")[0];
 image1.setAttribute("src",randSourc);

 //for img 2
 var rand2=Math.floor(Math.random()*6)+1;
var randDiceImg="dice"+rand2+".png";
var randSourc="images/"+randDiceImg;
 var image2=document.querySelectorAll("img")[1];
 image2.setAttribute("src",randSourc);

 if(rand1===rand2){
    document.querySelector("h1").innerHTML="draw!";
 }
 else if(rand1>rand2){
    document.querySelector("h1").innerHTML="😎Player1 wins ra chaari!"
 }
 else {
    document.querySelector("h1").innerHTML="Player2 wins!🫥"
 }