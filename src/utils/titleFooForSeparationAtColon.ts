import { AllTypes } from "../types/types";
import * as Utils from "../utils/index";
export const titleFooForSeparationAtColon = <
  T extends keyof HTMLElementTagNameMap,
>(
  className: string[],
  elementTag: T,
  movieInfo?: AllTypes.Movie | AllTypes.Search,
  ariaLabel?: string,
  text_content?: string
): {
  element: HTMLElementTagNameMap[T];
  textParts: { firstPart: string; secondPart: string };
} => {
  //TODO: byt namn till createTitleElementWithColonSplit
  //lägg till klasser
  const element = document.createElement(elementTag);
  className.forEach((classname) => {
    element.classList.add(classname);
  });
  //lägg till övriga attribut utifrån elementtyp
  if (movieInfo) {
    if (
      (elementTag === "h1" || elementTag === "h2") &&
      element instanceof HTMLHeadingElement &&
      text_content === movieInfo.Title
    ) {
      element.id = `${className[0]}-${movieInfo.imdbID}`;
      if (ariaLabel !== undefined) {
        element.setAttribute("aria-label", `${ariaLabel}`);
      }
      if (movieInfo !== undefined) {
        //TODO: byt namn på textParts till splitTitleParts
        const textParts = Utils.extractTitleParts(text_content);
        return { element, textParts };
      }
    }
  }
  return { element: element, textParts: { firstPart: "", secondPart: "" } };
};
