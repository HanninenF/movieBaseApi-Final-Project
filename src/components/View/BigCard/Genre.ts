import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/index";
export const createGenre = (movie: AllTypes.Movie) => {
  const genre = Utils.createCustomElement(
    ["genre"],
    "h4",
    movie,
    "",
    movie.Genre
  );
  return genre;
};
