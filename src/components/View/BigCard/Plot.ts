import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/utilsIndex/utilsIndex";
export const createPlot = (movie: AllTypes.Movie) => {
  const plot = Utils.createCustomElement(["plot"], "p", movie, "", movie.Plot);
  return plot;
};
