import { baseUrl } from "../main";
import { AllTypes } from "../types/types";

export const getSeriesInfoByName = async (name: string) => {
  const seriesUrl: string = baseUrl + "s=" + name + "&type=series";
  const response = await fetch(seriesUrl);
  const data = (await response.json()) as AllTypes.Root;

  console.log("seriesUrl= ", seriesUrl);

  return data;
};
