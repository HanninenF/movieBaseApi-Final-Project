import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/utilsIndex/utilsIndex";
export const createMiniCard = (movie: AllTypes.Search): HTMLButtonElement => {
  const miniCard = Utils.createCustomElement(
    ["miniCard", Utils.getSanitizedString(movie.Title)],
    "button",
    movie,
    "view details about"
  );
  return miniCard;
};
