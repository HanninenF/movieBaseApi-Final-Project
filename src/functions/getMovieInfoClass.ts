import { AllTypes } from "../types/types";
import * as Utils from "../utils/index";

export const getMovieInfoClass = (
  title: string,
  className: AllTypes.ClassName
): string[] => {
  const movieInfoClasses: AllTypes.MovieInfoClasses = {
    titleDivClass: ["titleDiv", Utils.getSanitizedString(title)],
    titleClass: ["titleH1", Utils.getSanitizedString(title)],
    heroClass: ["hero", Utils.getSanitizedString(title)],
    runtimeClass: ["runtimeH3", Utils.getSanitizedString(title)],
    releasedDivClass: ["releasedDiv", Utils.getSanitizedString(title)],
    releasedClass: ["release", Utils.getSanitizedString(title)],
    genreClass: ["genre", Utils.getSanitizedString(title)],
    posterDivClass: ["posterDiv", Utils.getSanitizedString(title)],
    posterClass: ["poster", Utils.getSanitizedString(title)],
    plotDivClass: ["plotDiv", Utils.getSanitizedString(title)],
    plotClass: ["plot", Utils.getSanitizedString(title)],
    infoDivClass: ["infoDiv", Utils.getSanitizedString(title)],
    infoUlClass: ["infoUl", Utils.getSanitizedString(title)],
    infoLiClass: ["infoLi", Utils.getSanitizedString(title)],
    gradesDivClass: ["gradesDiv", Utils.getSanitizedString(title)],
    metaGradeClass: ["metaGrade", Utils.getSanitizedString(title)],
    tomatoGradeClass: ["tomatoGrade", Utils.getSanitizedString(title)],
    imdbGradeClass: ["imdbGrade", Utils.getSanitizedString(title)],
  };
  return movieInfoClasses[className];
};
