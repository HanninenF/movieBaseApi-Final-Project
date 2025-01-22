import { className, dropDownOptionsData, movieInfo } from "../data/data";
export namespace AllTypes {
  export type Root = {
    Search: Search[];
    totalResults: string;
    Response: string;
  };

  export type Search = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  };
  export type Movie = {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
  };

  export type Rating = {
    Source: string;
    Value: string;
  };

  export type MovieInfoUl = {
    year: string;
    type: string;
  };

  export type MovieInfoClasses = {
    [key: string]: string[];
    titleDivClass: string[];
    titleClass: string[];
    heroClass: string[];
    runtimeClass: string[];
    releasedDivClass: string[];
    releasedClass: string[];
    genreClass: string[];
    posterDivClass: string[];
    posterClass: string[];
    plotDivClass: string[];
    plotClass: string[];
    infoDivClass: string[];
    infoUlClass: string[];
    infoLiClass: string[];
    gradesDivClass: string[];
    metaGradeClass: string[];
    tomatoGradeClass: string[];
    imdbGradeClass: string[];
  };

  /* export type CurrentView = (AllTypes.Search | AllTypes.Movie)[]; */

  export type Category = (typeof dropDownOptionsData)[number];
  export type MovieInfo = (typeof movieInfo)[number];
  export type ClassName = (typeof className)[number];
}
