import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/index";
export const createRuntime = (movie: AllTypes.Movie) => {
  const runtime = Utils.foo(["runtime"], "h3", movie, "", movie.Runtime);
  return runtime;
};
