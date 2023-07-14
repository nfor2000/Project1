let testimony = [
     {
          "name":"Jeff",
          "position":"position1",
          "testimony":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aperiam eum aliquam dolorem pariatur! At ducimus impedit reiciendis et illo cupiditate totam quae voluptas, cum dignissimos accusamus neque facilis voluptates officia nemo tempora iste voluptate ex quod laudantium dolor molestiae libero quis. Voluptatem, nulla suscipit?",
          "image":"../img/profile-1.jpg"
     },
     {
          "name":"Carrick",
          "position":"position2",
          "testimony":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aperiam eum aliquam dolorem pariatur! At ducimus impedit reiciendis et illo cupiditate totam quae voluptas, cum dignissimos accusamus neque facilis voluptates officia nemo tempora iste voluptate ex quod laudantium dolor molestiae libero quis. Voluptatem, nulla suscipit?",
          "image":"../img/profile-2.jpg"
     },
     {
          "name":"Alicia",
          "position":"position3",
          "testimony":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aperiam eum aliquam dolorem pariatur! At ducimus impedit reiciendis et illo cupiditate totam quae voluptas, cum dignissimos accusamus neque facilis voluptates officia nemo tempora iste voluptate ex quod laudantium dolor molestiae libero quis. Voluptatem, nulla suscipit?",
          "image":"../img/profile-3.jpg"
     },
     {
          "name":"Kelly",
          "position":"position4",
          "testimony":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aperiam eum aliquam dolorem pariatur! At ducimus impedit reiciendis et illo cupiditate totam quae voluptas, cum dignissimos accusamus neque facilis voluptates officia nemo tempora iste voluptate ex quod laudantium dolor molestiae libero quis. Voluptatem, nulla suscipit?",
          "image":"../img/profile-4.jpg"
     }
     
];

let index = 0;

const TestimonyEl = document.querySelector(".testimony");
const Img = document.querySelector(".avatar");
const Name = document.querySelector(".name");
const Position = document.querySelector(".position");

const prevBtn = document.getElementById("previous-btn");
const randomBtn = document.getElementById("random-btn");
const nextBtn = document.getElementById("next-btn");

window.addEventListener("DOMContentLoaded",function(){
     let randomIndex = generateRandomIndex();
     Img.setAttribute("src",`${testimony[randomIndex].image}`);
     TestimonyEl.innerHTML = `${testimony[randomIndex].testimony}`;
     Position.innerHTML = `${testimony[randomIndex].position}`;
     Name.innerHTML = `${testimony[randomIndex].name}`;
})
randomBtn.addEventListener("click",function(){
     let randomIndex = generateRandomIndex();
     Img.setAttribute("src",`${testimony[randomIndex].image}`);
     TestimonyEl.innerHTML = `${testimony[randomIndex].testimony}`;
     Position.innerHTML = `${testimony[randomIndex].position}`;
     Name.innerHTML = `${testimony[randomIndex].name}`;
})

prevBtn.addEventListener("click",()=>{
     if(index < 0){
          index = testimony.length-1;
     }

     Img.setAttribute("src",`${testimony[index].image}`);
     TestimonyEl.innerHTML = `${testimony[index].testimony}`;
     Position.innerHTML = `${testimony[index].position}`;
     Name.innerHTML = `${testimony[index].name}`;
     index --;
})
nextBtn.addEventListener("click",()=>{
     if(index >= testimony.length){
          index = 0;
     }

     Img.setAttribute("src",`${testimony[index].image}`);
     TestimonyEl.innerHTML = `${testimony[index].testimony}`;
     Position.innerHTML = `${testimony[index].position}`;
     Name.innerHTML = `${testimony[index].name}`;
     index++;
})
function generateRandomIndex(){
     return Math.floor(Math.random()*testimony.length);
}