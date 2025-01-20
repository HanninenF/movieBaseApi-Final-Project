import { AllTypes } from "../types/types";

export const appState = {
  allMovies: [] as AllTypes.Search[],
  currentView: [] as AllTypes.Search[],
  favorites: [],
  filters: {
    searchQuery: "",
    type: "All",
  },
};
