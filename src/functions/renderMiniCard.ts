import { AllTypes } from "../types/types";
import { AllDomEl } from "../utils/AllDomEl";
import * as Utils from "../utils/index";
import * as View from "../components/View/MiniCard/miniCardIndex/miniCardIndex";
export const renderMiniCard = (currentView: AllTypes.Search[]) => {
  console.log("AllDomEl.viewContainer= ", AllDomEl.viewContainer);
  if (!AllDomEl.viewContainer) {
    console.error("AllDomEl.viewContainer element not found in DOM");
    return;
  }

  AllDomEl.viewContainer.innerHTML = "";
  console.log("clean viewContainer");

  currentView.forEach((movie) => {
    if (!("Runtime" in movie)) {
      console.log(movie.Title);

      //miniCard

      //TODO: gör samma på BigCard
      AllDomEl.viewContainer.appendChild(View.createMiniCard(movie));
      const miniCard = document.querySelector(
        `#miniCard-${movie.imdbID}`
      ) as HTMLButtonElement;

      //poster
      miniCard.appendChild(View.createPoster(movie));

      const movieInfoUl: AllTypes.MovieInfoUl = {
        year: movie.Year,
        type: movie.Type,
      };

      miniCard.appendChild(View.createMovieInfoDiv(movie));
      const movieInfoDiv = document.querySelector(
        `#movieInfoDiv-${movie.imdbID}`
      ) as HTMLDivElement;

      const movieUl = document.createElement("ul");
      movieUl.classList.add("movieInfoUl");
      //title
      movieInfoDiv.append(View.createTitle(movie), movieUl);

      for (const key in movieInfoUl) {
        const liElMovieInfo = document.createElement("li");
        liElMovieInfo.classList.add("liEl", key);
        liElMovieInfo.textContent =
          movieInfoUl[key as keyof typeof movieInfoUl];
        movieUl.appendChild(liElMovieInfo);
      }
    } else {
      console.log(`${movie.Runtime} is of type Movie`);
    }
  });
};
