import { baseUrl } from "../main";
import { AllTypes } from "../types/types";
import * as Utils from "../utils/utilsIndex/utilsIndex";
import * as State from "../state/stateIndex/stateIndex";

export const getSeriesInfoByName = async (
  name: string
): Promise<AllTypes.Root | null> => {
  try {
    const seriesUrl: string =
      baseUrl + "s=" + encodeURIComponent(name) + "&type=series";
    const response = await fetch(seriesUrl);
    if (!response.ok) {
      throw new Error(
        `API responded with status ${response.status}: ${response.statusText}`
      );
    }
    const data = (await response.json()) as AllTypes.Root;
    Utils.removeErrorMessage();
    if (!data.Search) {
      console.warn("⚠️ No series found for this search term.");
    }
    return data;
  } catch (error) {
    State.appState.hasErrorMessage = true;
    console.error("❌ API request failed:", error);
    Utils.displayErrorMessage(`❌ API request failed: ${error}`);
    return null;
  }
};
