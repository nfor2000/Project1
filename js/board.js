
const DashMenu = document.querySelector(".dashOpen");
const Dashclose = document.querySelector(".closeDash");

DashMenu.addEventListener("click",()=>{
     document.querySelector("aside").classList.add("active2");
});
Dashclose.addEventListener("click",()=>{
     document.querySelector("aside").classList.remove("active2");
})