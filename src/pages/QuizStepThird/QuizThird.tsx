import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/Context";
import "./QuizThird.css";
import Button from "../../components/Button/button";
import NotFoundPng from "../../assets/Images/QuizStepThird/notfound.png";
import { IFilmData , IFilm } from '../../Context/ContextModules'

const QuizThird = () => {
  const {
    filmsData,
    setHeaderProgresHandler,
    setCurrentPageHandler,
  }: {
    filmsData: IFilmData | null;
    setHeaderProgresHandler: (percent: number) => void;
    setCurrentPageHandler: (id: number) => void;
  } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    setHeaderProgresHandler(100);
    setCurrentPageHandler(3);

    if (filmsData === null) {
      navigate("/secondstep");
    }
  }, []);

  if (filmsData?.Response === "False") {
    return (
      <div className="quizthird__notfound_wrapper">
        <img
          src={NotFoundPng}
          alt="NotFoundPng"
          className="quizthird__notfound_png"
        />
        <h1 className="quizthird__notfound_title">Oops, no movie found</h1>
      </div>
    );
  } else {
    return (
      <section className="quizthird__wrapper animate">
        <ul className="quizthird__content">
          {filmsData?.Search.map((el: IFilm) => (
            <li key={el.imdbID} className="quizthird__film_item">
              <img
                src={el.Poster}
                alt={el.Title}
                className="quizthird__poster"
              />
              <h2 className="quizthird__poster_title">{el.Title}</h2>
              <p className="quizthird__poster_year">{el.Year}</p>
            </li>
          ))}
        </ul>

        <div className="quiz" onClick={() => navigate("/")}>
          <Button text="Complete" isActive={true} />
        </div>
      </section>
    );
  }
};

export default QuizThird;
