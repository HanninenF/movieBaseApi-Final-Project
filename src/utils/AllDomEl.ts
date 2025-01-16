export namespace AllDomEl {
  export let searchInput: HTMLInputElement;
  export let dropdown: HTMLSelectElement;

  export function initDomElements() {
    console.log("Initializing DOM elements...");
    searchInput = document.querySelector(".searchInput") as HTMLInputElement;
    dropdown = document.querySelector("#categoryDropdown") as HTMLSelectElement;

    console.log("Elements initialized:", { searchInput, dropdown });
  }
}
