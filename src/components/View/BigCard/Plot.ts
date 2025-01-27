import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/index";
export const createPlot = (movie: AllTypes.Movie) => {
  const plot = Utils.createCustomElement(["plot"], "p", movie, "", movie.Plot);
  return plot;
};
