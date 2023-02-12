import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "../CSS/header.css";
import image1 from "../assert/image1.png";
import image4 from "../assert/image4.png";
import menu1 from "../assert/menu1.png";

const Header = (props) => {
  return (
    <header className="header wrapper">
      <div className="header__navbar">
        <Link to="/">
          <div className="header__logo">
            <img src={image1} alt="" className="header__image" />
            <h2 className="header__title">Paracel Loyalty</h2>
          </div>
        </Link>
        <div className="header__icon-menu" onClick={props.abc}>
          <img src={menu1} alt="iconMenu" />
        </div>
      </div>
      <div className="header__infor">
        <img src={image4} alt="" className="header__avatar" />
        <div className="header__user">
          <FontAwesomeIcon
            className="header__icon-arrow"
            icon={faAngleDown}
          ></FontAwesomeIcon>
          <p className="header__username">Hà Phương</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
