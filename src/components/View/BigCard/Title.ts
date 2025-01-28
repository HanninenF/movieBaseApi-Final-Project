import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/utilsIndex/utilsIndex";
export const createTitle = (
  movie: AllTypes.Movie
): {
  titleElement: HTMLHeadingElement;
  subtitleElement?: HTMLHeadElement;
  splitTitleParts: { firstPart: string; secondPart: string };
} => {
  const title = Utils.createTitleElementWithColonSplit(
    ["title"],
    "h1",
    movie,
    "",
    movie.Title
  );
  if (title.splitTitleParts.secondPart !== "") {
    const subtitleElement = Utils.createCustomElement(
      ["title"],
      "span",
      movie,
      "",
      title.splitTitleParts.secondPart
    );
    return {
      titleElement: title.element,
      subtitleElement: subtitleElement,
      splitTitleParts: title.splitTitleParts,
    };
  }
  return {
    titleElement: title.element,
    splitTitleParts: title.splitTitleParts,
  };
};
