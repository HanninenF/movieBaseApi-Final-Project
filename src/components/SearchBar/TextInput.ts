export const createTextInput = (): HTMLInputElement => {
  const textInput = document.createElement("input");
  textInput.classList.add("searchInput");
  textInput.type = "text";
  textInput.name = "q";
  textInput.placeholder = "Search";
  textInput.setAttribute("aria-label", "Search OMDb");
  textInput.autocomplete = "off";
  return textInput;
};
