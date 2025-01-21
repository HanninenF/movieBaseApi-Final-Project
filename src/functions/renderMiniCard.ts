import { AllTypes } from "../types/types";
import { AllDomEl } from "../utils/AllDomEl";

export const renderMiniCard = (currentView: AllTypes.Search[]) => {
  console.log("AllDomEl.viewContainer= ", AllDomEl.viewContainer);
  if (!AllDomEl.viewContainer) {
    console.error("AllDomEl.viewContainer element not found in DOM");
    return;
  }

  AllDomEl.viewContainer.innerHTML = "";
  console.log("clean viewContainer");

  currentView.forEach((movie) => {
    console.log(movie.Title);

    const miniCard = document.createElement("button");
    miniCard.classList.add("miniCard");
    miniCard.setAttribute("data-id", movie.imdbID);
    miniCard.setAttribute("aria-label", `view details about ${movie.Title}`);
    miniCard.type = "button";
    console.log("miniCard= ", miniCard);

    AllDomEl.viewContainer.appendChild(miniCard);

    const poster = document.createElement("img");
    poster.classList.add("miniPoster");
    poster.src = movie.Poster;
    poster.loading = "lazy";
    poster.alt = "Movie Title";

    const title = document.createElement("h3");
    title.classList.add("miniTitle");
    title.textContent = movie.Title;

    miniCard.appendChild(poster);

    const movieInfoUl: AllTypes.MovieInfoUl = {
      year: movie.Year,
      type: movie.Type,
    };

    const movieInfoDiv = document.createElement("div");
    movieInfoDiv.classList.add("movieInfoDiv");
    miniCard.appendChild(movieInfoDiv);

    const movieUl = document.createElement("ul");
    movieUl.classList.add("movieInfoUl");
    movieInfoDiv.append(title, movieUl);

    for (const key in movieInfoUl) {
      const liElMovieInfo = document.createElement("li");
      liElMovieInfo.classList.add("liEl", key);
      liElMovieInfo.textContent = movieInfoUl[key as keyof typeof movieInfoUl];
      movieUl.appendChild(liElMovieInfo);
    }
  });
};
