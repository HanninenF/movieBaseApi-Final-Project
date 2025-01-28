import * as Utils from "../../../utils/utilsIndex/utilsIndex";
import { AllTypes } from "../../../types/types";
export const createPoster = (movie: AllTypes.Search): HTMLImageElement => {
  const poster = Utils.createCustomElement(
    ["miniPoster", Utils.getSanitizedString(movie.Title)],
    "img",
    movie
  );
  return poster;
};
