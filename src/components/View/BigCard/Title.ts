import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/index";
export const createTitle = (
  movie: AllTypes.Movie
): {
  titleElement: HTMLHeadingElement;
  secondElement?: HTMLHeadElement;
  splitTitleParts: { firstPart: string; secondPart: string };
} => {
  //TODO: byt namn på secondElement till subtitleElement
  const title = Utils.createTitleElementWithColonSplit(
    ["title"],
    "h1",
    movie,
    "",
    movie.Title
  );
  if (title.splitTitleParts.secondPart !== "") {
    const secondPartElement = Utils.createCustomElement(
      ["title"],
      "span",
      movie,
      "",
      title.splitTitleParts.secondPart
    );
    return {
      titleElement: title.element,
      secondElement: secondPartElement,
      splitTitleParts: title.splitTitleParts,
    };
  }
  return {
    titleElement: title.element,
    splitTitleParts: title.splitTitleParts,
  };
};
