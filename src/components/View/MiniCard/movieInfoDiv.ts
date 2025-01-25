import * as Utils from "../../../utils/index";
import { AllTypes } from "../../../types/types";
export const createMovieInfoDiv = (movie: AllTypes.Search): HTMLDivElement => {
  const movieInfoDiv = Utils.foo(
    ["movieInfoDiv", Utils.getSanitizedString(movie.Title)],
    "div",
    movie,
    "Container for movieInfo"
  );
  return movieInfoDiv;
};
