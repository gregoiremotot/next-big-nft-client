import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <header className="border-b p-3 flex items-center">
        <Link to="/" className="flex items-center">
          <img src="./logo3.gif" width="40" className="logo-img" />

          <span className="font-bold logo-text"> Next Big NFT</span>
        </Link>
        <Navigation />
      </header>
    </div>
  );
}

export default Header;
