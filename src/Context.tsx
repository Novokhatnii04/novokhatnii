import React, { createContext, useState } from "react";
import { IFilmData } from "./pages/QuizStepThird/QuizThird";

interface AppContextType {
  activeBtn: number | null;
  setCurrentIdBtnHandler: (id: number) => void;
  headerProgress: number;
  setHeaderProgresHandler: (percent: number) => void;
  filmsData: IFilmData | null;
  setFilmDataHandler: (data: IFilmData | null) => void;
  page: number;
  setCurrentPageHandler: (id: number) => void;
}

export const AppContext = createContext<AppContextType>({
  activeBtn: null,
  setCurrentIdBtnHandler: () => {},
  headerProgress: 30,
  setHeaderProgresHandler: () => {},
  filmsData: null,
  setFilmDataHandler: () => {},
  page: 0,
  setCurrentPageHandler: () => {},
});

const Context = (props: any) => {

  // Active button
  const storedActiveButton = localStorage.getItem("activeButton");
  const initialActiveBtn = storedActiveButton
    ? parseInt(storedActiveButton, 10)
    : null;
  const [activeBtn, setActiveBtn] = useState<number | null>(initialActiveBtn);

  const setCurrentIdBtnHandler = (id: number) => {
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
