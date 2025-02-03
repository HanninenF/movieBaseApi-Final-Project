export const createHeroContainer = <T extends keyof HTMLElementTagNameMap>(
  className: string[],
  elementTag: T,
  movieInfo?: string
): HTMLElementTagNameMap[T] => {
  //TODO: ändra namn till createHeroBackground
  const element = document.createElement(elementTag);
  className.forEach((classname) => {
    element.classList.add(classname);
  });
  if (movieInfo) {
    if (elementTag === "img" && element instanceof HTMLImageElement) {
      element.src = movieInfo;
    } else if (
      elementTag === "div" &&
      element instanceof HTMLDivElement &&
      element.classList.contains("titleDiv")
    ) {
      element.style.backgroundImage = `url(${movieInfo})`;

      element.style.backgroundSize = "cover";
      element.style.backgroundPositionY = "-135px";
      element.style.backgroundRepeat = "no-repeat";
    } else {
      element.textContent = movieInfo;
    }
  }
  return element;
};
