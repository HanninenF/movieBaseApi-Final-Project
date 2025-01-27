import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/index";
export const createTitle = (
  movie: AllTypes.Movie
): {
  element: HTMLHeadingElement;
  secondElement?: HTMLHeadElement;
  textParts: { firstPart: string; secondPart: string };
} => {
  const title = Utils.titleFooForSeparationAtColon(
    ["title"],
    "h1",
    movie,
    "",
    movie.Title
  );
  if (title.textParts.secondPart !== "") {
    const secondPartElement = Utils.foo(
      ["title"],
      "span",
      movie,
      "",
      title.textParts.secondPart
    );
    return {
      element: title.element,
      secondElement: secondPartElement,
      textParts: title.textParts,
    };
  }
  return { element: title.element, textParts: title.textParts };
};
