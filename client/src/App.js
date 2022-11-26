import React, { Fragment, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { connect } from "react-redux";
import store from './store';

import SignUpUser from "./components/auth/SignUpUser";
import SignUpCompany from "./components/auth/SignUpCompany";
import LogInCompany from "./components/auth/LogInCompany";
import LogInUser from "./components/auth/LogInUser"
import NavBar from "./components/layout/NavBar";
import Home from "./components/layout/Home"
import Alert from "./components/layout/Alert";
import PrivateRoute from "./components/PrivateRouting/PrivateRoute";
import UserDashboard from "./components/userDashboard/UserDashboard";
import CompanyDashboard from "./components/companyDashboard/CompanyDashboard";
import AddEducation from './components/add-credentials/AddEducation';
import AddExperiece from './components/add-credentials/AddExperience';

// Redux
import { loadUser } from "./actions/userAuthActions";
import setAuthToken from "./utils/setAuthToken";
import PropTypes from 'prop-types';
import CreateUserProfile from "./components/create-user-profile/CreateUserProfile";
import EditUserProfile from "./components/edit-user-profile/EditUserProfile";


if (localStorage.token) {
  setAuthToken(localStorage.token);
}


const App = ({ userAuth: { isAuthenticated: userAuthenticated, loading: userLoading }, companyAuth: { isAuthenticated: companyAuthenticated, loading: companyLoading } }) => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <NavBar />
      <section className="container">
        <Alert />
      </section>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signUpUser" element={<section className="container"><SignUpUser />{" "}</section>} />

        <Route path="/logInUser" element={<section className="container"><LogInUser />{" "}</section>} />

        <Route path="/signUpCompany" element={<section className="container"><SignUpCompany />{" "}</section>} />

        <Route path="/logInCompany" element={<section className="container"><LogInCompany />{" "}</section>} />

        <Route
          path="/userdashboard"
          element={
            <section className="container">
              <PrivateRoute isAuthenticated={userAuthenticated} loading={userLoading}>
                <UserDashboard />
              </PrivateRoute>
            </section>
          }
        />

        <Route
          path="/companydashboard"
          element={
            <section className="container">
              <PrivateRoute isAuthenticated={companyAuthenticated} loading={companyLoading}>
                <CompanyDashboard />
              </PrivateRoute>
            </section>
          }
        />

        <Route
          path="/create-profile"
          element={
            <section className="container">
              <PrivateRoute isAuthenticated={userAuthenticated} loading={userLoading}>
                <CreateUserProfile />
              </PrivateRoute>
            </section>
          }
        />

        <Route
          path="/edit-profile"
          element={
            <section className="container">
              <PrivateRoute isAuthenticated={userAuthenticated} loading={userLoading}>
                <EditUserProfile />
              </PrivateRoute>
            </section>
          }
        />

        <Route
          path="/add-experience"
          element={
            <section className="container">
              <PrivateRoute isAuthenticated={userAuthenticated} loading={userLoading}>
                <AddExperiece />
              </PrivateRoute>
            </section>
          }
        />

        <Route
          path="/add-education"
          element={
            <section className="container">
              <PrivateRoute isAuthenticated={userAuthenticated} loading={userLoading}>
                <AddEducation />
              </PrivateRoute>
            </section>
          }
        />

      </Routes>

    </Router>

  )
}

App.propTypes = {
  userAuth: PropTypes.object.isRequired,
  companyAuth: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  userAuth: state.userAuthReducer,
  companyAuth: state.companyAuthReducer
})


export default connect(mapStateToProps)(App);