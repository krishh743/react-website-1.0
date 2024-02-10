import React from "react";

const Header = () => {
  return (
    <header className="landing-header">
      <div className="header-text">ZEBRALEARN</div>
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
