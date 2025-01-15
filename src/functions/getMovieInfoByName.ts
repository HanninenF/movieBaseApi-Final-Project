import { baseUrl } from "../main";
import { AllTypes } from "../types";

export const getMovieInfoByName = async (
  title: string
): Promise<AllTypes.Root> => {
  const movieUrl: string = baseUrl + "s=" + title;
  console.log(movieUrl);
  const response = await fetch(movieUrl);
  const data = (await response.json()) as AllTypes.Root;

  return data;
};
