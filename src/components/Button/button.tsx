import React, { FC } from "react";
import "./button.css";

interface IProps {
  text: string;
  isActive: boolean;
}

const Button: FC<IProps> = ({ text, isActive }) => {
  return (
    <button className={`${!isActive ? "button__content_notactive" :"button__content_active"}`}>
      <h1>{text}</h1>
    </button>
  );
};

export default Button;
