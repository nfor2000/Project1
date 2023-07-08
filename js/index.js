const newsTitle = document.querySelector(".news_title");
const newsText = document.querySelector(".news_text");

// JS FOR TIME BOARD
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
// END


var BreakingNews = [
     {
          "news-title":"Welcome GPt",
          "news-image":"../img/icon-complete.svg",
          "news-text":"Open AI bot"
     },
     {
          "news-title":"",
          "news-image":"../img/sunk.jpg",
          "news-text":""
     },
     
] 

//  DYNAMICALLY ADDING BTNS BASED ON BREAKING NEWS AVAILABLE

if (BreakingNews.length > 0)
{
     for(let i=0; i < BreakingNews.length; i++)
     {
          const slideBtn = document.createElement('button');
          slideBtn.className = "slider_btn";
          slideBtn.setAttribute("data-newindex",`${i}`);
          const parent = document.querySelector('.news_btns');
          parent.appendChild(slideBtn)
     };
     let index = 0;
     // JS FOR IMAGE SLIDER 
let y = setInterval(function(){
     
     if(index >= BreakingNews.length)
     {
          index = 0;
     }
     document.querySelector(".hero").style.background = `linear-gradient(to top,#494944,#49494465) ,url(${BreakingNews[index]["news-image"]}) center center/cover`
     newsText.innerHTML = `${BreakingNews[index]["news-text"]}`;
     newsTitle.innerHTML = `${BreakingNews[index]["news-title"]}`;
     index = index +1;
},4000)
     //CLICK EVENT FOR ROUND BTNS
     const slideBtns = Array.from(document.querySelectorAll(".slider_btn"));
     slideBtns.forEach( Btn => {
          Btn.addEventListener("click",function(){
              let index = Btn.dataset.newindex;
              newsText.innerHTML = `${BreakingNews[index]["news-text"]}`;
              newsTitle.innerHTML = `${BreakingNews[index]["news-title"]}`;
              document.querySelector(".hero").style.background = `linear-gradient(to top,#494944,#49494465) ,url(${BreakingNews[index]["news-image"]}) center center/cover`
              setTimeout(()=>{
                    
              },4000);

         })
     })

}

let getParent = (element)=>{
     return element.parentElement;
}