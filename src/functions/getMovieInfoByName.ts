import { baseUrl } from "../main";
import { AllTypes } from "../types/types";
import * as Utils from "../utils/utilsIndex/utilsIndex";

export const getMovieInfoByName = async (
  title: string
): Promise<AllTypes.Root | null> => {
  try {
    const movieUrl: string = baseUrl + "s=" + encodeURIComponent(title);
    const response = await fetch(movieUrl);

    if (!response.ok) {
      throw new Error(
        `API responded with status ${response.status}: ${response.statusText}`
      );
    }

    const data = (await response.json()) as AllTypes.Root;
    Utils.removeErrorMessage();
    if (!data.Search) {
      console.warn("⚠️ No movies found for this search term.");
      return null;
    }

    return data;
  } catch (error) {
    console.error("❌ API request failed:", error);
    Utils.displayErrorMessage(`❌ API request failed: ${error}`);

    return null;
  }
};
