let s1 = document.getElementById("sqr1");
let s2 = document.getElementById("sqr2");
let s3 = document.getElementById("sqr3");
let s4 = document.getElementById("sqr4");

s1.addEventListener("mouseenter", function(){
    let t = (Math.floor(Math.random()*100));
    s1.innerHTML= (`<h1 style="margin-top: 70px;"> ${t}</h1>`);
});

s1.addEventListener("dblclick", function(){
    let a = (Math.floor(Math.random()*256));
    let b = (Math.floor(Math.random()*256));
    let c = (Math.floor(Math.random()*256));
    
    s1.style.backgroundColor= `rgb(${a},${b},${c})`;
});

s1.addEventListener("mouseleave", function(){
    s1.innerHTML=  ('<h1 style="margin-top: 70px;">1</h1>'); 
    
});

let clr = "red";
s2.addEventListener("mouseenter", function(){
    if(clr=="red"){
        s2.style.backgroundColor= "red";
        clr = "green";
    } else if(clr == "green"){
        s2.style.backgroundColor= "green";
        clr = "blue";

    } else {
        s2.style.backgroundColor= "blue";
        clr = "red";
    }
});
s2.addEventListener("mouseleave", function(){
    s2.style.backgroundColor= "white";
});



s3.addEventListener("mouseenter", function(){
    let a = (Math.floor(Math.random()*256));
    let b = (Math.floor(Math.random()*256));
    let c = (Math.floor(Math.random()*256));

    s3.style.backgroundColor= `rgb(${a},${b},${c})`;
});
s3.addEventListener("mouseleave", function(){
   s3.style.backgroundColor= "white";
});

s4.addEventListener("click", function(){

    let a = (Math.floor(Math.random()*256));
    let b = (Math.floor(Math.random()*256));
    let c = (Math.floor(Math.random()*256));

    s1.style.backgroundColor= `rgb(${a},${b},${c})`;
    s2.style.backgroundColor= `rgb(${b},${c},${a})`;
    s3.style.backgroundColor= `rgb(${c},${a},${b})`;
});
s4.addEventListener("mouseleave", function(){
    s1.style.backgroundColor= `white`;
    s2.style.backgroundColor= `white`;
    s3.style.backgroundColor= `white`;
});

let s5 = document.querySelector("#main");
let crsr = document.querySelector("#cursor");
    s5.addEventListener("mousemove",function(detail){
    console.log(detail.x, detail.y);
    crsr.style.left=detail.x+"px";
    crsr.style.top=detail.y+"px";



});

