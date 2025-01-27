import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/index";
export const createPlot = (movie: AllTypes.Movie) => {
  const plot = Utils.foo(["plot"], "p", movie, "", movie.Plot);
  return plot;
};
