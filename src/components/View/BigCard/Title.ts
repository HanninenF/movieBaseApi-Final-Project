import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/index";
export const createTitle = (
  movie: AllTypes.Movie
): {
  titleElement: HTMLHeadingElement;
  secondElement?: HTMLHeadElement;
  textParts: { firstPart: string; secondPart: string };
} => {
  //TODO: byt namn på textParts till splitTitleParts
  //TODO: byt namn på secondElement till subtitleElement
  const title = Utils.titleFooForSeparationAtColon(
    ["title"],
    "h1",
    movie,
    "",
    movie.Title
  );
  if (title.textParts.secondPart !== "") {
    const secondPartElement = Utils.createCustomElement(
      ["title"],
      "span",
      movie,
      "",
      title.textParts.secondPart
    );
    return {
      titleElement: title.element,
      secondElement: secondPartElement,
      textParts: title.textParts,
    };
  }
  return { titleElement: title.element, textParts: title.textParts };
};
