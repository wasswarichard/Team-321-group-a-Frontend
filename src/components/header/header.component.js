import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/shopping-bag.svg";
import "./header.styles.scss";

const Header = () => (
  <div className="nav-header">
    <Link className="logo-container" to="/home">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/hire">
        HIRE
      </Link>
      <Link className="option" to="/signup">
        SIGN UP
      </Link>
      <Link className="option" to="/">
        SIGN IN
      </Link>
    </div>
  </div>
);

export default Header;
