//setInterval
// console.log("Script start");
// // setInterval(()=>{
// //     console.log(Math.random());
// // },1000);
// console.log("Script End");


const body=document.body;
const button=document.querySelector("button");
const intervalId= setInterval(()=>{
    const red=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const Green=Math.floor(Math.random()*256);
    const rgb=`rgb(${red},${Green},${blue})`;
    body.style.backgroundColor=rgb;
},1000)

button.addEventListener("click",()=>{
    clearInterval(intervalId);
    button.textContent=body.style.backgroundColor;
    setinterval(intervalId);
})

// console.log(intervalId);