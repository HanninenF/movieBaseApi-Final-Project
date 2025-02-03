export namespace AllDomEl {
  export let searchInput: HTMLInputElement;
  export let dropdown: HTMLSelectElement;
  export let viewContainer: HTMLElement;

  export function initDomElements() {
    ("Initializing DOM elements...");
    searchInput = document.querySelector(".searchInput") as HTMLInputElement;
    dropdown = document.querySelector("#categoryDropdown") as HTMLSelectElement;
    viewContainer = document.querySelector(".viewContainer") as HTMLElement;
  }
}
