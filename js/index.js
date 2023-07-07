
x = setInterval(function(){
     let date = new Date();

     let hours = date.getHours();
     let minutes = date.getMinutes();
     let seconds = date.getSeconds();

     document.querySelector(".hours").innerHTML = `${hours} :`;
     document.querySelector(".minutes").innerHTML = minutes;
     document.querySelector(".seconds").innerHTML = `: ${seconds}`;

     document.querySelector(".hours_text").innerHTML ="hour";
     document.querySelector(".minutes_text").innerHTML = (minutes == 1)? "minute":"minutes";
     document.querySelector(".seconds_text").innerHTML = (seconds == 1)? "second":"seconds";

},1000);

