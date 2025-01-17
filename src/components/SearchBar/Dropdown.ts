export const createDropdown = (options: string[]): HTMLSelectElement => {
  const dropdown = document.createElement("select");
  dropdown.id = "categoryDropdown";
  dropdown.name = "category";
  dropdown.setAttribute("aria-label", "Category Selector");

  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    optionElement.classList.add("category-dropdown");
    dropdown.appendChild(optionElement);
  });
  return dropdown;
};
