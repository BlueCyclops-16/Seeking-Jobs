import axios from 'axios';

import {
  GET_COMPANY_PROFILE,
  COMPANY_PROFILE_LOADING,
  CLEAR_CURRENT_COMPANY_PROFILE,
  GET_ERRORS,
  SET_CURRENT_COMPANY
} from './types';

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/routes/companyProfile')
    .then(res =>
      dispatch({
        type: GET_COMPANY_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_COMPANY_PROFILE,
        payload: {}
      })
    );
};

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post('/api/routes/companyProfile', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


// Delete account & profile
export const deleteAccount = () => dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    axios
      .delete('/api/routes/companyProfile')
      .then(res =>
        dispatch({
          type: SET_CURRENT_COMPANY,
          payload: {}
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: COMPANY_PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_COMPANY_PROFILE
  };
};
