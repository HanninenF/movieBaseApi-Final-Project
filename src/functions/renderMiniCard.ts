import { AllTypes } from "../types/types";
import { AllDomEl } from "../utils/AllDomEl";
import * as View from "../components/View/MiniCard/miniCardIndex/miniCardIndex";
export const renderMiniCard = (
  currentView: AllTypes.Search[] | AllTypes.Movie
) => {
  if (!AllDomEl.viewContainer) {
    console.error("AllDomEl.viewContainer element not found in DOM");
    return;
  }

  const moviesArray: AllTypes.Search[] = Array.isArray(currentView)
    ? currentView.map((movie) => ({
        Title: movie.Title,
        Year: movie.Year,
        imdbID: movie.imdbID,
        Type: movie.Type,
        Poster: movie.Poster,
      }))
    : [
        {
          Title: currentView.Title,
          Year: currentView.Year,
          imdbID: currentView.imdbID,
          Type: currentView.Type,
          Poster: currentView.Poster,
        },
      ];

  //rensa all content i view
  AllDomEl.viewContainer.innerHTML = "";
  //appenda alla filmer i State.currentView
  moviesArray.forEach((movie) => {
    if (!("Runtime" in movie)) {
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
        listItemElement.id += `-${key}`;
        movieUl.appendChild(listItemElement);
      }
    } else {
    }
  });
};
