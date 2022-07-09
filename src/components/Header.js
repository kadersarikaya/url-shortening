import React, { useState } from "react";
import menu from "../images/menu.svg";


const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="header flex">
      <ul className="flex mobile-ul">
        <div className="icon">Shortly</div>
        {isClicked && (
          <div className="menu-bar">
            <div className="menu-content">
              <div className="f">Features</div>
              <div>Pricing</div>
              <div>Resources</div>
              <div className="">
                <button className="login">Login</button>
              </div>
              <button className="register">Sign Up</button>
            </div>
          </div>
        )}
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <div className="btns">
        <button className="login">Login</button>
        <button className="register">Sign Up</button>
      </div>
      <div onClick={handleClick} className="menu">
        <img src={menu} alt="" />
      </div>
    </div>
  );
};

export default Header;
