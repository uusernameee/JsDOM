//id:-
document.getElementById('start').style.background="yellow";

//class:-
let elem=document.getElementsByClassName('container');
elem[0].style.background="red";
elem[1].style.background="orange";

//adding class:-
//elem[0].classList.add("bg");
//removing class:-
//elem[0].classList.remove("bg");

//accessing text:-
/*let textt=document.getElementById('para');
//1st way:-innerHTML
//console.log(textt.innerHTML);
//2nd way:-innerText
//console.log(textt.innerText);

//getElementByTagName():-
//console.log(document.getElementsByTagName('div'));

//Creating new tags:-
let newele=document.createElement('p');
newele.innerText="This is a newly created paragraph element.";
elem[0].appendChild(newele);

//can replace childs:-
let newele2=document.createElement('p');
newele2.innerText="remove para.";
elem[0].replaceChild(newele2,newele);

//remove child using removeChild;

//selecting using query:-
sel=document.querySelector('.container');
console.log(sel);
sel=document.querySelectorAll('.container');
console.log(sel);
sel=document.querySelector('#start');
console.log(sel);*/


//EVENTS:-
 // 1:-onclick
 /*function func(){
   console.log('clicked');
 }
 //2-onload
 window.onload=function(){
   console.log('loaded');
 }
 //3:-mouseover/mouseout/mouseup/mouseout
 start.addEventListener('click',function(){
   console.log("hey mouse clicked!");
 })

 //addEventListener:-
 start.addEventListener('click',function(){
   console.log("hey clicked!");
 })

 //Arrow functions:-
 sum=(a,b,c)=>{
   return a+b+c;
 }

//SetTimeOut, SetInterval
print=()=>{
  console.log("printed");
}
//clr
setTimeout(print,1000);
setInterval(print,2000);*/

//LOCAL STORAGE:-
