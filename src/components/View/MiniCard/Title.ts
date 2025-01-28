import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/utilsIndex/utilsIndex";
export const createTitle = (movie: AllTypes.Search): HTMLHeadingElement => {
  const title = Utils.createCustomElement(
    ["miniTitle", Utils.getSanitizedString(movie.Title)],
    "h3",
    movie,
    "Movie Title",
    movie.Title
  );
  return title;
};
