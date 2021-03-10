import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const MobileSideMenu = ({ closeSideMenu }) => {
  return (
    <div className="mobile-side-menu">
      <div className="mobile-side-dark"></div>
      <div className="mobile-side-menu-light">
        <div className="mobile-side-menu-top-close">
          <FontAwesomeIcon icon={faTimes} size="1x" onClick={closeSideMenu} />
        </div>
        <nav>
          <ul>
            <Link to="/men">
              <li>MĘŻCZYŹNI</li>
            </Link>
            <Link to="/women">
              <li>KOBIETY</li>
            </Link>
            <Link to="/accesories">
              <li>AKCESORIA</li>
            </Link>
            <Link to="/contact">
              <li>KONTAKT</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileSideMenu;
