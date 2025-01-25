import { AllTypes } from "../types/types";
import { AllDomEl } from "../utils/AllDomEl";
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

      miniCard.appendChild(View.createMovieInfoDiv(movie));
      const movieInfoDiv = document.querySelector(
        `#movieInfoDiv-${movie.imdbID}`
      ) as HTMLDivElement;

      //title, movieUl
      movieInfoDiv.append(
        View.createTitle(movie),
        View.createMovieInfoUl(movie)
      );

      const movieUl = document.querySelector(
        `#movieInfoUl-${movie.imdbID}`
      ) as HTMLUListElement;

      //Listdata
      const movieInfoLi: AllTypes.MovieInfoUl = {
        year: movie.Year,
        type: movie.Type,
      };

      //LiElements
      for (const key in movieInfoLi) {
        const liElMovieInfo = View.movieInfoListEl(movie, movieInfoLi, key);
        movieUl.appendChild(liElMovieInfo);
      }
    } else {
      console.log(`${movie.Runtime} is of type Movie`);
    }
  });
};
