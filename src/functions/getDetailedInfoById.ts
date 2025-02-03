import { baseUrl } from "../main";
import { AllTypes } from "../types/types";

export const getDetailedInfoById = async (
  movieId: string
): Promise<AllTypes.Movie> => {
  const detailedInfoUrl = baseUrl + "i=" + movieId;
  detailedInfoUrl;
  const response = await fetch(detailedInfoUrl);
  const data = (await response.json()) as AllTypes.Movie;

  return data;
};
