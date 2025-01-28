import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/utilsIndex/utilsIndex";
export const createReleased = (movie: AllTypes.Movie) => {
  const released = Utils.createCustomElement(
    ["released"],
    "h3",
    movie,
    "",
    movie.Released
  );
  return released;
};
