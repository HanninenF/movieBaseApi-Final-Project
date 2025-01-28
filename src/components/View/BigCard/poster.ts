import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/utilsIndex/utilsIndex";
export const createPoster = (movie: AllTypes.Movie) => {
  const poster = Utils.createCustomElement(
    ["poster"],
    "img",
    movie,
    "",
    movie.Poster
  );
  return poster;
};
