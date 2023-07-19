const cards = Array.from(document.querySelectorAll(".card"));
const container = document.querySelector(".container");
console.log(container);

cards.forEach(card => {
     card.addEventListener("click",()=>{
          let imgUrl = card.dataset.img;
          console.log(imgUrl);
          container.style.background = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imgUrl}) center center/cover`
     })
})