import { AllTypes } from "../types/types";
import { appState } from "./state";

export const setCurrentViewById = (detailedInfo: AllTypes.Movie) => {
  appState.currentView = [detailedInfo];

  console.log("appState.currentView updated:", appState.currentView);
};
