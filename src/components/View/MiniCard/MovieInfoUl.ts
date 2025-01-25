import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/index";
export const createMovieInfoUl = (movie: AllTypes.Search) => {
  const movieInfoUl = Utils.foo(
    ["movieInfoUl", Utils.getSanitizedString(movie.Title)],
    "ul",
    movie,
    "Unordered List for additional movie info"
  );
  return movieInfoUl;
};
