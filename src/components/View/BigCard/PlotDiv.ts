import * as Utils from "../../../utils/index";
export const createPlotDiv = () => {
  const plotDiv = Utils.createCustomElement(["plotDiv"], "div");
  return plotDiv;
};
