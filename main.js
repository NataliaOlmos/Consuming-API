import pokemon from './pokemon/pokemon.js';
import data from './pokemon/pokemon.js'


let start = document.querySelector('#start')
const container = document.querySelector('#container');
const list = data.pokemon;
console.log('You have connected...')
console.log(pokemon)
const formulario = document.querySelector(".searchField");
const boton = document.querySelector(".searchBtn");
// const resultado = document.querySelector("#container");
// 

//Show all pokemons
function drawAllPokemons() {

  container.innerHTML = "" 
     
  list.forEach((pokemon) => {
      const div = document.createElement('div');
      div.innerHTML = `
      <div class="card-container">
      <img src="${pokemon.img}" />
      <h3>${pokemon.name}</h3>
      <p>${pokemon.id}</p>
      <p>${pokemon.type}</p>
      </div>
`  ;
      container.appendChild(div);


  });
}

start.addEventListener('click', drawAllPokemons)


formulario.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();

  console.log(e.target.value)
  const filteredPoke = list.filter((pokemon) => {
     return(
          pokemon.name.toLowerCase().includes(searchString)
     )
      });
  console.log(filteredPoke)
  drawPokemons(filteredPoke)

  boton.addEventListener('click',filteredPoke)

  drawPokemons(filteredPoke)

})

const drawPokemons = (list) => {
    const htmlString = list.map((pokemon) => {
            return `
            <div class="card-container">
            <li class="pokemon">
                <h2>${pokemon.name}</h2>
                <p>Type: ${pokemon.type}</p>
                 <img src="${pokemon.img}" />
                </li>
                </div>
        `;
        })
        .join('');
    container.innerHTML = htmlString;
};


// // 1.- nodo
 let typeFilterButtons = document.querySelectorAll('.buttons');
// // // 2.- listener

 typeFilterButtons.forEach((buttons) => buttons.addEventListener('click', filterBichos));
 
// // // 3.- callback
function filterBichos(event) {
  event.preventDefault();
     let id = event.target.id;
     let filteredList = filterByType(id);
     console.log(id)
     console.log(filteredList)
     drawPokemons(filterByType) // [{},{}]


function filterByType(type){
  return list.filter((pokemon) => pokemon.type.includes(type))
 };

}
// const filteredPoke = list.filter((pokemon) => {
//   return(
//        pokemon.name.toLowerCase().includes(searchString)
//   )
//    });
// console.log(filteredPoke)
// drawPokemons(filteredPoke)

     


// //         // aqui 
 //}
// // 4.- func aux
// function filterByType(type) {
//   console.log(type)

//      return list.filter((pokemon) => pokemon.type.includes(type))
//  }    
//  console.log(filterByType())
// drawAllPokemons(filterByType)


