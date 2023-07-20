let articles = [
     {
          "topic": "Water drained",
          "image": "../img/images.jpg",
          "text": "orem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem placeat iusto fugiat veritatis adipisci dolores fuga voluptatum suscipit! Velit dolore perspiciatis nemo dignissimos ipsa? obcaecati atque! Itaque quasi nihil iure ex delectus reiciendis consequuntur nobis aliquid cupiditate accusamus aspernatur rerum, obcaecati deleniti eaque recusandae! Aperiam exercitationem quia, id eveniet aliquam sapiente voluptatum et, quis suscipit autem placeat provident minima maiores incidunt? Magnam quos odit, voluptatem nostrum molestiae dolorem autem voluptas veritatis non saepe pariatur sint in iure eius corporis aspernatur quis dolorem hic minima, nobis quibusdam. Eos ab unde enim, corporis saepe molestiae iure necessitatibus aperiam? Voluptate, perferendis dolorem reiciendis fugit maxime ratione. Dolorum, iste saepe doloribus quibusdam ipsa necessitatibus cupiditate rem ullam perspiciatis, animi blanditiis nesciunt corporis quis veritatis sequi. Placeat, quaerat! Voluptas eveniet quod, provident facere ut libero quidem omnis expedita quasi corrupti dicta beatae porro in officia reprehenderit quaerat molestiae magni consectetur. Labore molestias laborum enim. Voluptatum doloribus nulla iste, dolor commodi quae Corrupti, dolores perferendis reprehenderit ipsam saepe exercitationem eius obcaecati rerum inventore hic quo vel officia tenetur molestias, impedit ratione! lorem16"
     },
     {
          "topic": "Topic2",
          "image": "../img/disaster1.jpg",
          "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non libero qui soluta aliquam accusantium inventore voluptatum temporibus iure nemo explicabo eligendi ea hic corporis, alias voluptatem eaque laboriosam. Repellendus eos doloribus itaque perspiciatis aliquam quaerat ipsa suscipit iste provident harum. A aliquam eos error adipisci, delectus eveniet corrupti quidem iste porro dolorum sunt! Voluptatibus culpa voluptatem illum, sequi cum possimus tenetur nemo atque similique in. Tempore ipsum quam porro voluptates, aliquam aperiam quia corporis, ad dolor impedit ex accusantium. Molestiae alias nulla, delectus amet aperiam facere quam odit veniam placeat in nobis, aliquid, non eligendi minima. Nesciunt suscipit atque aliquam delectus, itaque explicabo natus sequi eligendi fuga molestiae modi repudiandae, sunt eius nostrum temporibus deleniti consequatur quis iusto cumque ullam. Quaerat consequuntur, cum ullam alias illo incidunt vero consectetur odio laborum dolorem velit, harum beatae placeat? Ea, ipsa excepturi sit accusantium labore ratione hic atque molestiae incidunt est iure veritatis ut optio! Adipisci, modi corporis! Nesciunt soluta, reprehenderit deleniti repudiandae nihil qui veniam voluptate natus quam illum perferendis nobis praesentium fugit magnam culpa nulla quo explicabo recusandae, saepe incidunt animi maiores! Pariatur mollitia voluptatibus excepturi. Cupiditate ducimus repellendus blanditiis, dolorem earum odit illum sint? Nemo eum autem sequi veniam in repellat necessitatibus, quidem, totam odit fugit iusto cum mollitia nihil suscipit optio maxime qui! Harum nesciunt suscipit a ratione, soluta voluptates maiores quod.e porro in officia reprehenderit quaerat molestiae magni consectetur. Labore molestias laborum enim. Voluptatum doloribus nulla iste, dolor commodi quae Corrupti, dolores perferendis reprehenderit ipsam saepe exercitationem eius obcaecati rerum inventore hic quo vel officia tenetur molestias, impedit ratione! lorem16"
     },
     {
          "topic": "Topic3",
          "image": "../img/congress.jpg",
          "text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam tempora nesciunt cumque architecto voluptatum similique dolores adipisci quia molestiae cupiditate, perspiciatis placeat, laboriosam autem, delectus ad ex sunt sint atque ratione impedit! Illo tenetur excepturi, id, voluptatum sint consequuntur quisquam et repudiandae deleniti totam facere optio! Natus commodi laborum est molestias expedita, nulla, minus harum aliquam, quibusdam sunt quae. Eveniet optio, adipisci, ut laudantium magnam commodi nihil praesentium velit expedita officiis quis voluptatum? Laudantium fugiat veritatis provident. Inventore maiores repellendus iusto quos consectetur! Ea minima labore quas beatae neque ipsam alias quasi necessitatibus ullam asperiores pariatur vitae autem corporis dignissimos accusamus deserunt ducimus nihil, saepe officiis impedit, sint, quae error eum. Ut, inventore voluptates. Distinctio modi sunt, iste saepe repellat architecto totam. Commodi obcaecati reiciendis vel delectus, iure dolore tempore, consequatur tempora illo quae, praesentium repellendus esse repellat architecto. Rerum odio maiores quasi deleniti similique ut odit sed laboriosam in, consequatur aliquam possimus, perspiciatis earum quidem blanditiis aliquid maxime iusto error, illum dolorum non distinctio? Enim voluptates neque, corrupti impedit dolore corporis voluptate reiciendis ex rerum hic doloremque laboriosam iusto repudiandae molestiae natus, rem harum eum beatae optio quisquam repellendus deserunt adipisci libero. Unde quis ipsam incidunt aspernatur vero labore at, facilis eveniet fugiat consequuntur dolor fuga! Est, consectetur. Officia, deserunt. Perferendis labore, assumenda odit dolorem neque, porro incidunt maiores tempore provident nesciunt officia nobis ipsa laboriosam nulla minima ipsam?"
     }
]


if (articles.length > 0) {
     window.addEventListener("DOMContentLoaded", () => {

          let randomIndex = generateRandomIndex();

          document.querySelector(".articleText").innerHTML = articles[randomIndex].text;
          document.querySelector(".topic").innerHTML = articles[randomIndex].topic;
          document.querySelector(".image").style.background = `linear-gradient(to top,var(--color-blueOp),var(--color-darkOp)), url(${articles[randomIndex].image}) center center/cover`;
     })
     document.querySelector(".articleCount").innerHTML = articles.length
     for (let i = 0; i < articles.length; i++) {
          const article = document.createElement("div");

          article.className = "Aside_article";
          article.setAttribute("data-index", i)
          article.innerHTML = `
                         <h3>${articles[i].topic}</h3>
                         <p>${articles[i].text.slice(0, 100)}..`
          document.querySelector("aside").appendChild(article);

     }
     const AsideArticle = document.querySelectorAll(".Aside_article");

     AsideArticle.forEach(element => {
          element.addEventListener("click", function () {
               let index = element.dataset.index;
               document.querySelector(".image").style.background = ` linear-gradient(to top,var(--color-blueOp),var(--color-darkOp)),url(${articles[index].image}) center center/cover`
               document.querySelector(".topic").innerHTML = `${articles[index].topic}`

               document.querySelector(".articleText").innerHTML = `${articles[index].text}`
               if (document.querySelector("aside").className === "active1") {
                    document.querySelector("aside").classList.remove("active1")
               }

               AsideArticle.forEach(arti => {
                    arti.style.borderColor = "#fff"
               })
               this.style.borderColor = "var(--color-blue)"
          })

     });
}
document.querySelector(".articleMenu span").addEventListener("click", function () {
     document.querySelector("aside").classList.toggle("active1")
})
document.querySelector(".close").addEventListener("click", function () {
     document.querySelector("aside").classList.remove("active1")
})

function generateRandomIndex() {
     return Math.floor(Math.random() * articles.length);
}