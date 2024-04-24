import { AppContext } from "../../Context";
import { useContext, useEffect, useState } from "react";
import "./QuizSecond.css";
import Button from "../../components/Button/button";
import { useNavigate } from "react-router-dom";

const QuizSecond = () => {
  const {
    setHeaderProgresHandler,
    setFilmDataHandler,
    setCurrentPageHandler,
  }: any = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");
  const [isInputValidate, setInputValidate] = useState(false);
  const [isTouchableInput, setTouchableInput] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setHeaderProgresHandler(66);
    setCurrentPageHandler(2);
  }, []);

  const validateValueHandler = (value: string) => {
    setInputValue(value);
    if (/[%^&$*()]/.test(value) || value.length === 0) {
      setInputValidate(false);
    } else {
      setInputValidate(true);
    }
  };

  const getFilmsDataHandler = async () => {
    const API_KEY = "2c5fd317";
    validateValueHandler(inputValue);

    if (isInputValidate) {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${inputValue}&apikey=${API_KEY}`
        );
        const data = await response.json();
        await setFilmDataHandler(data);

        navigate("/thirdstep");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <section className="quizsecond__wrapper animate">
      <div className="quizsecond__content">
        <h1 className="quizsecond__title">Enter movie title</h1>

        <form className="quizsecond__form">
          <input
            type="text"
            placeholder="Movie title here"
            className="quizsecond__input"
            style={
              !isInputValidate && isTouchableInput
                ? { border: "2px solid rgba(220, 0, 0, 1)" }
                : {}
            }
            onBlur={() => setTouchableInput(true)}
            onChange={(el) => validateValueHandler(el.target.value)}
          />
          {!isInputValidate && isTouchableInput && (
            <span className="quizsecond__error">Error text!</span>
          )}
        </form>
      </div>

      <div onClick={() => getFilmsDataHandler()}>
        <Button text="Continue" isActive={isInputValidate} />
      </div>
    </section>
  );
};

export default QuizSecond;
