import * as Utils from "../../../utils/createCustomElement";
import { AllTypes } from "../../../types/types";
export const createTitleDiv = (movie: AllTypes.Movie) => {
  const titleDiv = Utils.createCustomElement(["titleDiv"], "div");
  return titleDiv;
};
