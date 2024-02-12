import React from "react";
import ZL_LOGO from "../../assets/zebra_learn_logo.webp";

const Header = () => {
  return (
    <header className="landing-header">
      <div className="header-text">
        <img src={ZL_LOGO} alt="" />
      </div>
      <div className="header-login-links">
        <div>
          <button className="log-in-button">Log in</button>
        </div>
        <div>
          <button className="start-free-btn">Start for free</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
