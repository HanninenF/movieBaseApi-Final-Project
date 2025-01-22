import { AllTypes } from "../types/types";
import { AllDomEl } from "../utils/AllDomEl";
import * as View from "../components/View/viewIndex/viewIndex";
import * as Functions from "./index";

export const renderBigCard = (currentView: AllTypes.Movie) => {
  if (!AllDomEl.viewContainer) {
    console.error("AllDomEl.viewContainer element not found in DOM");
    return;
  }

  //rensa vyn med content
  AllDomEl.viewContainer.innerHTML = "";

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
      Functions.getMovieInfoClass(currentView.Title, "runtimeClass"),
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
  posterDiv.append(
    View.createMovieInfoElement(
      Functions.getMovieInfoClass(currentView.Title, "posterClass"),
      "img",
      currentView.Poster
    )
  );
};

//TODO: gör om miniCardContainer till en viewContainer
