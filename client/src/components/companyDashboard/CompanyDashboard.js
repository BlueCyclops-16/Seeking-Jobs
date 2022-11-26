import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProfileActions from "./ProfileActions";
import { getCurrentProfile } from "../../actions/companyProfileAction";
import Spinner from "../layout/Spinner";

import { deleteAccount } from "../../actions/companyProfileAction";

const CompanyDashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
  deleteAccount
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user">Welcome {user && user.name}</i>
      </p>

      {profile !== null ? (
        <Fragment>
          <ProfileActions />

          <div className="my-2">
            <button className="btn btn-danger" onClick={deleteAccount}>
              <i className="fas fa-user-minus" />
              Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info.</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

CompanyDashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.companyAuthReducer,
  profile: state.companyProfileReducer,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(CompanyDashboard);


// import React from 'react'

// const CompanyDashboard = () => {
//   return (
//     <div>CompanyDashboard</div>
//   )
// }

// export default CompanyDashboard;