import DramaImg from "../../assets/Images/QuizStepFirst/Genres/Drama.png";
import ActionImg from "../../assets/Images/QuizStepFirst/Genres/Action.png";
import ComedyImg from "../../assets/Images/QuizStepFirst/Genres/Comedy.png";
import ScienceImg from "../../assets/Images/QuizStepFirst/Genres/Science.png";
import ThrillerImg from "../../assets/Images/QuizStepFirst/Genres/Thriller.png";

interface IQuizButtons<T> {
  janre: T;
  img: T;
  id: number;
}

export const QuizFirstButtons: IQuizButtons<string>[] = [
  {
    janre: "Drama",
    img: DramaImg,
    id: 0,
  },
  {
    janre: "Comedy",
    img: ComedyImg,
    id: 1,
  },
  {
    janre: "Action",
    img: ActionImg,
    id: 2,
  },
  {
    janre: "Thriller",
    img: ThrillerImg,
    id: 3,
  },
  {
    janre: "Science fiction",
    img: ScienceImg,
    id: 4,
  },
];
