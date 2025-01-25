import * as Utils from "../../../utils/index";
import { AllTypes } from "../../../types/types";
export const createPoster = (movie: AllTypes.Search): HTMLImageElement => {
  const poster = Utils.foo(
    ["miniPoster", Utils.getSanitizedString(movie.Title)],
    "img",
    movie
  );
  return poster;
};
