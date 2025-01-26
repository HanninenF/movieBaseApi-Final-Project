import { AllTypes } from "../types/types";
import { AllDomEl } from "../utils/AllDomEl";
import * as View from "../components/View/MiniCard/miniCardIndex/miniCardIndex";
export const renderMiniCard = (currentView: AllTypes.Search[]) => {
  console.log("AllDomEl.viewContainer= ", AllDomEl.viewContainer);
  if (!AllDomEl.viewContainer) {
    console.error("AllDomEl.viewContainer element not found in DOM");
    return;
  }

  //rensa all content i view
  AllDomEl.viewContainer.innerHTML = "";
  console.log("clean viewContainer");

  //appenda alla filmer i State.currentView
  currentView.forEach((movie) => {
    if (!("Runtime" in movie)) {
      console.log(movie.Title);

      //TODO: gör samma på BigCard
      //miniCard
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
      const movieInfoListData: AllTypes.MoeInfoListData = {
        year: movie.Year,
        type: movie.Type,
      };

      //ListElements
      for (const key in movieInfoListData) {
        const listItemElement = View.createMovieInfoListItem(
          movie,
          movieInfoListData,
          key
        );
        movieUl.appendChild(listItemElement);
      }
    } else {
      console.log(`${movie.Runtime} is of type Movie`);
    }
  });
};
