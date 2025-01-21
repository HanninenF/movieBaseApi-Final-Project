export namespace AllDomEl {
  export let searchInput: HTMLInputElement;
  export let dropdown: HTMLSelectElement;
  export let viewContainer: HTMLElement;

  export function initDomElements() {
    console.log("Initializing DOM elements...");
    searchInput = document.querySelector(".searchInput") as HTMLInputElement;
    dropdown = document.querySelector("#categoryDropdown") as HTMLSelectElement;
    viewContainer = document.querySelector(".viewContainer") as HTMLElement;

    console.log("Elements initialized:", {
      searchInput,
      dropdown,
      viewContainer,
    });
  }
}
