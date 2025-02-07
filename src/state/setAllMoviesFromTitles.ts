import { AllTypes } from "../types/types";
import { appState } from "./state";

export const setAllMoviesFromTitles = (newMovies: AllTypes.Movie): void => {
  try {
    const alreadyExists = appState.AllMovies.some((existingMovie) => {
      return existingMovie.imdbID === newMovies.imdbID;
    });
    if (!alreadyExists) {
      appState.AllMovies?.push(newMovies);
      ("appState.AllMovies updated");
      appState.AllMovies;
    }
  } catch {
    throw new Error("movie already exists");
  }
};
