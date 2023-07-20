const cards = Array.from(document.querySelectorAll(".card"));
const container = document.querySelector(".container");
let disaster = [
     {
          "title": "Pakistan Floods",
          "text": `As hundreds of rescue workers comb the muddied waters of a South Korean underpass, the stagnant rainwater, once up to the ceiling, now only covers their knees.

          They will not give up. There is one person still missing.
          
          It's been more than 48 hours since extreme rainfall caused a riverbank to break, and water suddenly and forcefully filled the major underpass, stopping vehicles dead.
          
          Thirteen bodies have so far been brought out of the tunnel in the central, mountainous region of Chongju. Rescuers have CCTV footage of a terrified missing driver trying to escape their submerged car, but there is no sign of their body yet.
          
          As they search on, another car is winched out, its back window smashed out by the force of the water.
          
          This scene, akin to one from a horror film, is a wake up call for South Korea. Climate change is starting to take its toll on this country, that until recently has been spared some of the extreme weather events experienced by other, hotter countries.
          
          But only halfway through its monsoon season, and it has already received more than the total amount of rainfall typical for the period.
          
          South Korean President Yoon Suk Yeol has said he will "completely overhaul" the country's approach to extreme weather, as "these events will become more commonplace".`
     },
     {
          "title": "Tornado",
          "text": `As hundreds of rescue workers comb the muddied waters of a South Korean underpass, the stagnant rainwater, once up to the ceiling, now only covers their knees.

          They will not give up. There is one person still missing.
          
          It's been more than 48 hours since extreme rainfall caused a riverbank to break, and water suddenly and forcefully filled the major underpass, stopping vehicles dead.
          
          Thirteen bodies have so far been brought out of the tunnel in the central, mountainous region of Chongju. Rescuers have CCTV footage of a terrified missing driver trying to escape their submerged car, but there is no sign of their body yet.
          
          As they search on, another car is winched out, its back window smashed out by the force of the water.
          
          This scene, akin to one from a horror film, is a wake up call for South Korea. Climate change is starting to take its toll on this country, that until recently has been spared some of the extreme weather events experienced by other, hotter countries.
          
          But only halfway through its monsoon season, and it has already received more than the total amount of rainfall typical for the period.
          
          South Korean President Yoon Suk Yeol has said he will "completely overhaul" the country's approach to extreme weather, as "these events will become more commonplace".`
     },
     {
          "title": "Kentuky floods",
          "text": `As hundreds of rescue workers comb the muddied waters of a South Korean underpass, the stagnant rainwater, once up to the ceiling, now only covers their knees.

          They will not give up. There is one person still missing.
          
          It's been more than 48 hours since extreme rainfall caused a riverbank to break, and water suddenly and forcefully filled the major underpass, stopping vehicles dead.
          
          Thirteen bodies have so far been brought out of the tunnel in the central, mountainous region of Chongju. Rescuers have CCTV footage of a terrified missing driver trying to escape their submerged car, but there is no sign of their body yet.
          
          As they search on, another car is winched out, its back window smashed out by the force of the water.
          
          This scene, akin to one from a horror film, is a wake up call for South Korea. Climate change is starting to take its toll on this country, that until recently has been spared some of the extreme weather events experienced by other, hotter countries.
          
          But only halfway through its monsoon season, and it has already received more than the total amount of rainfall typical for the period.
          
          South Korean President Yoon Suk Yeol has said he will "completely overhaul" the country's approach to extreme weather, as "these events will become more commonplace".`
     },
     {
          "title": "Storm sweeps through Carribean Islands",
          "text": `As hundreds of rescue workers comb the muddied waters of a South Korean underpass, the stagnant rainwater, once up to the ceiling, now only covers their knees.

          They will not give up. There is one person still missing.
          
          It's been more than 48 hours since extreme rainfall caused a riverbank to break, and water suddenly and forcefully filled the major underpass, stopping vehicles dead.
          
          Thirteen bodies have so far been brought out of the tunnel in the central, mountainous region of Chongju. Rescuers have CCTV footage of a terrified missing driver trying to escape their submerged car, but there is no sign of their body yet.
          
          As they search on, another car is winched out, its back window smashed out by the force of the water.
          
          This scene, akin to one from a horror film, is a wake up call for South Korea. Climate change is starting to take its toll on this country, that until recently has been spared some of the extreme weather events experienced by other, hotter countries.
          
          But only halfway through its monsoon season, and it has already received more than the total amount of rainfall typical for the period.
          
          South Korean President Yoon Suk Yeol has said he will "completely overhaul" the country's approach to extreme weather, as "these events will become more commonplace".`
     }
]
cards.forEach(card => {
     card.addEventListener("click", () => {
          let imgUrl = card.dataset.img;
          let index = card.dataset.index;
          container.style.background = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imgUrl}) center center/cover`
          document.querySelector(".title").innerHTML = `${disaster[index].title}`
          document.querySelector(".text").innerHTML = `${disaster[index].text}`
     })
})