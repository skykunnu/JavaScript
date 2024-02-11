
const button=document.querySelector("#stop-btn");
function showTime(){
    const currentTime=new Date();
    const time=`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    console.log(time);
    document.getElementById("time").innerText=time;
 }

 const Interval=setInterval(showTime,1000); // calling showtime function after each sec.

 // If we have to stop the setInterval function, then there is function called clearInterval().
 button.addEventListener("click",()=>{
 clearInterval(Interval);
 });