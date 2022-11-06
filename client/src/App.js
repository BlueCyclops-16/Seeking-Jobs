import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpUser from "./components/auth/SignUpUser";
import SignUpCompany from "./components/auth/SignUpCompany";
import LogInCompany from "./components/auth/LogInCompany";
import LogInUser from "./components/auth/LogInUser"
import NavBar from "./components/layout/NavBar";
import Home from "./components/layout/Home"


function App(props) {
  return (
    <div>

      <Router>

        <NavBar />
        <section className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUpUser" element={<SignUpUser />} />
          <Route path="/logInUser" element={<LogInUser />} />
          <Route path="/signUpCompany" element={<SignUpCompany />} />
          <Route path="/logInCompany" element={<LogInCompany />} />
        </Routes>
        </section>
      </Router>


    </div>
  )
}



export default App;