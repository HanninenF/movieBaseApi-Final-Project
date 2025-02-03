import { AllTypes } from "../types/types";
import { appState } from "./state";

export const setAllMovies = (newMovies: AllTypes.Search[]): void => {
  newMovies.forEach((movie) => {
    try {
      const alreadyExists = appState.AllMovies.some((existingMovie) => {
        return existingMovie.imdbID === movie.imdbID;
      });
      if (!alreadyExists) {
        appState.AllMovies?.push(movie);
        ("appState.AllMovies updated");
        appState.AllMovies;
      }
    } catch {
      throw new Error("movie already exists");
    }
  });
};
