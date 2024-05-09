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
        <ul className="nav-Links">
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
          <NavLink
            to="/register"
            className="register"
            activeClassName="active"
            onClick={closeMobileMenu}
          >
            <li>REGISTER</li>
          </NavLink>
          <NavLink
            to="/login"
            className="login"
            activeClassName="active"
            onClick={closeMobileMenu}
          >
            <li>LOGIN</li>
          </NavLink>
        </ul>
        <ul className={`nav-links-mobile ${mobile ? "active" : ""}`}>
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
          <NavLink
            to="/register"
            className="about"
            activeClassName="active"
            onClick={closeMobileMenu}
          >
            <li>REGISTER</li>
          </NavLink>
          <NavLink
            to="/login"
            className="about"
            activeClassName="active"
            onClick={closeMobileMenu}
          >
            <li>LOGIN</li>
          </NavLink>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
          {mobile ? <Close /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
