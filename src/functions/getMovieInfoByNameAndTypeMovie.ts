import { baseUrl } from "../main";
import { AllTypes } from "../types/types";

export const getMovieInfoByNameAndTypeMovie = async (
  name: string
): Promise<AllTypes.Root> => {
  try {
    const movieUrl = baseUrl + "s=" + name + "&type=movie";
    const response = await fetch(movieUrl);
    if (response.ok) {
      throw new Error();
    }
    const data = (await response.json()) as AllTypes.Root;

    return data;
  } catch (error) {
    console.error(error);
  }
};
