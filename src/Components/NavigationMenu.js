import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu({ closeMenu }) {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <div className="font-bold py-3">Next Big NFT</div>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="text-blue-500 py-3 block hover:text-blue-600 border-b"
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavigationMenu;
