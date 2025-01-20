import { appState } from "../state";
import { AllTypes } from "../types/types";

export const renderMiniCard = (currentView: AllTypes.Search[]) => {
  const miniCardContainer = document.querySelector(
    ".miniCardContainer"
  ) as HTMLElement;

  console.log("miniCardContainer= ", miniCardContainer);
  if (!miniCardContainer) {
    console.error("miniCardContainer element not found in DOM");
    return;
  }

  miniCardContainer.innerHTML = "";

  currentView.forEach((movie) => {
    console.log(movie.Title);

    const miniCard = document.createElement("button");
    miniCard.classList.add("miniCard");
    miniCard.setAttribute("data-id", movie.imdbID);
    miniCard.setAttribute("aria-label", `view details about ${movie.Title}`);
    miniCard.type = "button";
    console.log("miniCard= ", miniCard);

    miniCardContainer.appendChild(miniCard);

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

  ///////////////////////////////////
  ////////////EventListener/////////
  //////////////////////////////////
  miniCardContainer.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const button = target.closest("button.miniCard");

    const movieId = button?.getAttribute("data-id");
    console.log("knapp klickad, data-id= ", movieId);
    //TODO: fetcha ny data
    //TODO: currentView

    appState.currentView = appState.allMovies.filter((movie) =>
      movie.imdbID === movieId ? movie : null
    );

    console.log(
      "appstate.currentView in miniCardContainer.eventlistener= ",
      appState.currentView
    );
  });
};
