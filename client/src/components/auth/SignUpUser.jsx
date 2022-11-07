import React, { Fragment } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./style.css";

function SignUpUser() {

  const navigate = useNavigate();

  const [userData, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const { name, email, password, cpassword } = userData;

  const handleInputs = (event) => {
    console.log(event);
    var field = event.target.name;
    var val = event.target.value;
    setUser({ ...userData, [field]: val });
  };

  const sendData = async (event) => {
    event.preventDefault();


    const response = await fetch("/signUpUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        cpassword,
      }),
    });

    const data = await response;

    console.log(data);

    if (response.status === 422 || !data) {
      window.alert("Invalid Request");
      console.log("Invalid Request");
    } else {
      window.alert("Successfully Registered");
      console.log("Successfully Registered");
      navigate("/logInUser");
    }
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>

      <form className="form" onSubmit={(e) => sendData(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => handleInputs(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => handleInputs(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => handleInputs(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="cpassword"
            minLength="6"
            value={cpassword}
            onChange={(e) => handleInputs(e)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/logInUser">Sign In</Link>
      </p>
    </Fragment>
  );
}

export default SignUpUser;
