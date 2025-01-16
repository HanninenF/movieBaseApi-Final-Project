import { baseUrl } from "../main";
import { AllTypes } from "../types";

export const getMovieInfoByNameAndTypeMovie = async (
  name: string
): Promise<AllTypes.Root> => {
  const movieUrl = baseUrl + "s=" + name + "&type=movie";
  const response = await fetch(movieUrl);
  const data = (await response.json()) as AllTypes.Root;

  console.log("movieUrl= ", movieUrl);

  return data;
};
