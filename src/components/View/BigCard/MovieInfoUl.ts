import * as Utils from "../../../utils/index";
export const createMovieInfoUl = () => {
  const movieInfoUl = Utils.createCustomElement(["infoUl"], "ul");
  return movieInfoUl;
};
