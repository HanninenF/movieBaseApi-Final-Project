export const getUrlParametersFromWord = (keyWord: string): string => {
  const formattedUrl = keyWord
    .split(" ")
    .map((word, index, array) => {
      const lowerCasedWord = word.charAt(0).toLowerCase() + word.slice(1);
      return index === array.length - 1
        ? lowerCasedWord
        : lowerCasedWord + "%20";
    })
    .join("");

  return formattedUrl;
};
