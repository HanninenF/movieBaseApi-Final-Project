import * as Utils from "../../../utils/utilsIndex/utilsIndex";
export const createMovieInfoUl = () => {
  const movieInfoUl = Utils.createCustomElement(["infoUl"], "ul");
  return movieInfoUl;
};
