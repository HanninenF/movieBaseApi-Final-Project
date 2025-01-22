export const getSanitizedString = (stringInput: string): string => {
  return stringInput.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-_]/g, "");
};
