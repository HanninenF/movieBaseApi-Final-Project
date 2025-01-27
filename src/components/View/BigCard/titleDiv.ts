import * as Utils from "../../../utils/foo";
import { AllTypes } from "../../../types/types";
export const createTitleDiv = (movie: AllTypes.Movie) => {
  const titleDiv = Utils.foo(["titleDiv"], "div");
  return titleDiv;
};
