import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/index";
export const createBigCard = (movie: AllTypes.Movie) => {
  const bigCard = Utils.createCustomElement(["bigCard"], "div", movie);
  return bigCard;
};
