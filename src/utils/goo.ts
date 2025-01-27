export const goo = (textContent: string) => {
  if (textContent.includes(":")) {
    const [beforeColon, afterColon] = textContent.split(":", 2);

    return { firstPart: `${beforeColon}:`, secondPart: afterColon.trim() };
  }
  return { firstPart: textContent, secondPart: "" };
};
