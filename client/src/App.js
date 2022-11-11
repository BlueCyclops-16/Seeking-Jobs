import React, { Fragment } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { Provider } from 'react-redux';
import store from './store';

import SignUpUser from "./components/auth/SignUpUser";
import SignUpCompany from "./components/auth/SignUpCompany";
import LogInCompany from "./components/auth/LogInCompany";
import LogInUser from "./components/auth/LogInUser"
import NavBar from "./components/layout/NavBar";
import Home from "./components/layout/Home"
import Footer from "./components/layout/Footer";



function App(props) {
  return (
    <Provider store={store}>
      <div>

        <Router>
          <Fragment>
            <NavBar />


            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signUpUser" element={<section className="container"><SignUpUser /></section>} />
              <Route path="/logInUser" element={<section className="container"><LogInUser /></section>} />
              <Route path="/signUpCompany" element={<section className="container"><SignUpCompany /></section>} />
              <Route path="/logInCompany" element={<section className="container"><LogInCompany /></section>} />
            </Routes>

            <Footer />
          </Fragment>
        </Router>


      </div>
    </Provider>
  )
}
export default App;