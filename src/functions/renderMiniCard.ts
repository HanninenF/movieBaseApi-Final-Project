import { AllTypes } from "../types/types";

export const renderMiniCard = (movieInfo: AllTypes.Root) => {
  const miniCardContainer = document.querySelector(
    ".miniCardContainer"
  ) as HTMLElement;

  console.log("miniCardContainer= ", miniCardContainer);
  if (!miniCardContainer) {
    console.error("miniCardContainer element not found in DOM");
    return;
  }

  miniCardContainer.innerHTML = "";

  movieInfo.Search.forEach((movie) => {
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

    miniCard.append(poster, title);

    const movieInfoUl = {
      year: movie.Year,
      type: movie.Type,
    };
  });
};
