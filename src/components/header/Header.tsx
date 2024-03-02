import React from "react";
import Button from "../buttons/Button";
// import {useNavigate} from "react-router-dom";


const Header = () => {
  // const history = useNavigate();

  return (
      <header className="landing-header px-4">
          <div className="header-text">
              <img src={'/images/zebra_learn_logo.webp'} alt=""/>
          </div>
          <div className="header-login-links">
        
              <div>
                  <Button  className="header-buttons fw-medium btn bsb-btn-2xl btn-outline-light" >Log in</Button>
              </div>
              <div>
                  <Button variant="primary" className="header-buttons fw-medium btn bsb-btn-2xl btn-outline-light" >Start
                      for free</Button>
              </div>
          </div>
      </header>
  );
};

export default Header;


