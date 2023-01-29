var h3=document.querySelector("h3");
var color1=document.getElementsByClassName(".color1");
var color2=document.getElementsByClassName(".color2");
console.log("test");
console.log(h3);
console.log(color1);
console.log(color2);
color1.addEventListener("input",function(){
    console.log(color1.value);
})
color2.addEventListener("input",function(){
    console.log(color1.value);
})