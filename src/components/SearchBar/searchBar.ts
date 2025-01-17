export const createSearchBar = (): HTMLElement => {
  const searchBar = document.createElement("form");
  searchBar.id = "searchBar";
  searchBar.action = "";
  return searchBar;
};
