//ARRAY OF DAYS

let Days =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

//JS FOR DAY DISPLAY

let day = Date().slice(0,3);
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

// navLinks.forEach(link=>{
//    link.addEventListener("click",closeMenu)  
// })
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

let reports = [
     {
          "headline":"Senatarian Elections Around the corner",
          "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam molestiae laudantium eveniet?",
          "image":"../img/logo.png"
     },
     {
          "headline":"War in Ukraine",
          "text":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aspernatur minima distinctio",
          "image":"../img/sunk.jpg"
     },
     {
          "headline":"AI predominance in the Tech Industry",
          "text":"sit amet consectetur adipisicing elit. Veniam aspernatur minima distinctio",
          "image":"../img/logo.png"
     }
]
let index= 0;
if(reports.length > 0){
     window.addEventListener("DOMContentLoaded",()=>{

          let randomIndex = generateRandomIndex();

          document.querySelector(".slider .text").innerHTML = reports[randomIndex].text;
          document.querySelector(".slider .headline").innerHTML = reports[randomIndex].headline;
          document.querySelector(".slider").style.background = `linear-gradient(to top,var(--color-blueOp),var(--color-darkOp)) ,url(${reports[randomIndex].image}) center center/cover`;
     })
     for (let i = 0; i < reports.length;i++){

          let sliderBtn = document.createElement("span");
          sliderBtn.className = "slider_btn";
          sliderBtn.setAttribute("data-index",i);
          const parent = document.querySelector(".btns");
          parent.appendChild(sliderBtn)
     }
     
     let x = setInterval(function(){
          if(index >= reports.length){
               index = 0;
          }
          document.querySelector(".slider .text").innerHTML = reports[index].text;
          document.querySelector(".slider .headline").innerHTML = reports[index].headline;
          document.querySelector(".slider").style.background = `linear-gradient(to top,var(--color-blueOp),var(--color-darkOp)) ,url(${reports[index].image}) center center/cover`;
          slideBtns.forEach(btn => {
               btn.style.backgroundColor = "#fff";
          })
          slideBtns[index].style.backgroundColor = "hsl(44, 81%, 59%)"
          index++;
     },4000)

     const slideBtns = Array.from(document.querySelectorAll(".slider_btn"));
     slideBtns.forEach(btn => {
               btn.addEventListener("click",function(){
               let indx = btn.dataset.index;
               console.log(indx);
               
               document.querySelector(".slider .text").innerHTML = reports[indx].text;
               document.querySelector(".slider .headline").innerHTML = reports[indx].headline;
               document.querySelector(".slider").style.background = `linear-gradient(to top,var(--color-blueOp),var(--color-darkOp)) ,url(${reports[indx].image}) center center/cover`;
               
               slideBtns.forEach(btn => {
                    btn.style.backgroundColor = "#fff";
               })
               this.style.backgroundColor = "hsl(44, 81%, 59%)"
          })
     })
}

function generateRandomIndex(){
     return Math.floor(Math.random()*reports.length);
}