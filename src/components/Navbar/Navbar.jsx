import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Close, Menu } from "@mui/icons-material";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);

  const closeMobileMenu = () => {
    setMobile(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-Container">
        <h3>
          <a className="logo" href="/">
            SURE TIPS
          </a>
        </h3>
        <ul className={mobile ? "nav-links-mobile" : "nav-Links"}>
          <NavLink
            to="/"
            className="today"
            activeClassName="active"
            onClick={closeMobileMenu}
          >
            <li>TODAY</li>
          </NavLink>
          <NavLink
            to="/accumulator"
            className="accumulator"
            activeClassName="active"
            onClick={closeMobileMenu}
          >
            <li>ACCUMULATOR</li>
          </NavLink>
          <NavLink
            to="/vip"
            className="vip"
            activeClassName="active"
            onClick={closeMobileMenu}
          >
            <li>VIP TIPS</li>
          </NavLink>
          <NavLink
            to="/contact"
            className="contact"
            activeClassName="active"
            onClick={closeMobileMenu}
          >
            <li>CONTACT</li>
          </NavLink>
          <NavLink
            to="/about"
            className="about"
            activeClassName="active"
            onClick={closeMobileMenu}
          >
            <li>ABOUT</li>
          </NavLink>
        </ul>
        <div className="nav-Buttons">
          <NavLink to="register" className="register" onClick={closeMobileMenu}>
            <li>REGISTER</li>
          </NavLink>
          <NavLink to="login" className="login" onClick={closeMobileMenu}>
            <li>LOGIN</li>
          </NavLink>
        </div>
        <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
          {mobile ? <Close /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
