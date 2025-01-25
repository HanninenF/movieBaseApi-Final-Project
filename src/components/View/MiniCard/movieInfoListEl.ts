import { AllTypes } from "../../../types/types";
import * as Utils from "../../../utils/index";

export const movieInfoListEl = (
  movie: AllTypes.Search,
  movieInfoLi: AllTypes.MovieInfoUl,
  key: string
) => {
  const liElMovieInfo = Utils.foo(
    ["liEl", Utils.getSanitizedString(movie.Title)],
    "li",
    movie,
    `List Element with additional movie info: ${key}`,
    movieInfoLi[key as keyof typeof movieInfoLi]
  );

  return liElMovieInfo;
};
