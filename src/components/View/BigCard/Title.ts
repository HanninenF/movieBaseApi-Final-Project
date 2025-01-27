import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/index";
export const createTitle = (movie: AllTypes.Movie) => {
  const title = Utils.foo(["title"], "h1", movie, "", movie.Title);
  return title;
};
