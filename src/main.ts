import "./main.scss";
import * as Functions from "./functions/index";
import * as Utils from "./utils/index";
import * as State from "./state/index";

import { apiKey } from "./keys/apiKey";
import * as Searchbar from "./components/SearchBar/index";
import * as Minicard from "./components/MiniCard/createMiniCardContainer";
import { AllDomEl } from "./utils/AllDomEl";
import { AllTypes } from "./types/types";

export const baseUrl: string = `http://www.omdbapi.com/?apikey=${apiKey}&`;

console.log(await Functions.getMovieInfoByName("lethal"));

export const main = document.querySelector(".main") as HTMLElement;

/* SearchBarContainer --> */
main.appendChild(Searchbar.searchBarContainer());
const searchBarContainer = document.querySelector(
  ".searchBarContainer"
) as HTMLDivElement;

/* SearchBar (formElement)--> */
searchBarContainer.appendChild(Searchbar.createSearchBar());
const searchBar = document.querySelector("#searchBar") as HTMLElement;

/* <!-- DropdownContainer i Sökfält (form) --> */
searchBar.appendChild(Searchbar.createDropdownContainer());
const dropdownContainer = document.querySelector(
  ".dropdownContainer"
) as HTMLDivElement;

/* <!-- InputContainer i sökfält (form) --> */
searchBar.appendChild(Searchbar.createInputContainer());
const inputContainer = document.querySelector(
  ".inputContainer"
) as HTMLInputElement;

/* <!-- Dropdown för kategorier --> */
export const dropDownOptions: string[] = ["All", "Titles", "Movies", "Series"];

dropdownContainer.appendChild(Searchbar.createDropdown(dropDownOptions));

/* <!-- Textfält --> */
inputContainer.appendChild(Searchbar.createTextInput());

/* <!-- Autosuggestions i InputContainer --> */
//TODO: fixa denna också
const autosuggestions = document.createElement("div");
autosuggestions.classList.add("autosuggestions");
autosuggestions.role = "listbox";
inputContainer.appendChild(autosuggestions);

/* <!-- Sökknapp --> */
searchBar.appendChild(Searchbar.createSearchButton());

/* <!-- miniCardsContainer --> */
main.appendChild(Minicard.createMiniCardContainer());

///////////////////////////////////
////////////EventListeners/////////
//////////////////////////////////
AllDomEl.initDomElements();
/* <!-- EventListener Sökfält Form--> */
console.log("entered document.addEventListener");
if (searchBar && AllDomEl.dropdown && AllDomEl.searchInput) {
  searchBar.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("entered searchBar.addEventListener");
    const dropdownValue = AllDomEl.dropdown!.value as AllTypes.Category;
    console.log("categoryDropdown=", dropdownValue);
    const searchInputValue = Utils.getUrlParametersFromWord(
      AllDomEl.searchInput.value
    ) as string;

    console.log("searchInputValue= ", searchInputValue);

    if (dropdownValue === "All") {
      const movieInfo = await Functions.getMovieInfoByName(searchInputValue);

      State.setAllMovies(movieInfo.Search);

      console.log("state movies from main= ", State.appState.allMovies);

      State.setCurrentView(movieInfo.Search);

      console.log(movieInfo);

      //TODO: lägg in state
      Functions.renderMiniCard(State.appState.currentView);

      console.log("rendern gick bra");
    }
    if (dropdownValue === "Titles") {
      const movieInfo = await Functions.getMovieInfoByTitle(searchInputValue);
      console.log(movieInfo);
    }
    if (dropdownValue === "Movies") {
      const movieInfo =
        await Functions.getMovieInfoByNameAndTypeMovie(searchInputValue);
      console.log(movieInfo);
    }
    if (dropdownValue === "Series") {
      const seriesInfo = await Functions.getSeriesInfoByName(searchInputValue);
      console.log(seriesInfo);
    }
    AllDomEl.searchInput.value = "";
    /*  AllDomEl.dropdown.value = "default"; */

    /* Functions.renderMiniCard(); */
  });
}
const searchButton = document.createElement("button");
searchButton.classList.add("buttonSearch2");
searchButton.type = "button";
searchButton.textContent = "do not press!";
main.append(searchButton);

console.log("searchButton= ", searchButton);
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  State.appState.currentView.pop();
  console.log("currentView at the end of main= ", State.appState.currentView);
  Functions.renderMiniCard(State.appState.currentView);
});
