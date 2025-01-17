import "./main.scss";
import * as Functions from "./functions/index";
import * as Utils from "./utils/index";

import { apiKey } from "./keys/apiKey";
import * as Components from "./components/index";
import { AllDomEl } from "./utils/AllDomEl";
import { AllTypes } from "./types/types";

export const baseUrl: string = `http://www.omdbapi.com/?apikey=${apiKey}&`;

console.log(await Functions.getMovieInfoByName("lethal"));

export const main = document.querySelector(".main") as HTMLElement;

/* .SearchBarContainer --> */
main.appendChild(Components.searchBarContainer());
const searchBarContainer = document.querySelector(
  ".searchBarContainer"
) as HTMLDivElement;

/* .SearchBar (formElement)--> */
searchBarContainer.appendChild(Components.createSearchBar());
const searchBar = document.querySelector("#searchBar") as HTMLElement;

/* <!-- DropdownContainer i Sökfält (form) --> */
searchBar.appendChild(Components.createDropdownContainer());
const dropdownContainer = document.querySelector(
  ".dropdownContainer"
) as HTMLDivElement;

/* <!-- InputContainer i sökfält (form) --> */
searchBar.appendChild(Components.createInputContainer());
const inputContainer = document.querySelector(
  ".inputContainer"
) as HTMLInputElement;

/* <!-- Dropdown för kategorier --> */
export const dropDownOptions: string[] = ["All", "Titles", "Movies", "Series"];

dropdownContainer.appendChild(Components.createDropdown(dropDownOptions));

/* <!-- Textfält --> */
inputContainer.appendChild(Components.createTextInput());

/* <!-- Autosuggestions i InputContainer --> */
//TODO: fixa denna också
const autosuggestions = document.createElement("div");
autosuggestions.classList.add("autosuggestions");
autosuggestions.role = "listbox";
inputContainer.appendChild(autosuggestions);

/* <!-- Sökknapp --> */
searchBar.appendChild(Components.createSearchButton());

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
      console.log(JSON.stringify(movieInfo, null, 2));
    }
    if (dropdownValue === "Titles") {
      const movieInfo = await Functions.getMovieInfoByTitle(searchInputValue);
      console.log(JSON.stringify(movieInfo, null, 2));
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

    Functions.renderMiniCard();
  });
}
