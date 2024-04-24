import React, { FC, useContext, useEffect } from "react";
import "./QuizFirst.css";
import { QuizFirstButtons } from "./QuizFirstBtns";
import Button from "../../components/Button/button";
import { AppContext } from "../../Context";
import { Link, useNavigate } from "react-router-dom";

const QuizStep1: FC = () => {
  const {
    activeBtn,
    setCurrentIdBtnHandler,
    setHeaderProgresHandler,
    setCurrentPageHandler,
  }: any = useContext(AppContext);
  const navigate = useNavigate();

  const isActiveButton = (index: number): boolean => {
    return index === activeBtn;
  };

  const isValidToNavigate = () => {
    if (activeBtn !== null) {
      navigate("/secondstep");
    } else {
      return;
    }
  };

  useEffect(() => {
    setCurrentPageHandler(1);

    if (activeBtn === null) {
      setHeaderProgresHandler(0);
    } else {
      setHeaderProgresHandler(33);
    }
  }, [activeBtn]);

  return (
    <section className="quizfirst__wrapper animate">
      <div className="quizfirst__content">
        <ul className="quizfirst__btns_list">
          <h1 className="quizfirst__title">Your favorite movie genre?</h1>
          {QuizFirstButtons.map((el, index) => {
            return (
              <li key={index}>
                <button
                  className={`quizfirst__btn_wrapper ${
                    isActiveButton(el.id) ? "quizfirst__btn_active" : ""
                  }`}
                  onClick={() => {
                    setCurrentIdBtnHandler(el.id);
                  }}
                >
                  <img src={el.img} style={{ width: "24px", height: "24px" }} />
                  <h4 className="quizfirst__btn_title">{el.janre}</h4>
                  <div
                    className={
                      isActiveButton(el.id)
                        ? "quizfirst__btn_tick--active"
                        : "quizfirst__btn_tick--notactive"
                    }
                  />
                </button>
              </li>
            );
          })}
        </ul>
        <div onClick={() => isValidToNavigate()}>
          <Button text="Continue" isActive={activeBtn !== null} />
        </div>
      </div>
    </section>
  );
};

export default QuizStep1;
