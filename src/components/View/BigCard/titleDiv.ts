import * as Utils from "../../../utils/createCustomElement";

export const createTitleDiv = () => {
  const titleDiv = Utils.createCustomElement(["titleDiv"], "div");
  return titleDiv;
};
