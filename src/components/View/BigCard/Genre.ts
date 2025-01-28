import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/utilsIndex/utilsIndex";
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
