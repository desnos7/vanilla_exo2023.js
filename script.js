// let contener = document.querySelector("main");
// resultat = [];
// donnee= [];
// let page = [1, 2, 3, 4, 5];

// let imgUrl = "https://image.tmdb.org/t/p/w500";

// window.addEventListener("load", async () => {
//   for (let i = 0; i < page.length; i++) {
//     let result = await fetch(
//       `https://api.themoviedb.org/3/discover/movie?api_key=a6f654354201ca48f85ab1b4ab5d5231&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page[i]}`
//     );
//     result = await result.json();
//     //   console.log(resultat);
//     donnee.push(result.resultat);
//     console.log("data", donnee);
//   }

//   contenu(donnee);
// });

// // function createCards(data) {
// //   let row = "";
// //   data.forEach((item) => {

// //     row += `
// //       <div class="cards">
// //         <div class="picture">
// //           <img src="${base_url}${item.poster_path}" alt="">
// //         </div>
// //         <div class="sous-titre">
// //           <h3>${item.title}</h3>
// //           <p>${item.release_date}</p>
// //         </div>
// //       </div>
// //     `;
// //   });
// //   liste.innerHTML = row;
// // }

// function contenu(date) {
//   let card = "";

//   date.forEach((item) => {
//     card += `
//     <div class="movie" >
//             <img src="${imgUrl}${item.poster_path}"  alt="">

//             <div class="movie-info">
//                 <h3>${item.original_title}</h3>
//                 <span class="green">${item.vote_average}</span>
//                 <span class="green">${item.release_date}</span>
//             </div>
//             <div class="overwier">
//                 <h3>${item.overview}</h3>

//             </div>
//         </div>
//    `;
//   });

//   contener.innerHTML = card;
// }

// // function generat_card(array) {
// //   for (let i = 0; i < array.length; i++) {
// //     contener.innerHTML += contenu(array[i]);
// //   }
// // }
const apiKey = "6d5844f725cdbf8e0d22ba1fc518cac6";
const base_url = "https://image.tmdb.org/t/p/w500"; // ajout de la base_url

const liste = document.querySelector("main");
let data = [];
let data2 = [];
let data1 = [];
let data3 = [];
let data4 = [];
let data5 = [];

let mesPages = [1, 2, 3, 4, 5];
let allButton = document.querySelectorAll("button");
console.log("allButton", allButton);

let page=1

window.addEventListener('load', async () => {
  for (let i = 0; i < mesPages.length; i++) {
    let res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${mesPages[i]}`
    );
    res = await res.json();
    data.push(res.results);
  }
  contenu(data);

  data1 = data[0];
  data2 = data[1];
  data3 = data[2];
  data4 = data[3];
  data5 = data[4];
  console.log("data1", data1);
  console.log("data2", data2);
  contenu(data1);
  contenu(data2);
  contenu(data3);
  contenu(data4);
  contenu(data5);
  moovePage();
})



function contenu(data) {
  let row = "";
  data.forEach((item) => {
    row += `


    <div class="movie" >
                <img src="${base_url}${item.poster_path}"  alt="">
    
               <div class="movie-info">
                    <h3>${item.original_title}</h3>
                 <span class="green">${item.vote_average}</span>
                    <span class="green">${item.release_date}</span>
               </div>
               <div class="overwier">
                   <h3>${item.overview}</h3>
                   
            </div>
            </div>

    `;
  });
  liste.innerHTML = row;
}

function moovePage() {
  allButton[0].addEventListener("click", () => {
    contenu(data1);
    console.log("data1");
    
  });
  allButton[1].addEventListener("click", () => {
    contenu(data2);
    
  });
  allButton[2].addEventListener("click", () => {
    contenu(data3);
    
  });
  allButton[3].addEventListener("click", () => {
    createCards(data4);
 
  });
  allButton[4].addEventListener("click", () => {
    contenu(data5);
   
})
}
