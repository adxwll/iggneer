// const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86";
// const API_URL_POPULAR =
//   "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
// const API_URL_SEARCH =
//   "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

// getMovies(API_URL_POPULAR);

// async function getMovies(url) {
//   const resp = await fetch(url, {
//     headers: {
//       "Content-Type": "application/json",
//       "X-API-KEY": API_KEY,
//     },
//   });
//   const respData = await resp.json();
//   console.log(respData)
//   showMovies(respData);
// }



// function showMovies(data) {
//   const moviesEl = document.querySelector(".movies");

// document.querySelector('.movies').innerHTML = ''



//   data.films.forEach((el) => {
//     const movieEl = document.createElement("div");
//     movieEl.classList.add('movie')
//     movieEl.innerHTML = `
//         <div class="movie__cover-inner">
//         <img
//           src="${el.posterUrlPreview}"
//           class="movie__cover"
//           alt=""
//         />
//          <div class="movie__cover--darkened"></div>
//         </div>
       
//         <div class="movie__info">
//         <div class="movie__title">${el.nameRu}</div>
//         <div class="movie__category">${el.genres.map((genre) => `${genre.genre} `)}</div>
//       ${el.rating}
//         </div>
//       </div>
//         `;
// moviesEl.appendChild(movieEl);
//   });
// }
// const form = document.querySelector('form');
// const search = document.querySelector('.header__search');

// form.addEventListener('submit',(e) => {
//         e.preventDefault();
//        const apiSearch = `${API_URL_SEARCH}${search.value}`;
 

//         if(search.value){
//            getMovies(apiSearch);

//           search.value = ""
//         }

// })


// let arr = [0, 2, 4, 6]
// let array = []
// const mirror = (arr.slice(-1)).reverse();
//     const nm = array.push(arr);
//     const tk = [].concat(array, arr)
// console.log(mirror)


function mirror(mr){
    const l = (mr.slice()).reverse()
  return mr + l; 
}
console.log(mirror([0, 2, 4, 6]))
















































// async function func1(){
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '14f785c7ccmsh8b6ec6839c01ff4p1d3790jsnc7ad860c6ab4',
//         'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
//         }
//         };
        
// await fetch('https://hotels4.p.rapidapi.com/v2/get-meta-data', options)
//      .then(response => response.json())
//      .then(response => console.log(response))
//      .catch(err => console.error(err));
//     } 
//  function func2(){
//         console.log(2)
//     }
//     function func3(){
//         console.log(3)
//     }

//     async function go() {
//         let a = await faunc1;
//         console.log(a)
//     }