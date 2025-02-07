import { AllTypes } from "../types/types";
import { appState } from "./state";

export const setCurrentViewFromTitle = (newMovies: AllTypes.Movie): void => {
  try {
    const alreadyExists = appState.currentView.some((existingMovie) => {
      return existingMovie.imdbID === newMovies.imdbID;
    });
    if (!alreadyExists) {
      appState.currentView?.push(newMovies);
      ("appState.CurrentView updated");
      appState.currentView;
    }
  } catch {
    throw new Error("movie already displayed");
  }
};
