import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div>
      <header className="header-section">
        <div className="top-header">
          <div className="container menu">
            <img src={logo} alt="" />
            <nav className="nav-bar">
              <a href="/home">Home</a>
              <a href="/team">Team</a>
              <a href="/about">About us</a>
              <a href="/contact">Contact us</a>
            </nav>
          </div>
        </div>
        <h2>Build a team of computer scientists</h2>
      </header>
    </div>
  );
};

export default Header;
