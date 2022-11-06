import React, { Fragment } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUpCompany() {
  const navigate = useNavigate();

  const [companyData, setCompany] = useState({
    companyname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const { companyname, email, password, cpassword } = companyData;

  const handleInputs = (event) => {
    console.log(event);
    var field = event.target.name;
    var val = event.target.value;
    setCompany({ ...companyData, [field]: val });
  };

  const sendData = async (event) => {
    event.preventDefault();

    const body = JSON.stringify({
      companyname,
      email,
      password,
      cpassword,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        method: "POST"
      }
    };

    const response = await fetch("/signUpUser", config, body);

    const data = await response;

    console.log(data);

    if (response.status === 422 || !data) {
      window.alert("Invalid Request");
      console.log("Invalid Request");
    } else {
      window.alert("Successfully Registered");
      console.log("Successfully Registered");
      navigate("/logInCompany");
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
            value={companyname}
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
        Already have an company account? <Link to="/logInCompany">Sign In</Link>
      </p>
    </Fragment>
  );
}

export default SignUpCompany;
