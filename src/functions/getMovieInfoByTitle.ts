import { baseUrl } from "../main";
import { AllTypes } from "../types/types";
export const getMovieInfoByTitle = async (
  title: string
): Promise<AllTypes.Movie> => {
  const movieUrl: string = baseUrl + "t=" + title;
  console.log("titleURL: ", movieUrl);
  const response = await fetch(movieUrl);
  const data = (await response.json()) as AllTypes.Movie;
  return data;
};
