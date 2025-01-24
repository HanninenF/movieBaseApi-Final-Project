import "./main.scss";
import * as Functions from "./functions/index";
import * as Utils from "./utils/index";
import * as State from "./state/index";

import { apiKey } from "../src/keys/apiKey";
import * as Searchbar from "./components/SearchBar/index";
import * as View from "./components/View/index";
import * as BackArrow from "./components/BackArrow/index";
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

/* <!-- backArrow --> */
//TODO: göm backArrow här

main.appendChild(BackArrow.createBackArrowContainer());
const backArrowContainer = document.querySelector(
  ".backArrowContainer"
) as HTMLDivElement;
backArrowContainer.appendChild(BackArrow.createBackArrow());

const backArrow = document.querySelector(".backArrow") as HTMLDivElement;
console.log("backArrow= ", backArrow);
backArrowContainer.appendChild(backArrow);

/* <!-- viewContainer --> */
main.appendChild(View.createViewContainer());

///////////////////////////////////
////////////EventListeners/////////
//////////////////////////////////
AllDomEl.initDomElements();
/* <!-- EventListener Sökfält Form--> */
console.log("entered document.addEventListener");
if (searchBar && AllDomEl.dropdown && AllDomEl.searchInput) {
  searchBar.addEventListener("submit", async (e) => {
    State.appState.currentView = [];
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

      Functions.renderMiniCard(State.appState.currentView);

      console.log("rendern gick bra");
    }
    if (dropdownValue === "Titles") {
      //TODO:
      const movieInfo = await Functions.getMovieInfoByTitle(searchInputValue);
      console.log(movieInfo);
    }
    if (dropdownValue === "Movies") {
      //TODO_
      const movieInfo =
        await Functions.getMovieInfoByNameAndTypeMovie(searchInputValue);
      console.log(movieInfo);
    }
    if (dropdownValue === "Series") {
      //TODO:
      const seriesInfo = await Functions.getSeriesInfoByName(searchInputValue);
      console.log(seriesInfo);
    }
    AllDomEl.searchInput.value = "";
    /*  AllDomEl.dropdown.value = "default"; */

    /* Functions.renderMiniCard(); */
  });

  ///////////////////////////////////
  ////////////EventListener/////////
  //////////////////////////////////
  AllDomEl.viewContainer.addEventListener("click", async (e) => {
    const viewContainer = document.querySelector(
      ".viewContainer"
    ) as HTMLDivElement;

    const target = e.target as HTMLElement;
    const miniCard = target.closest("button.miniCard") as HTMLButtonElement;

    console.log("button= ", miniCard);

    //hämta id från html-elementet
    const movieId = miniCard?.getAttribute("data-id");
    console.log("knapp klickad, data-id= ", movieId);
    //TODO: fetcha ny data
    //TODO: currentView

    State.appState.currentView = State.appState.allMovies.filter((movie) =>
      movie.imdbID === movieId ? movie : null
    );

    console.log(
      "State.appstate.currentView in viewContainer.eventlistener= ",
      State.appState.currentView
    );

    if (movieId) {
      const detailedInfo = await Functions.getDetailedInfoById(movieId);
      console.log(detailedInfo);

      //uppdatera state currentView
      State.setCurrentViewById(detailedInfo);

      Functions.renderBigCard(State.appState.currentView[0] as AllTypes.Movie);
    }
  });
}
