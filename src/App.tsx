import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import QuizStepFirst from "./pages/QuizStepFirst/QuizFirst";
import QuizStepSecond from "./pages/QuizStepSecond/QuizSecond";
import QuizStepThird from "./pages/QuizStepThird/QuizThird";

const App = () => {
  return (
    <section className="global__wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<QuizStepFirst />} />
        <Route path="/secondstep" element={<QuizStepSecond />} />
        <Route path="/thirdstep" element={<QuizStepThird />} />
        <Route element={<QuizStepFirst />} />
      </Routes>
    </section>
  );
};

export default App;
