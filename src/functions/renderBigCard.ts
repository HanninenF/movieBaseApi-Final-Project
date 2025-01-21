import { AllTypes } from "../types/types";
import { AllDomEl } from "../utils/AllDomEl";
import * as BackArrow from "../components/BackArrow/index";

export const renderBigCard = (currentView: AllTypes.Search[]) => {
  if (!AllDomEl.viewContainer) {
    console.error("AllDomEl.viewContainer element not found in DOM");
    return;
  }

  AllDomEl.viewContainer.innerHTML = "";
};

//TODO: gör om miniCardContainer till en viewContainer
