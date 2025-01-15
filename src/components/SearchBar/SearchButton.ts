export const createSearchButton = (): HTMLButtonElement => {
  const searchButton = document.createElement("button");
  searchButton.classList.add("buttonSearch");
  searchButton.type = "submit";
  searchButton.setAttribute("aria-label", "Submit Search");
  searchButton.textContent = "🔍";
  return searchButton;
};
