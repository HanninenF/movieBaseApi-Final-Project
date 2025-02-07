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
backArrowContainer.append(
  Utils.createCustomElement(["backArrowWrapper", "arrowWrapper"], "div"),
  Utils.createCustomElement(["forwardArrowWrapper", "arrowWrapper"], "div")
);
const backArrowWrapper = document.querySelector(
  ".backArrowWrapper"
) as HTMLDivElement;
const forwardArrowWrapper = document.querySelector(
  ".forwardArrowWrapper"
) as HTMLDivElement;

backArrowWrapper.appendChild(Arrows.createBackArrow());

const backArrow = document.querySelector(".backArrow") as SVGElement;

/* <!-- forwardArrow -->  */

forwardArrowWrapper.appendChild(Arrows.createForwardArrow());

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
      if (State.appState.previousViews.length > 0) {
        backArrow.setAttribute("display", "block");
      }
      State.appState.previousViews.push([...State.appState.currentView]);
      /* backArrow.setAttribute("display", "block"); */
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

      if (movieInfo && movieInfo.Search) {
        console.log("movieInfo och movieInfo search är inte null");
        State.setAllMovies(movieInfo.Search);

        State.setCurrentView(movieInfo.Search);
        /* State.setPreviousView(movieInfo.Search); */
        Functions.renderMiniCard(State.appState.currentView);
        console.log("All states: ", State.appState);
      }
    }
    if (dropdownValue === "Titles") {
      //TODO:
      const movieInfo = await Functions.getMovieInfoByTitle(searchInputValue);
      console.log(movieInfo);

      if (movieInfo) {
        State.setAllMoviesFromTitles(movieInfo);

        State.setCurrentViewFromTitle(movieInfo);
        /* State.setPreviousView(movieInfo.Search); */
        Functions.renderMiniCard(State.appState.currentView);
        console.log("All states: ", State.appState);
      }
    }
    if (dropdownValue === "Movies") {
      //TODO_
      const movieInfo =
        await Functions.getMovieInfoByNameAndTypeMovie(searchInputValue);

      if (movieInfo && movieInfo.Search) {
        State.setAllMovies(movieInfo.Search);

        State.setCurrentView(movieInfo.Search);
        /* State.setPreviousView(movieInfo.Search); */
        Functions.renderMiniCard(State.appState.currentView);
        console.log("All states: ", State.appState);
        /* console.log(JSON.stringify(State.appState.currentView, null, 2)); */
      }
    }
    if (dropdownValue === "Series") {
      //TODO:
      const seriesInfo = await Functions.getSeriesInfoByName(searchInputValue);

      if (seriesInfo && seriesInfo.Search) {
        State.setAllMovies(seriesInfo.Search);

        State.setCurrentView(seriesInfo.Search);
        /* State.setPreviousView(movieInfo.Search); */
        Functions.renderMiniCard(State.appState.currentView);
        console.log("All states: ", State.appState);
      }
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

        // ✅ Spara föregående vy INNAN `currentView` ändras!
        State.appState.previousViews.push([...State.appState.currentView]); // Kopiera arrayen

        if (State.appState.previousViews.length > 0) {
          console.log("display block");
          backArrow.setAttribute("display", "block");
        }

        console.log("after push bigCard");
      }

      const existingMovie = State.appState.AllMovies.find(
        (movie) => movie.imdbID === movieId
      );

      console.log("existingMovie:", existingMovie);

      if (existingMovie && "Runtime" in existingMovie) {
        console.log("✅ Detailed info already available, skipping fetch.");
        State.appState.currentView = [existingMovie]; // Direktuppdatering med befintlig film
      } else {
        console.log("❌ Runtime not found, fetching detailed info.");
        const detailedInfo = await Functions.getDetailedInfoById(movieId);
        console.log("Fetched detailedInfoById", detailedInfo);

        if (detailedInfo) {
          // ✅ Uppdatera `AllMovies` med detaljerad info
          State.appState.AllMovies = State.appState.AllMovies.map((movie) =>
            movie.imdbID === movieId ? detailedInfo : movie
          );

          // ✅ Uppdatera `currentView` med den detaljerade filmen
          State.appState.currentView = [detailedInfo];

          // ✅ Rendera den uppdaterade `currentView`
          AllDomEl.viewContainer.classList.add("viewContainerBigCard");
          Functions.renderBigCard(
            State.appState.currentView[0] as AllTypes.Movie
          );

          console.log("🔹 Clicked movie, updated State:", State.appState);
        }
      }

      const previousMovie = State.appState.previousViews[0]?.[0];
      console.log("previousMovie:", previousMovie);
    }
  });
}

if (forwardArrowWrapper) {
  backArrowWrapper.addEventListener("click", () => {
    if (State.appState.previousViews.length === 0) {
      console.warn("⚠️ No previous view available.");
      backArrow.setAttribute("display", "none");
      return;
    }

    console.log("⬅ Back clicked - Sparar nuvarande vy i futureViews");

    // 🔥 Spara nuvarande vy i `futureViews` innan vi byter
    State.appState.futureViews.push([...State.appState.currentView]);

    let prevView;

    // 🔎 Om användaren har gjort en Titles-sökning, använd `lastSearch`
    if (State.appState.lastSearch.length > 0) {
      console.log("📌 Använd lastSearch för att gå tillbaka");
      State.appState.futureViews = State.appState.lastSearch;
      prevView = State.appState.previousViews.pop();
      State.appState.lastSearch = [];
    }
    // 🔎 Om det var en vanlig bigCard, hämta senaste vyn från previousViews
    else {
      console.log("🔄 Går tillbaka till previousViews");
      prevView = State.appState.previousViews.pop();
    }

    if (prevView) {
      State.appState.currentView = prevView;
      console.log("⬅ Back - Uppdaterad vy:", State.appState.currentView);
      Functions.renderMiniCard(State.appState.currentView);
    } else {
      console.warn("⚠️ No previous view available.");
    }

    console.log("📊 All states:", State.appState);
  });
}

if (forwardArrowWrapper) {
  forwardArrowWrapper.addEventListener("click", () => {
    if (State.appState.futureViews.length === 0) {
      console.warn("⚠️ No forward view available.");
      return;
    }

    console.log("➡ Forward clicked - Navigerar framåt");

    // 🔥 Spara nuvarande vy i `previousViews` innan vi går framåt
    State.appState.previousViews.push([...State.appState.currentView]);

    const futView = State.appState.futureViews.pop();

    if (futView) {
      console.log("➡ Forward - Ny vy hämtad:", futView);
      State.appState.currentView = futView;
      Functions.renderMiniCard(State.appState.currentView);
    } else {
      console.warn("⚠️ No forward view available, staying on current view.");
    }

    console.log("📊 All states:", State.appState);
  });
}

//innan currentview ändras ska den läggas till i
