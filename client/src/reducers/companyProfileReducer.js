import {
    GET_COMPANY_PROFILE,
    COMPANY_PROFILE_LOADING,
    CLEAR_CURRENT_COMPANY_PROFILE
  } from '../actions/types';
  
  const initialState = {
    profile: null,
    profiles: null,
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case COMPANY_PROFILE_LOADING:
        return {
          ...state,
          loading: true
        };
      case GET_COMPANY_PROFILE:
        return {
          ...state,
          profile: action.payload,
          loading: false
        };
      case CLEAR_CURRENT_COMPANY_PROFILE:
        return {
          ...state,
          profile: null
        };
      default:
        return state;
    }
  }
  