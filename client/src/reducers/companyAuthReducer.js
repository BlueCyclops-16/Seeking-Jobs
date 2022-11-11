import isEmpty from '../validation/is-empty';

import { SET_CURRENT_COMPANY } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function companyAuthReducer (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_COMPANY:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
