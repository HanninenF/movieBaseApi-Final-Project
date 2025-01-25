import { AllTypes } from "../types/types";

export const foo = <T extends keyof HTMLElementTagNameMap>(
  className: string[],
  elementTag: T,
  movieInfo?: AllTypes.Movie | AllTypes.Search,
  ariaLabel?: string,
  movieInfo2?: string
): HTMLElementTagNameMap[T] => {
  const element = document.createElement(elementTag);
  className.forEach((classname) => {
    element.classList.add(classname);
  });
  if (movieInfo) {
    if (elementTag === "img" && element instanceof HTMLImageElement) {
      element.src = movieInfo.Poster;
      element.id = movieInfo.imdbID;
      element.loading = "lazy";
      element.alt = "Movie Title";
    } else if (
      elementTag === "button" &&
      element instanceof HTMLButtonElement
    ) {
      element.id = movieInfo.imdbID;
      element.setAttribute("data-id", movieInfo.imdbID);
      element.setAttribute("aria-label", `${ariaLabel} ${movieInfo.Title}`);
      element.type = "button";
    } else {
      element.id = movieInfo.imdbID;
      element.textContent = movieInfo2 || "";
    }
  }
  return element;
};
