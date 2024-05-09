import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <h1 className="top-head">
        Accurate Football Predictions Make Steady Income With Our Daily Football
        tips
      </h1>
      <div className="header-buttons">
        <a href="/register">
          <button className="header-register-button">REGISTER</button>
        </a>
        <a href="/login">
          <button className="header-login-button">LOGIN</button>
        </a>
      </div>
    </div>
  );
}
