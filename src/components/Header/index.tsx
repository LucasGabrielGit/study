import React from "react";

import backIcon from "../../assets/icons/back.svg";
import logo from "../../assets/logo.png";
import "./styles.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="page-header">
        <div className="page-header-content">
          <Link to="/">
            <img src={backIcon} alt="Voltar"/>
          </Link>
          <img src={logo} alt="Logo"/>
        </div>
      </header>
    </div>
  );
};

export default Header;
