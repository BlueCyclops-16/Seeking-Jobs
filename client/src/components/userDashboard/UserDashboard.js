import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProfileActions from "./ProfileActions";
import { getCurrentProfile } from "../../actions/userProfileAction";
import Spinner from "../layout/Spinner";
import Experience from "./Experience";
import Education from "./Education";

import { deleteAccount } from "../../actions/userProfileAction";

const UserDashboard = ({
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
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

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

UserDashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.userAuthReducer,
  profile: state.userProfileReducer,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(UserDashboard);


// import React from 'react'


// const UserDashboard = () => {
//   return (
//     <div>UserDashboard</div>
//   )
// }


// export default UserDashboard;