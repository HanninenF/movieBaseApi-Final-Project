import { AllTypes } from "../types/types";

export const foo = <T extends keyof HTMLElementTagNameMap>(
  className: string[],
  elementTag: T,
  movieInfo?: AllTypes.Movie | AllTypes.Search,
  ariaLabel?: string,
  text_content?: string
): HTMLElementTagNameMap[T] => {
  //lägg till klasser
  const element = document.createElement(elementTag);
  className.forEach((classname) => {
    element.classList.add(classname);
  });
  if (movieInfo) {
    if (elementTag === "img" && element instanceof HTMLImageElement) {
      element.src = movieInfo.Poster;
      element.id = `${className[0]}-${movieInfo.imdbID}`;
      element.loading = "lazy";
      element.alt = "Movie Poster";
    } else if (
      elementTag === "button" &&
      element instanceof HTMLButtonElement
    ) {
      element.id = `${className[0]}-${movieInfo.imdbID}`;
      element.setAttribute("data-id", movieInfo.imdbID);
      element.setAttribute("aria-label", `${ariaLabel} ${movieInfo.Title}`);
      element.type = "button";
    } else {
      element.id = `${className[0]}-${movieInfo.imdbID}`;
      if (ariaLabel !== undefined) {
        element.setAttribute("aria-label", `${ariaLabel}`);
      }
      if (movieInfo !== undefined) {
        element.textContent = text_content || "";
      }
    }
  }
  return element;
};
