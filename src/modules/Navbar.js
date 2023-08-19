import React from "react";
import { RiAccountCircleFill } from 'react-icons/ri'; // Importing react Icons from (https://react-icons.github.io/react-icons)
import { TfiShoppingCart } from 'react-icons/tfi';
import { RxHamburgerMenu } from 'react-icons/rx';
import "./Navbar.css";
import { useState } from 'react';


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* Logo Part */}
        <div className="logo">
          <h2>
            <span>R</span>ent
            <span>A</span>nd
            <span>B</span>orrow
          </h2>
        </div>

        {/* Menu Part */}
        <div className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">HowItWorks</a>
            </li>
            <li>
              <a href="#">Search</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a className = "submit-link" href="#">+ Submit Listings</a>
            </li>
          </ul>
        </div>

        {/* Icons */}
        <div className="icons-media">
            <ul className="icons-media-desktop">
                <li>
                    <a href="" target="">
                        <RiAccountCircleFill/>
                    </a>
                </li>
                <li>
                    <a href="" target="">
                        <TfiShoppingCart/>
                    </a>
                </li>
            </ul>
            <div className="hamburger-menu">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    <RxHamburgerMenu/>
                </a>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
