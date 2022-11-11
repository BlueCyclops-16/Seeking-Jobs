import { combineReducers } from 'redux';
import companyAuthReducer from './companyAuthReducer';
import errorReducer from './errorReducer';
import userAuthReducer from './userAuthReducer';
import userProfileReducer from './userProfileReducer';
import companyProfileReducer from './companyProfileReducer';


export default combineReducers({
  userAuthReducer,
  companyAuthReducer,
  errorReducer,
  userProfileReducer,
  companyProfileReducer
});