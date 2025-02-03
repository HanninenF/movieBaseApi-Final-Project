import { baseUrl } from "../main";
import { AllTypes } from "../types/types";

export const getMovieInfoByNameAndTypeMovie = async (
  name: string
): Promise<AllTypes.Root> => {
  const movieUrl = baseUrl + "s=" + name + "&type=movie";
  const response = await fetch(movieUrl);
  const data = (await response.json()) as AllTypes.Root;

  "movieUrl= ", movieUrl;

  return data;
};
