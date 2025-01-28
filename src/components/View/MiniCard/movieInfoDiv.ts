import * as Utils from "../../../utils/utilsIndex/utilsIndex";
import { AllTypes } from "../../../types/types";
export const createMovieInfoDiv = (movie: AllTypes.Search): HTMLDivElement => {
  const movieInfoDiv = Utils.createCustomElement(
    ["movieInfoDiv", Utils.getSanitizedString(movie.Title)],
    "div",
    movie,
    "Container for movieInfo"
  );
  return movieInfoDiv;
};
