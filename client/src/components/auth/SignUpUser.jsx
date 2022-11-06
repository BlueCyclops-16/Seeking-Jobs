import React, { Fragment } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
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

  const handleInputs = (event) => {
    console.log(event);
    var field = event.target.name;
    var val = event.target.value;
    setUser({ ...userData, [field]: val });
  };

  const sendData = async (event) => {
    event.preventDefault();

    const { name, email, password, cpassword } = userData;

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
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
            required
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
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
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>

    // <>
    //   <section className="signup">
    //     <div className="main-container">
    //       <div className="signup-content">
    //         <div className="signpic-container">
    //           <NavLink to="/login" className="signin-link">
    //             {" "}
    //             Already Registered?
    //           </NavLink>
    //         </div>
    //         <div className="signup-form">
    //           <h2 className="title"> Sign Up</h2>
    //           <form className="form" onSubmit={e => sendData(e)}>
    //             <div className="form-group">
    //               <label htmlFor="name">
    //                 <i className="zmdi zmdi-account material-icons-name"></i>
    //               </label>

    //               <input
    //                 type="text"
    //                 name="name"
    //                 id="name"
    //                 autoComplete="off"
    //                 value={userData.name}
    //                 onChange={handleInputs}
    //                 placeholder="your name"
    //               />
    //             </div>

    //             <div className="form-group">
    //               <label htmlFor="email">
    //                 <i className="zmdi zmdi-email material-icons-name"></i>
    //               </label>

    //               <input
    //                 type="email"
    //                 name="email"
    //                 id="email"
    //                 autoComplete="off"
    //                 value={userData.email}
    //                 onChange={handleInputs}
    //                 placeholder="your email"
    //               />
    //             </div>

    //             <div className="form-group">
    //               <label htmlFor="password">
    //                 <i className="zmdi zmdi-lock material-icons-name"></i>
    //               </label>

    //               <input
    //                 type="password"
    //                 name="password"
    //                 id="password"
    //                 autoComplete="off"
    //                 value={userData.password}
    //                 onChange={handleInputs}
    //                 placeholder="your password"
    //               />
    //             </div>

    //             <div className="form-group">
    //               <label htmlFor="cpassword">
    //                 <i className="zmdi zmdi-lock material-icons-name"></i>
    //               </label>

    //               <input
    //                 type="password"
    //                 name="cpassword"
    //                 id="cpassword"
    //                 autoComplete="off"
    //                 value={userData.cpassword}
    //                 onChange={handleInputs}
    //                 placeholder=" Confirm your password"
    //               />
    //             </div>

    //             <div className="form-group form-button">
    //               {/* <button type="submit" name="signup" id="signup" className='btn' value="Register"
    //                 onClick={sendData} /> */}
    //               <button onClick={sendData}>Sign Up</button>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>
  );
}

export default SignUpUser;
