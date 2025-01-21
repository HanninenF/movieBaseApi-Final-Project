export namespace AllDomEl {
  export let searchInput: HTMLInputElement;
  export let dropdown: HTMLSelectElement;
  export let miniCardContainer: HTMLElement;

  export function initDomElements() {
    console.log("Initializing DOM elements...");
    searchInput = document.querySelector(".searchInput") as HTMLInputElement;
    dropdown = document.querySelector("#categoryDropdown") as HTMLSelectElement;
    miniCardContainer = document.querySelector(
      ".miniCardContainer"
    ) as HTMLElement;

    console.log("Elements initialized:", {
      searchInput,
      dropdown,
      miniCardContainer,
    });
  }
}
