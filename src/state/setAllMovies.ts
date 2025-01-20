import { AllTypes } from "../types/types";
import { appState } from "./state";

export const setAllMovies = (newMovies: AllTypes.Search[]): void => {
  newMovies.forEach((movie) => {
    try {
      const alreadyExists = appState.allMovies.some((existingMovie) => {
        return existingMovie.imdbID === movie.imdbID;
      });
      if (!alreadyExists) {
        appState.allMovies?.push(movie);
        console.log("appState.AllMovies updated");
        console.log(appState.allMovies);
      }
    } catch {
      throw new Error("movie already exists");
    }
  });
};
