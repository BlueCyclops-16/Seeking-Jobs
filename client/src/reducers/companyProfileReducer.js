import {
    GET_COMPANY_PROFILE,
    COMPANY_PROFILE_LOADING,
    CLEAR_CURRENT_COMPANY_PROFILE,
    GET_COMPANY_PROFILES,
    COMPANY_PROFILE_ERROR
  } from '../actions/types';
  
  const initialState = {
    companyProfile: null,
    companyProfiles: [],
    loading: false,
    error: {}
  };
  
export default function companyProfileReducer(state = initialState, action) {

  const { type, payload } = action;

    switch (type) {
      case COMPANY_PROFILE_LOADING:
        return {
          ...state,
          loading: true
        };
        case GET_COMPANY_PROFILES:
      return {
        ...state,
        companyProfiles: payload,
        loading: false
      }
      case GET_COMPANY_PROFILE:
        return {
          ...state,
          companyProfile: payload,
          loading: false
        };

      case CLEAR_CURRENT_COMPANY_PROFILE:
        return {
          ...state,
          companyProfile: null
        };

        case COMPANY_PROFILE_ERROR:
          return {
            ...state,
            error: payload,
            loading: false
          }
    
      
      default:
        return state;
    }
  }
  