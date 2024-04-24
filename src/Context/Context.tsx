import { createContext, useState } from "react";

import { IFilmData, AppContextType } from "./ContextModules";

export const AppContext = createContext<AppContextType>({
  activeBtn: null,
  setCurrentIdBtnHandler: () => {},
  headerProgress: null,
  setHeaderProgresHandler: () => {},
  filmsData: null,
  setFilmDataHandler: () => {},
  page: 0,
  setCurrentPageHandler: () => {},
});

const Context = (props: React.PropsWithChildren) => {
  // Active button
  const storedActiveButton = JSON.parse(localStorage.getItem("activeButton") as string);
  const initialActiveBtn =
    typeof storedActiveButton === "number" ? +storedActiveButton : null;
  const [activeBtn, setActiveBtn] = useState<number | null>(initialActiveBtn);

  const setCurrentIdBtnHandler = (id: number | null) => {
    try {
      setActiveBtn(id);
      localStorage.setItem("activeButton", JSON.stringify(id));
    } catch (e) {
      console.log(e);
    }
  };

  // Progress in Header
  const [headerProgress, setHeaderProgress] = useState<number>(30);

  const setHeaderProgresHandler = (percent: number) => {
    try {
      setHeaderProgress(percent);
    } catch (e) {
      console.log(e);
    }
  };

  // Films data
  const [filmsData, setFilmsData] = useState<IFilmData | null>(null);

  const setFilmDataHandler = (data: IFilmData | null) => {
    try {
      setFilmsData(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  // Active page
  const [page, setPage] = useState(0);

  const setCurrentPageHandler = (id: number) => {
    setPage(id);
  };

  const value: AppContextType = {
    activeBtn,
    setCurrentIdBtnHandler,
    headerProgress,
    setHeaderProgresHandler,
    filmsData,
    setFilmDataHandler,
    page,
    setCurrentPageHandler,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default Context;
