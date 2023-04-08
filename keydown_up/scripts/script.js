let container = document.getElementById('container') 
let display = document.getElementById('display')


document.addEventListener("keydown",function(e){
    display.style.color = "red";
    display.innerText = e.key + " is key down";
})

document.addEventListener("keyup",function(e){
    display.style.color = "blue";
    display.innerText = e.key +  " is keyUp";
})