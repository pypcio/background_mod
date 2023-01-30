var body=document.getElementById("back_gradient");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var box2=document.getElementById("container-2");
var box1=document.getElementById("container-1")
var but=document.getElementById("enter");
const nag=document.getElementsByClassName("tag");
// console.log(typeof(nag.length));
// console.log(color1);
// console.log(color2);

function modifyInput(){
    body.style.background=
    "linear-gradient(to right, " 
    +color1.value
    + ", "
    +color2.value
    +")";
 }
 function createElement(){
  if(nag.length===0){
    var h3=document.createElement("h3");
    h3.appendChild(document.createTextNode("body.style.background=linear-gradient(to right, " +color1.value+ ", "+color2.value+")"));
    h3.classList.add("tag");
    box2.appendChild(h3);
  }
}

color1.addEventListener("input",modifyInput)
color2.addEventListener("input",modifyInput)
//different variation
// color1.addEventListener("input",function(){
// modifyInput();
// });
// color2.addEventListener("input",function(){
//   modifyInput();
//   });
  // createElement();
but.addEventListener("click",function(){
  createElement();
})

