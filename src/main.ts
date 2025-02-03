import "./main.scss";
import * as Functions from "./functions/functionsIndex/functionsIndex";
import * as Utils from "./utils/utilsIndex/utilsIndex";
import * as State from "./state/stateIndex/stateIndex";

import { apiKey } from "../src/keys/apiKey";
import * as Searchbar from "./components/SearchBar/searchBarIndex/searchBarIndex";
import * as View from "./components/View/viewIndex/viewIndex";
import * as Arrows from "./components/Arrows/ArrowsIndex/arrowsIndex";
import { AllDomEl } from "./utils/AllDomEl";
import { AllTypes } from "./types/types";

export const baseUrl: string = `http://www.omdbapi.com/?apikey=${apiKey}&`;

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

main.appendChild(Arrows.createBackArrowContainer());
const backArrowContainer = document.querySelector(
  ".backArrowContainer"
) as HTMLDivElement;
backArrowContainer.appendChild(Arrows.createBackArrow());

const backArrow = document.querySelector(".backArrow") as SVGElement;
backArrowContainer.appendChild(backArrow);

/* <!-- forwardArrow -->  */

backArrowContainer.appendChild(Arrows.createForwardArrow());

const forwardArrow = document.querySelector(".forwardArrow") as SVGElement;

/* <!-- viewContainer --> */
main.appendChild(View.createViewContainer());

///////////////////////////////////
////////////EventListeners/////////
//////////////////////////////////
AllDomEl.initDomElements();
/* <!-- EventListener Sökfält Form--> */
if (searchBar && AllDomEl.dropdown && AllDomEl.searchInput) {
  searchBar.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (State.appState.currentView.length > 0) {
      State.appState.previousViews.push([...State.appState.currentView]);
      /*  State.appState.lastSearch = [...State.appState.currentView]; // 🔥 Uppdatera `lastSearch` */
    }

    // 🔥 Nollställ `currentView` och `futureViews` eftersom vi startar en ny sökning
    State.appState.currentView = [];
    State.appState.futureViews = [];

    const dropdownValue = AllDomEl.dropdown!.value as AllTypes.Category;
    const searchInputValue = Utils.getUrlParametersFromWord(
      AllDomEl.searchInput.value
    ) as string;

    if (dropdownValue === "All") {
      const movieInfo = await Functions.getMovieInfoByName(searchInputValue);

      State.setAllMovies(movieInfo.Search);

      State.setCurrentView(movieInfo.Search);
      /* State.setPreviousView(movieInfo.Search); */
      Functions.renderMiniCard(State.appState.currentView);
      console.log("All states: ", State.appState);
    }
    if (dropdownValue === "Titles") {
      //TODO:
      const movieInfo = await Functions.getMovieInfoByTitle(searchInputValue);
    }
    if (dropdownValue === "Movies") {
      //TODO_
      const movieInfo =
        await Functions.getMovieInfoByNameAndTypeMovie(searchInputValue);
    }
    if (dropdownValue === "Series") {
      //TODO:
      const seriesInfo = await Functions.getSeriesInfoByName(searchInputValue);
    }
    AllDomEl.searchInput.value = "";
    /*  AllDomEl.dropdown.value = "default"; */

    /* Functions.renderMiniCard(); */
  });

  ///////////////////////////////////
  ////////////EventListener/////////
  //////////////////////////////////
  AllDomEl.viewContainer.addEventListener("click", async (e) => {
    const target = e.target as HTMLElement;
    const miniCard = target.closest("button.miniCard") as HTMLButtonElement;

    // Hämta id från miniCard (om det existerar)
    const movieId = miniCard?.getAttribute("data-id");

    if (movieId) {
      // ✅ Spara senaste sökningen i `lastSearch` innan vi navigerar till en film
      if (State.appState.currentView.length > 0) {
        const lastSearch = State.appState.futureViews;
        if (lastSearch) {
          State.appState.lastSearch = lastSearch;
          State.appState.futureViews = [];
        }
        State.appState.previousViews.push(State.appState.currentView);

        console.log("after push bigCard");
      }

      // 🔥 Uppdatera currentView med den valda filmen
      State.appState.currentView = State.appState.AllMovies.filter((movie) =>
        movie.imdbID === movieId ? movie : null
      );

      const detailedInfo = await Functions.getDetailedInfoById(movieId);
      State.setCurrentViewById(detailedInfo);

      Functions.renderBigCard(State.appState.currentView[0] as AllTypes.Movie);

      console.log("🔹 Clicked movie, updated State:", State.appState);
    }
  });
}

if (backArrow) {
  backArrow.addEventListener("click", () => {
    if (State.appState.lastSearch.length > 0) {
      State.appState.futureViews = State.appState.lastSearch;
      const prevView = State.appState.previousViews.pop();
      if (prevView) {
        State.appState.currentView = prevView;
        Functions.renderMiniCard(State.appState.currentView);

        console.log("All states: ", State.appState);
      }
      /*  State.appState.currentView; */
    } else if (State.appState.previousViews.length > 0) {
      // 🔥 Spara nuvarande vy i futureViews innan vi byter
      if (State.appState.currentView.length > 0) {
        State.appState.futureViews.push([...State.appState.currentView]);
        const prevView = State.appState.previousViews.pop();
        if (prevView) {
          State.appState.currentView = prevView;
        }
      }

      Functions.renderMiniCard(State.appState.currentView);

      console.log("All states: ", State.appState);
    } else {
      console.warn("⚠️ No valid previous view available.");
    }
  });
}

/* if (forwardArrow) {
  forwardArrow.addEventListener("click", () => {
    if (State.appState.futureViews.length > 0) {
      // 🔥 Hämta nästa vy från futureViews
      const nextViewObj = State.appState.futureViews.pop();

      if (nextViewObj && nextViewObj.data.length > 0) {
        // 🔥 Uppdatera currentView med nästa vy
        State.appState.currentView = nextViewObj.data;

        if (nextViewObj.type === "Search") {
          // ✅ Om vi går framåt till en sökning, säkerställ att `lastSearch` uppdateras
          State.appState.lastSearch = [...nextViewObj.data];

          Functions.renderMiniCard(State.appState.currentView);
        } else if (nextViewObj.type === "Movie") {
          Functions.renderBigCard(
            State.appState.currentView[0] as AllTypes.Movie
          );
        }

        console.log(
          "🔹 Forward: Navigerade till nästa vy:",
          State.appState.currentView
        );
        console.log("All states: ", State.appState);
      } else {
        console.warn("⚠️ No valid forward view available.");
      }
    } else {
      console.warn("⚠️ No forward view available, staying on current view.");
    }
  });
} */

//innan currentview ändras ska den läggas till i
