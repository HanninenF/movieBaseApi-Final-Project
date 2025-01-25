import { AllTypes } from "../types/types";
import { AllDomEl } from "../utils/AllDomEl";
import * as View from "../components/View/viewIndex/viewIndex";
import * as Functions from "./index";

export const renderBigCard = (currentView: AllTypes.Movie) => {
  if (!AllDomEl.viewContainer) {
    console.error("AllDomEl.viewContainer element not found in DOM");
    return;
  }

  //rensa contentvyn
  AllDomEl.viewContainer.innerHTML = "";

  //listElement som används för dynamisk render av övrig info
  const movieLiInfoList = {
    Director: currentView.Director,
    Writer: currentView.Writer,
    Actors: currentView.Actors,
    BoxOffice: currentView.BoxOffice,
    Rated: currentView.Rated,
  };

  //bigCard
  AllDomEl.viewContainer.appendChild(View.createBigCard());
  const bigCard = document.querySelector(".bigCard") as HTMLDivElement;

  //titleDiv
  bigCard.appendChild(View.createTitleDiv());
  const titleDiv = document.querySelector(".titleDiv") as HTMLDivElement;

  //title, hero, runtime
  titleDiv.append(
    View.createMovieInfoElement(
      Functions.getMovieInfoClass(currentView.Title, "titleClass"),
      "h1",
      currentView.Title
    ),
    View.createMovieInfoElement(
      Functions.getMovieInfoClass(currentView.Title, "posterClass"),
      "img",
      currentView.Poster
    ),
    View.createMovieInfoElement(
      [],
      "h3",
      currentView.Runtime
    )
  );
  //releasedDiv
  bigCard.appendChild(
    View.createMovieInfoElement(
      Functions.getMovieInfoClass(currentView.Title, "releasedDivClass"),
      "div"
    )
  );
  const releasedDiv = document.querySelector(".releasedDiv") as HTMLDivElement;

  //released, genre
  releasedDiv.append(
    View.createMovieInfoElement(
      Functions.getMovieInfoClass(currentView.Title, "releasedClass"),
      "h3",
      currentView.Released
    ),
    View.createMovieInfoElement(
      Functions.getMovieInfoClass(currentView.Title, "genreClass"),
      "h4",
      currentView.Genre
    )
  );
  //posterDiv
  bigCard.appendChild(
    View.createMovieInfoElement(
      Functions.getMovieInfoClass(currentView.Title, "posterDivClass"),
      "div"
    )
  );
  const posterDiv = document.querySelector(".posterDiv") as HTMLDivElement;

  //poster
  posterDiv.appendChild(
    View.createMovieInfoElement(
      Functions.getMovieInfoClass(currentView.Title, "posterClass"),
      "img",
      currentView.Poster
    )
  );

  //plotDiv
  posterDiv.appendChild(
    View.createMovieInfoElement(
      Functions.getMovieInfoClass(currentView.Title, "plotDivClass"),
      "div"
    )
  );
  const plotDiv = document.querySelector(".plotDiv") as HTMLDivElement;

  //plot, ulEl, li
  plotDiv.append(
    View.createMovieInfoElement(
      Functions.getMovieInfoClass(currentView.Title, "plotClass"),
      "p",
      currentView.Plot
    ),
    plotDiv.appendChild(
      View.createMovieInfoElement(
        Functions.getMovieInfoClass(currentView.Title, "infoUlClass"),
        "ul"
      )
    )
  );

  const ulEl = document.querySelector(".infoUl");

  //movieLiInfoList
  if (ulEl) {
    for (const key in movieLiInfoList) {
      ulEl.appendChild(
        View.createMovieInfoElement(
          Functions.getMovieInfoClass(currentView.Title, "infoLiClass"),
          "li",
          `${key}: ${movieLiInfoList[key as keyof typeof movieLiInfoList]}`
        )
      );
    }
  }
};

//TODO: gör om miniCardContainer till en viewContainer
