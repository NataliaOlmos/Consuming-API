import pokemon from './pokemon/pokemon.js';
import data from './pokemon/pokemon.js'

//Selectores

// let start = document.querySelector('#start')
const container = document.querySelector('#container');
const list = data.pokemon;
console.log('You have connected...')
console.log(pokemon)
console.log(data.pokemon)


function drawPokemons() {

  container.innerHTML = "" // borrar! antes al principio, no dentro del ciclo
      // dibujar
  list.forEach((poke) => {
      const div = document.createElement('div');
      div.innerHTML = `
      <img src="${poke.img}" />
      <h3>${poke.name}</h3>
      <p>${poke.id}</p>
      <p>${poke.type}</p>
`  ;
      container.appendChild(div);


  });
}



// start.addEventListener('click', drawPokemons)

// 1.- nodo
let typeFilterButtons = document.querySelectorAll('.buttons');
// 2.- listener
typeFilterButtons.forEach((buttons) => buttons.addEventListener('click', filterBichos));
// 3.- callback
function filterBichos(event) {
    let id = event.target.id;
    let filteredList = filterByType(id);
    console.log(id)
    console.log(filteredList);
 drawPokemons(filteredList) // [{},{}]

        // aqui 
}
// 4.- func aux
function filterByType(type) {
    return data.pokemon.filter((poke) => poke.type.includes(poke.type))
}


const formulario = document.querySelector(".searchField");
const boton = document.querySelector(".searchBtn");
const resultado = document.querySelector("#container");
const filtrar = () => {
  
  resultado.innerHTML = "";
  console.log(formulario.value);
  const texto = formulario.value.toLowerCase();
  console.log(formulario.value.toLowerCase())
  for (let poke of list) {
      let names = poke.name.toLowerCase()
      if (names.indexOf(texto) !== -1)


          drawPokemons(resultado);


      if (resultado.innerHTML === "")
          resultado.innerHTML += ` Pokémon no encontrado... `;



  };
}

boton.addEventListener("click", filtrar)

function getShortMessages(name) {
    return name
      .filter(function(obj) {
        return obj.name.length <= 5;
      })
      .map(function(obj) {
        return obj.name;
        console.log(obj.name)
      });
  }


  boton.addEventListener("click", getShortMessages)

 