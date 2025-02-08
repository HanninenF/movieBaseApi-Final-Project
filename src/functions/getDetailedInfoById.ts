import { baseUrl } from "../main";
import { AllTypes } from "../types/types";
import * as Utils from "../utils/utilsIndex/utilsIndex";
import * as State from "../state/stateIndex/stateIndex";

export const getDetailedInfoById = async (
  movieId: string
): Promise<AllTypes.Movie | null> => {
  try {
    const detailedInfoUrl = baseUrl + "i=" + encodeURIComponent(movieId);
    detailedInfoUrl;
    const response = await fetch(detailedInfoUrl);
    console.log(
      `API responded with status ${response.status}: ${response.statusText}`
    );
    if (!response.ok) {
      throw new Error(
        `API responded with status ${response.status}: ${response.statusText}`
      );
    }
    const data = (await response.json()) as AllTypes.Movie;
    Utils.removeErrorMessage();
    if (!data) {
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
