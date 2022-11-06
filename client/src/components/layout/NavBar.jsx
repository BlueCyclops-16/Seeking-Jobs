import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" />
          DevConnector
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="!#">Companies</Link>
        </li>
        <li>
          <Link to="/signUpCompany">Company Sign Up</Link>
        </li>
        <li>
          <Link to="/logInCompany">Company Login</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/signUpUser">Sign Up</Link>
        </li>
        <li>
          <Link to="/loginUser">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
