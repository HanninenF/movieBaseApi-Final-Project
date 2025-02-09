import { AllTypes } from "../types/types";
import { appState } from "./state";

export const setCurrentView = (newMovies: AllTypes.Search[]): void => {
  newMovies.forEach((movie) => {
    try {
      const alreadyExists = appState.currentView.some((existingMovie) => {
        return existingMovie.imdbID === movie.imdbID;
      });
      if (!alreadyExists) {
        appState.currentView?.push(movie);
        ("appState.CurrentView updated");
        appState.currentView;
      }
    } catch {
      throw new Error("movie already displayed");
    }
  });
};
