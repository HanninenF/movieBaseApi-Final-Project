import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/index";
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
