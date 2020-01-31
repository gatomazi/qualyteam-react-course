import React from "react";
import logo from "../logo.png";

const Navbar = () => (
  <nav className="navbar">
    <figure className="navbar--logo-container">
      <img src={logo} alt="Uma imagem impressionante" />
    </figure>
    <div className="navbar--center-container">
      <input role="search" placeholder="Procure uma receita" aria-labelledby="search"/>
    </div>
    <div className="navbar--right-container">
        {/* não use o link com <a> use o do react-router-dom */}
        <a to="/food/create" className="button--plus">
          +
        </a>
    </div>
  </nav>
);

export { Navbar };