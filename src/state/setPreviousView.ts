import { AllTypes } from "../types/types";
import { appState } from "./state";

export const setPreviousView = (newMovies: AllTypes.Search[]): void => {
  newMovies.forEach((movie) => {
    try {
      const alreadyExists = appState.previousView.some((existingMovie) => {
        return existingMovie.imdbID === movie.imdbID;
      });
      if (!alreadyExists) {
        appState.previousView?.push(movie);
        ("appState.PreviousView updated");
        appState.previousView;
      }
    } catch {
      throw new Error("movie already displayed");
    }
  });
};
