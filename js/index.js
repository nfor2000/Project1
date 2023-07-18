

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
