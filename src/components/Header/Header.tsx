import React, { FC, useContext, useEffect } from "react";
import "./Header.css";
import HeaderCloudsPng from "../../assets/Images/Header/HeaderCloud.png";
import { AppContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

interface IHeeader {
  setCurrentIdBtnHandler: (id: number | null) => void;
  headerProgress: number | null;
  page: number;
}

const Header: FC = () => {
  const { headerProgress, page, setCurrentIdBtnHandler }: IHeeader =
    useContext(AppContext);
  const navigate = useNavigate();

  const redirectToBackHandler = () => {
    switch (page) {
      case 1:
        setCurrentIdBtnHandler(null);
        localStorage.setItem("activeButton", JSON.stringify(null));
        navigate("/");
        break;
      case 2:
        navigate("/");
        break;
      case 3:
        navigate("/secondstep");
        break;
      default:
        break;
    }
  };

  return (
    <header className="header__wrapper">
      <img src={HeaderCloudsPng} className="header__clouds_png" />

      <div className="header__top_content">
        <button className="header__back_btn" onClick={redirectToBackHandler} />
        <div className="header__burger_menu">
          <h4 className="header__percent_info">{headerProgress}%</h4>
          <button className="header__burger" />
        </div>
      </div>

      <div className="header__bottom_content">
        <div className="header__progress_bar">
          <div
            className="header__progress_fill"
            style={{ width: headerProgress + "%" }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
