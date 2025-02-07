export const displayErrorMessage = (message: string) => {
  const viewContainer = document.querySelector(
    ".viewContainer"
  ) as HTMLDivElement;
  console.log("viewContainer in displayErrorMessage: ", viewContainer);
  if (!viewContainer) {
    console.warn("⚠️ viewContainer not found. Cannot display error message.");
    return;
  }

  let errorMessage = viewContainer.querySelector(
    ".errorMessage"
  ) as HTMLParagraphElement;
  console.log("errorMessage: ", errorMessage);
  if (!errorMessage) {
    viewContainer.innerHTML = "";
    errorMessage = document.createElement("p");
    errorMessage.classList.add("errorMessage");
    viewContainer.appendChild(errorMessage);
  }
  errorMessage.textContent = message;
};
