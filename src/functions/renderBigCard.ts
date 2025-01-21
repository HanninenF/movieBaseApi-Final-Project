import { AllTypes } from "../types/types";
import { AllDomEl } from "../utils/AllDomEl";
import * as BackArrow from "../components/BackArrow/index";

export const renderBigCard = (currentView: AllTypes.Search[]) => {
  if (!AllDomEl.viewContainer) {
    console.error("AllDomEl.viewContainer element not found in DOM");
    return;
  }

  AllDomEl.viewContainer.innerHTML = "";

  AllDomEl.viewContainer.appendChild(BackArrow.createBackArrowContainer());
  const backArrowContainer = document.querySelector(
    ".backArrowContainer"
  ) as HTMLDivElement;
  backArrowContainer.appendChild(BackArrow.createBackArrow());

  const backArrow = document.querySelector(".backArrow") as HTMLDivElement;
  console.log("backArrow= ", backArrow);
  backArrowContainer.appendChild(backArrow);
};

//TODO: gör om miniCardContainer till en viewContainer
