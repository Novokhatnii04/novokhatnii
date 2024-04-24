export interface IFilm {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface IFilmData {
  Response: string;
  Search: IFilm[];
  totalResults: string;
}

export interface AppContextType {
  activeBtn: number | null;
  setCurrentIdBtnHandler: (id: number | null) => void;
  headerProgress: number | null;
  setHeaderProgresHandler: (percent: number) => void;
  filmsData: IFilmData | null;
  setFilmDataHandler: (data: IFilmData | null) => void;
  page: number;
  setCurrentPageHandler: (id: number) => void;
}
