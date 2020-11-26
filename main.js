import pokemon from './pokemon/pokemon.js';
import data from './pokemon/pokemon.js'


let start = document.querySelector('#start')
const container = document.querySelector('#container');
const list = data.pokemon;
console.log('You have connected...')
console.log(pokemon)
const formulario = document.querySelector(".searchField");
const boton = document.querySelector(".searchBtn");


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


//search Pokemon by Name
start.addEventListener('click', drawAllPokemons)


formulario.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();

  console.log(e.target.value)
  const filteredPoke = list.filter((pokemon) => {
    return (
      pokemon.name.toLowerCase().includes(searchString)
    )
  });
  console.log(filteredPoke)
  drawPokemons(filteredPoke)

  boton.addEventListener('click', filteredPoke)

  drawPokemons(filteredPoke)

})

const drawPokemons = (list) => {
  const htmlString = list.map((pokemon) => {
    return `
            <div class="card-container">
            <ul class="pokemon">
                <h2>${pokemon.name}</h2>
                <p>Type: ${pokemon.type}</p>
                 <img src="${pokemon.img}" />
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
  console.log(id)
  console.log(filteredList)
  drawPokemons(filteredList) // [{},{}]


  function filterByType(type) {
    return list.filter((pokemon) => pokemon.type.includes(type))
  };
}

