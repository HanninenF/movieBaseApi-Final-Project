import { AllTypes } from "../types/types";

export const appState = {
  AllMovies: [] as AllTypes.Search[],
  currentView: [] as AllTypes.Search[],
  previousViews: [] as AllTypes.Search[][],
  futureViews: [] as AllTypes.Search[][],
  lastSearch: [] as AllTypes.Search[][],
  hasErrorMessage: false as AllTypes.ErrorMessage,
};
