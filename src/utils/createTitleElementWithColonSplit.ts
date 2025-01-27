import { AllTypes } from "../types/types";
import * as Utils from "./index";
export const createTitleElementWithColonSplit = <
  T extends keyof HTMLElementTagNameMap,
>(
  className: string[],
  elementTag: T,
  movieInfo?: AllTypes.Movie | AllTypes.Search,
  ariaLabel?: string,
  text_content?: string
): {
  element: HTMLElementTagNameMap[T];
  splitTitleParts: { firstPart: string; secondPart: string };
} => {
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
        const splitTitleParts = Utils.extractTitleParts(text_content);
        return { element, splitTitleParts: splitTitleParts };
      }
    }
  }
  return {
    element: element,
    splitTitleParts: { firstPart: "", secondPart: "" },
  };
};
