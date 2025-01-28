import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/utilsIndex/utilsIndex";
export const createHero = (movie: AllTypes.Movie) => {
  const hero = Utils.createCustomElement(
    ["poster"],
    "img",
    movie,
    "",
    movie.Poster
  );
  return hero;
};
