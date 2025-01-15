import "./main.scss";
import * as Functions from "./functions/index";

import { apiKey } from "./keys/apiKey";
import * as Components from "./components/index";
import { AllDomEl } from "./utils/AllDomEl";
import { AllTypes } from "./types";

export const baseUrl: string = `http://www.omdbapi.com/?apikey=${apiKey}&`;

console.log(await Functions.getMovieInfoByName("lethal"));

export const viewportSection = document.querySelector(
  ".viewportSection"
) as HTMLElement;

export const searchBarContainer = document.querySelector(
  ".searchBarContainer"
) as HTMLDivElement;

export const searchBar = document.querySelector(
  "#searchBar"
) as HTMLFormElement;

/* <!-- DropdownContainer i Sökfält (form) --> */
const dropdownContainer = document.createElement("div");
dropdownContainer.classList.add("dropdownContainer");
searchBar.appendChild(dropdownContainer);

/* <!-- InputContainer i sökfält (form) --> */
const inputContainer = document.createElement("div");
inputContainer.classList.add("inputContainer");
searchBar.appendChild(inputContainer);

/* <!-- Dropdown för kategorier --> */
export const dropDownOptions: string[] = [
  "All",
  "Titles",
  "Tv Episodes",
  "Celebs",
];

dropdownContainer.appendChild(Components.createDropdown(dropDownOptions));

/* <!-- Textfält --> */
inputContainer.appendChild(Components.createTextInput());

/* <!-- Autosuggestions i InputContainer --> */
const autosuggestions = document.createElement("div");
autosuggestions.classList.add("autosuggestions");
autosuggestions.role = "listbox";
inputContainer.appendChild(autosuggestions);

/* <!-- Sökknapp --> */
searchBar.appendChild(Components.createSearchButton());

///////////////////////////////////
////////////EventListeners/////////
//////////////////////////////////
/* <!-- EventListener Sökfält Form--> */
searchBar.addEventListener("submit", async (e) => {
  e.preventDefault();
  const dropdownValue = AllDomEl.dropdown.value as AllTypes.Category;
  let searchInputValue: string = AllDomEl.searchInput.value;

  if (dropdownValue === "All") {
    const movieInfo = Functions.getMovieInfoByName(searchInputValue);
  }
  if (dropdownValue === "Titles") {
    const movieInfo = Functions.getMovieInfoByTitle(searchInputValue);
  }
  if (dropdownValue === "Tv Episodes") {
    const TvEpisodeInfo = Functions.getTvEpisodeInfoByName(searchInputValue);
  }
  if (dropdownValue === "Celebs") {
    const celebInfo = Functions.getCelebInfoByName(searchInputValue);
  }
  searchInputValue = "";
});
