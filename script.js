//import array of pokemons

import {pokemonArray} from "./data/pokemon.js";

console.log(pokemonArray.length);

//select the main container

const container = document.querySelector(".card-container");
console.log("container " + container);

//make the first letter uppercase
const toProper = (string) => {
    return string[0].toUpperCase() + string.substring(1);
}

//generate an image tag
const generateImage = (pokemon) => {
    
    return `<img src="${pokemon.sprite}" alt="${toProper(pokemon.name)}" class="card__image" />`
}

const generateCardContent = ((pokemon) => {
    const heading = `<h2 class="card_heading">${toProper(pokemon.name)}</h2>`;
    let typeDescr = pokemon.types.join(" & ");
    const text = `<p class="card__text">${toProper(pokemon.name)} (#${pokemon.id}) is a ${typeDescr} type pokemon.</p>`;
    return `<div class="card__content"> ${heading} ${text}</div>`;
})
//for each pokemon in array 
pokemonArray.forEach ( (pokemon) => {
    console.log(pokemon.name)


    // generate HTML for a card from pokemon object
    //    const image = generateImage(pokemon);
    //    const card ='<article class="card" > ' + image + "</article>"; // //alternative way

   const card = `<article class="card">${generateImage(pokemon)} ${generateCardContent(pokemon)}</article>`;

   // add HTML to DOM
   container.innerHTML += card;

});
//end loop 







