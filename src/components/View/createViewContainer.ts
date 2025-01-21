export const createViewContainer = (): HTMLElement => {
  const viewContainer = document.createElement("section");
  viewContainer.classList.add("viewContainer");
  return viewContainer;
};
