export const removeErrorMessage = () => {
  const errorMessage = document.querySelector(".errorMessage");
  if (errorMessage) {
    errorMessage.remove();
  }
};
