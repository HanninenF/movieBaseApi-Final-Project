import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/index";
export const createMiniCard = (movie: AllTypes.Search): HTMLButtonElement => {
  const miniCard = Utils.foo(
    ["miniCard", Utils.getSanitizedString(movie.Title)],
    "button",
    movie,
    "view details about"
  );
  return miniCard;
};
