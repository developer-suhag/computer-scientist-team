import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import Hero from "../Hero/Hero";

const Header = () => {
  return (
    <div>
      {/* header section  */}
      <header className="header-section">
        {/* nav section  */}
        <div className="top-header">
          <div className="container menu">
            <img className="logo" src={logo} alt="" />
            <nav className="nav-bar">
              <a href="/home">Home</a>
              <a href="/team">Team</a>
              <a href="/about">About us</a>
              <a href="/contact">Contact us</a>
            </nav>
          </div>
        </div>
        {/* hero section  */}
        <Hero></Hero>
      </header>
    </div>
  );
};

export default Header;
