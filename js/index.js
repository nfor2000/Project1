//ARRAY OF DAYS

let Days =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

//JS FOR DAY DISPLAY


Days.forEach(Day => {
     let day = Date().slice(0,3);
     if(Day.slice(0,3) == day){
          document.querySelector(".day").innerHTML = Day.toUpperCase();
     }
})

// JS FOR TIME DISPLAY

y = setInterval(function () {
     let date = new Date();

     let hour = date.getHours();
     let minutes = date.getMinutes();
     let seconds = date.getSeconds();

     
     document.querySelector(".hour").innerHTML = `${hour}:`;
     document.querySelector(".minutes").innerHTML = `${minutes}:`;
     document.querySelector(".seconds").innerHTML = `${seconds}`;

     
})

// JAVAASCRIPT FOR MENU EVENTS

const navMenu = document.querySelector(".navmenu");
const navLinks = document.querySelectorAll(".navlink");
const hamburger = document.querySelector(".hamburger");
navLinks.forEach(link=>{
   link.addEventListener("click",closeMenu)  
})
hamburger.addEventListener("click",OpenMenu)

function OpenMenu(){
     navMenu.classList.toggle('active');
     hamburger.classList.toggle('active');
}
function closeMenu(){
     navMenu.classList.remove('active');
     hamburger.classList.remove('active');
}
// slider
