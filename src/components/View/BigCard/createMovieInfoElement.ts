export const createMovieInfoElement = <T extends keyof HTMLElementTagNameMap>(
  className: string[],
  elementTag: T,
  movieInfo: string
): HTMLElementTagNameMap[T] => {
  const element = document.createElement(elementTag);
  className.forEach((classname) => {
    element.classList.add(classname);
  });
  if (elementTag === "img" && element instanceof HTMLImageElement) {
    element.src = movieInfo;
  } else {
    element.textContent = movieInfo;
  }
  return element;
};
