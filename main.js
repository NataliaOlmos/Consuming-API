import pokemon from './pokemon/pokemon.js';
import data from './pokemon/pokemon.js'


let start = document.querySelector('#start')
const container = document.querySelector('#container');
const list = data.pokemon;
const formulario = document.querySelector(".searchField");
const boton = document.querySelector(".searchBtn");


//Show all pokemons

function drawAllPokemons() {

  container.innerHTML = ""

  list.forEach((pokemon) => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card-block">
    <ul class="pokemon">    
    <div class="card-header">${pokemon.id}</div>
    <div class="card-body">
    <h2 class="card-title">${pokemon.name}</h2>
    <p class="card-text">Type: ${pokemon.type}</p>
    <img class="card-text" src="${pokemon.img}"/>
    </ul>
    </div>
    `  ;
    container.appendChild(div);
  });
}

start.addEventListener('click', drawAllPokemons)


//search Pokemon by Name


formulario.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredPoke = list.filter((pokemon) => {
    return (
      pokemon.name.toLowerCase().includes(searchString)
    )
  });

  boton.addEventListener('click', filteredPoke)

  drawPokemons(filteredPoke)

})

const drawPokemons = (list) => {
  const htmlString = list.map((pokemon) => {
    return `
   
    <div class="card-block">
    <ul class="pokemon">
    <div class="card-header">${pokemon.id}</div>
    <div class="card-body">
    <h2 class="card-title">${pokemon.name}</h2>
    <p class="card-text">Type: ${pokemon.type}</p>
    <img class="card-text" src="${pokemon.img}" />
    </ul>
    </div>           
    `;
  })
    .join('');
  container.innerHTML = htmlString;
};


// Filter by type
let typeFilterButtons = document.querySelectorAll('.buttons');

typeFilterButtons.forEach((buttons) => buttons.addEventListener('click', filterBichos));

function filterBichos(event) {
  event.preventDefault();
  let id = event.target.id;
  let filteredList = filterByType(id);
  drawPokemons(filteredList) // [{},{}]


  function filterByType(type) {
    return list.filter((pokemon) => pokemon.type.includes(type))
  };
}

