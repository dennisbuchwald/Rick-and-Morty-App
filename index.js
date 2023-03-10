import { currentPage } from "./components/nav-pagination/nav-pagination.js";
import {
  prevButtonClick,
  nextButtonClick,
} from "./components/nav-button/nav-button.js";

import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  cardContainer.innerHTML = "";
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    if (response.ok) {
      const characters = data.results;
      console.log(characters);
      characters.forEach((character) => {
        const card = createCharacterCard(character);
        cardContainer.append(card);
      });
    } else {
      console.error("Bad response");
    }
  } catch (error) {
    console.error("An error has occured!");
  }
}

fetchCharacters();
