import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/utilsIndex/utilsIndex";

export const createMovieInfoListItem = (
  movie: AllTypes.Search,
  listData: AllTypes.MoeInfoListData,
  key: string
) => {
  const listItemElement = Utils.createCustomElement(
    ["liEl", key, Utils.getSanitizedString(movie.Title)],
    "li",
    movie,
    `List Element with additional movie info: ${key}`,
    listData[key as keyof typeof listData]
  );

  return listItemElement;
};
