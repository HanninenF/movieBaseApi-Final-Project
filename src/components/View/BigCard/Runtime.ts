import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/utilsIndex/utilsIndex";
export const createRuntime = (movie: AllTypes.Movie) => {
  const runtime = Utils.createCustomElement(
    ["runtime"],
    "h3",
    movie,
    "",
    movie.Runtime
  );
  return runtime;
};
