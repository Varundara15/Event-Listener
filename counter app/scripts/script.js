const decr = document.getElementById("dec")
const incr = document.getElementById("inc")
const resett = document.getElementById("reset")
const revall = document.getElementById("reval")
decr.addEventListener("click",()=>{
    const value = Number(revall.innerText);
    if(value>0){
        revall.innerText=value-1;
    }
    else{
        alert("Negative value not allowed");
    }
});

incr.addEventListener("click",()=>{
    const value = Number(revall.innerText);
    if(value>=10){
        alert("10+ digits are not allowed");
    }
    else{
        revall.innerText=value+1;
    }
});

resett.addEventListener("click",()=>{
    revall.innerText=0;
});