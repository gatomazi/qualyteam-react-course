import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";


const Navbar = ({handleSearch}) => (
  <nav className="navbar">
    <figure className="navbar--logo-container">
      <Link to="/"><img src={logo} alt="Uma imagem impressionante" /></Link>
    </figure>
    <div className="navbar--center-container">
      <input onChange={handleSearch} role="search" placeholder="Procure uma receita" aria-labelledby="search"/>
    </div>
    <div className="navbar--right-container">
        
        <Link to="/food/create" className="button--plus">
          +
        </Link>
    </div>
  </nav>
);

export { Navbar };