import { AllTypes } from "../types/types";
import { appState } from "./state";

export const setCurrentViewById = (detailedInfo: AllTypes.Movie) => {
  appState.currentView = [];
  appState.currentView.push(detailedInfo);
  console.log("appState.CurrentView in setCurrentViewById updated");
  console.log(appState.currentView);
};
