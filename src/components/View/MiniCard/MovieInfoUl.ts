import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/utilsIndex/utilsIndex";
export const createMovieInfoUl = (movie: AllTypes.Search) => {
  const movieInfoUl = Utils.createCustomElement(
    ["movieInfoUl", Utils.getSanitizedString(movie.Title)],
    "ul",
    movie,
    "Unordered List for additional movie info"
  );
  return movieInfoUl;
};
