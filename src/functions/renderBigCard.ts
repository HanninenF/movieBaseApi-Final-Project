import { AllTypes } from "../types/types";
import { AllDomEl } from "../utils/AllDomEl";
import * as View from "../components/View/viewIndex/viewIndex";
import * as Utils from "../utils/index";

export const renderBigCard = (currentView: AllTypes.Movie) => {
  if (!AllDomEl.viewContainer) {
    console.error("AllDomEl.viewContainer element not found in DOM");
    return;
  }

  AllDomEl.viewContainer.innerHTML = "";

  AllDomEl.viewContainer.appendChild(View.createBigCard());
  const bigCard = document.querySelector(".bigCard") as HTMLDivElement;

  bigCard.appendChild(View.createTitleDiv());
  const titleDiv = document.querySelector(".titleDiv") as HTMLDivElement;

  const titleClass = ["titleH1", Utils.getSanitizedString(currentView.Title)];
  //append
  titleDiv.append(
    View.createMovieInfoElement(titleClass, "h1", currentView.Title),
    View.createMovieInfoElement(titleClass, "img", currentView.Poster)
  );
};

//TODO: gör om miniCardContainer till en viewContainer
