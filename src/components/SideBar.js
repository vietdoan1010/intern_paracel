import React from "react";
import "../CSS/sidebar.css";
import { NavLink } from "react-router-dom";

import userImage from "../assert/user.png";
import noteImage from "../assert/note.png";
import giftImage from "../assert/gift.png";
import lifeBuoyImage from "../assert/life-buoy.png";

const SideBar = (props) => {


  return (
    <nav className={`sidebar ${props.cbd ? "" : "sidebar--show"}`}>
      <ul className="sidebar__list">
        <NavLink to="/user">
          <li className="sidebar__item sidebar__item--main">
            <img src={userImage} alt="" className="sidebar__icon" />
            <p className="sidebar__title">User</p>
          </li>
        </NavLink>
        <NavLink to="/topup">
          <li className="sidebar__item">
            <img src={noteImage} alt="" className="sidebar__icon" />
            <p className="sidebar__title">Top up</p>
          </li>
        </NavLink>
        <NavLink to="/transferpoint">
          <li className="sidebar__item sidebar__item--main">
            <img src={noteImage} alt="" className="sidebar__icon" />
            <p className="sidebar__title">Transfer Point</p>
          </li>
        </NavLink>
        <NavLink to="/reward">
          <li className="sidebar__item sidebar__item--main">
            <img src={giftImage} alt="" className="sidebar__icon" />
            <p className="sidebar__title ">Reward</p>
          </li>
        </NavLink>
        <NavLink to="/notification">
          <li className="sidebar__item">
            <img src={lifeBuoyImage} alt="" className="sidebar__icon" />
            <p className="sidebar__title">Notification</p>
          </li>
        </NavLink>
        <NavLink to="/news">
          <li className="sidebar__item">
            <img src={lifeBuoyImage} alt="" className="sidebar__icon" />
            <p className="sidebar__title">News</p>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default SideBar;
