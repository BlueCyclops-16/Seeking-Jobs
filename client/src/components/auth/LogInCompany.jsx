import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LogInCompany = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
        method: "POST",
      },
    };
    const body = JSON.stringify({
      email,
      password,
    });

    const response = await fetch("/logInCompany", config, body);

    const data = await response;

    if (response.status === 421 || !data) {
      window.alert("Invalid Request");
      console.log("Invalid Request");
    } else {
      window.alert("Successfully loged in");
      console.log("Successfully loged in");
      navigate("/");
    }
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p>

      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
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
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an company account?{" "}
        <Link to="/signUpCompany">Sign Up Company</Link>
      </p>
    </Fragment>
  );
};

export default LogInCompany;
