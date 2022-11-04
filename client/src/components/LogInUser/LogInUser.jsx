import React from "react";
import {Button } from "@material-ui/core"

import "./style.css";

function LogInUser() {
  return (
    <div className="loginBox">
      <h1>Login In</h1>
      

      <form>
        <input required name="email" id="email" placeholder="Email" />
        <input required name="password" id="pass" placeholder="Password" />

        <Button variant="contained">Login</Button>
      </form>
    </div>
  );
};


export default LogInUser;