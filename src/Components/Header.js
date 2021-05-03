import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
    </header>
  );
}

export default Header;
