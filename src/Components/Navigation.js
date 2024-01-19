import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { animated, useTransition } from "react-spring";
import { Outlet } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(prev => !prev);

  const maskTransitions = useTransition(showMenu, {
    from: { opacity: 0 },
    enter: { opacity: 0.5 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(showMenu, {
    from: { transform: "translateX(-100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(-100%)" },
  });

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
      </span>

      <Outlet />

      {menuTransitions((styles, item) => item && (
        <animated.div
          style={styles}
          className="fixed bg-white top-0 left-0 w-4/5 h-full shadow z-50 p-5"
        >
          <NavigationMenu closeMenu={toggleMenu} />
        </animated.div>
      ))}

      {maskTransitions((styles, item) => item && (
        <animated.div
          style={styles}
          className="fixed top-0 left-0 w-full h-full bg-black z-40"
          onClick={toggleMenu}
        ></animated.div>
      ))}
    </nav>
  );
}

export default Navigation;
