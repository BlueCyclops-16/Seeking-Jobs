import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';


import { Provider } from 'react-redux';
import store from './store';

import SignUpUser from "./components/auth/SignUpUser";
import SignUpCompany from "./components/auth/SignUpCompany";
import LogInCompany from "./components/auth/LogInCompany";
import LogInUser from "./components/auth/LogInUser"
import NavBar from "./components/layout/NavBar";
import Home from "./components/layout/Home"



function App(props) {
  return (
    <Provider store={store}>
    <div>

      <Router>
          <Fragment>
        <NavBar />
        <Route path="/" element={<Home />} /> 
        <section className="container">
        <Switch>
          
          <Route path="/signUpUser" element={<SignUpUser />} />
          <Route path="/logInUser" element={<LogInUser />} />
          <Route path="/signUpCompany" element={<SignUpCompany />} />
          <Route path="/logInCompany" element={<LogInCompany />} />
        </Switch>
        </section>
        </Fragment>
      </Router>


    </div>
    </Provider>
  )
}
export default App;