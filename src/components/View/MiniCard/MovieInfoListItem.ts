import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/index";

export const createMovieInfoListItem = (
  movie: AllTypes.Search,
  listData: AllTypes.MoeInfoListData,
  key: string
) => {
  const listItemElement = Utils.createCustomElement(
    ["liEl", Utils.getSanitizedString(movie.Title)],
    "li",
    movie,
    `List Element with additional movie info: ${key}`,
    listData[key as keyof typeof listData]
  );

  return listItemElement;
};
