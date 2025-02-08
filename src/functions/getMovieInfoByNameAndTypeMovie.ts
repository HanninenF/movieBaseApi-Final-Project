import { baseUrl } from "../main";
import { AllTypes } from "../types/types";
import * as Utils from "../utils/utilsIndex/utilsIndex";
import * as State from "../state/stateIndex/stateIndex";

export const getMovieInfoByNameAndTypeMovie = async (
  name: string
): Promise<AllTypes.Root | null> => {
  try {
    const movieUrl = baseUrl + "s=" + encodeURIComponent(name) + "&type=movie";
    const response = await fetch(movieUrl);
    if (!response.ok) {
      throw new Error(
        `API responded with status ${response.status}: ${response.statusText}`
      );
    }
    const data = (await response.json()) as AllTypes.Root;
    Utils.removeErrorMessage();
    if (!data.Search) {
      console.warn("⚠️ No movies found for this ID.");
      return null;
    }
    return data;
  } catch (error) {
    State.appState.hasErrorMessage = true;
    console.error("❌ API request failed:", error);
    Utils.displayErrorMessage(`❌ API request failed: ${error}`);
    return null;
  }
};
