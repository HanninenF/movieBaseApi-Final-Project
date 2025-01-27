export const extractTitleParts = (
  textContent: string
): { firstPart: string; secondPart: string } => {
  //TODO: byt namn till extractTitleParts
  if (textContent.includes(":")) {
    const [beforeColon, afterColon] = textContent.split(":", 2);

    return { firstPart: `${beforeColon}:`, secondPart: afterColon.trim() };
  }
  return { firstPart: textContent, secondPart: "" };
};
