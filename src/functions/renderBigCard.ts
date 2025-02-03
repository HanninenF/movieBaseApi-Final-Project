import { AllTypes } from "../types/types";
import { AllDomEl } from "../utils/AllDomEl";
import * as View from "../components/View/BigCard/bigCardIndex/bigCardIndex";
import * as Functions from "./functionsIndex/functionsIndex";

export const renderBigCard = (currentView: AllTypes.Movie) => {
  if (!AllDomEl.viewContainer) {
    console.error("AllDomEl.viewContainer element not found in DOM");
    return;
  }

  //rensa contentvyn
  AllDomEl.viewContainer.innerHTML = "";

  //bigCard
  AllDomEl.viewContainer.appendChild(View.createBigCard(currentView));
  const bigCard = document.querySelector(".bigCard") as HTMLDivElement;

  //titleDiv som ska innehålla hero
  bigCard.appendChild(
    View.createHeroContainer(
      Functions.getMovieInfoClass(currentView.Title, "titleDivClass"),
      "div",
      currentView.Poster
    )
  );
  const titleDiv = document.querySelector(".titleDiv") as HTMLDivElement;

  //title, hero, runtime
  const title = View.createTitle(currentView);
  if (title.subtitleElement) {
    const titleTextH1 = title.splitTitleParts.firstPart;
    const titleTextSpan = title.splitTitleParts.secondPart;
    const titleH1Element = title.titleElement;
    titleH1Element.textContent = titleTextH1;
    const titleSpanElement = title.subtitleElement;
    titleSpanElement.textContent = titleTextSpan;
    titleSpanElement.id = "titleSpanElementWithColonSplit";

    titleDiv.appendChild(titleH1Element);

    titleH1Element.appendChild(titleSpanElement);
  } else {
    const titleTextH1 = title.splitTitleParts.firstPart;
    const titleH1Element = title.titleElement;
    titleH1Element.textContent = titleTextH1;
    titleDiv.appendChild(titleH1Element);
  }
  titleDiv.append(
    View.createHero(currentView),
    View.createRuntime(currentView)
  );

  //releasedDiv
  bigCard.appendChild(View.createReleasedDiv());
  const releasedDiv = document.querySelector(".releasedDiv") as HTMLDivElement;

  //released, genre
  releasedDiv.append(
    View.createReleased(currentView),
    View.createGenre(currentView)
  );
  //posterDiv
  bigCard.appendChild(View.createPosterDiv());
  const posterDiv = document.querySelector(".posterDiv") as HTMLDivElement;

  //poster
  posterDiv.appendChild(View.createPoster(currentView));

  //plotDiv
  posterDiv.appendChild(View.createPlotDiv());
  const plotDiv = document.querySelector(".plotDiv") as HTMLDivElement;

  //plot, ulEl, li
  plotDiv.append(
    View.createPlot(currentView),
    plotDiv.appendChild(View.createMovieInfoUl())
  );

  const movieUl = document.querySelector(".infoUl");

  //listElement som används för dynamisk render av övrig info
  const movieInfoListData: AllTypes.MoeInfoListData = {
    Director: currentView.Director,
    Writer: currentView.Writer,
    Actors: currentView.Actors,
    BoxOffice: currentView.BoxOffice,
    Rated: currentView.Rated,
  };

  //Listdata
  if (movieUl) {
    for (const key in movieInfoListData) {
      const listItemElement = View.createMovieInfoListItem(
        currentView,
        movieInfoListData,
        key
      );
      listItemElement.id += `-${key}`;
      movieUl.appendChild(listItemElement);
    }
  }
};

//TODO: centralisera och återanvänd komponenter som Title istället för att göra varsin för miniCard och BigCard
//TODO: om N/A Runtime ska vara tom
//TODO: om BoxOffice: undefined ska vara tom
