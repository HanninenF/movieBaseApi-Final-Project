import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/index";
export const createMovieInfoListItem = (
  movie: AllTypes.Movie,
  listData: AllTypes.MoeInfoListData,
  key: string
) => {
  const listElement = Utils.createCustomElement(
    ["infoLi", Utils.getSanitizedString(movie.Title)],
    "li",
    movie,
    `List Element with additional movie info: ${key}`,
    `${key}: ${listData[key as keyof typeof listData]}`
  );
  return listElement;
};
