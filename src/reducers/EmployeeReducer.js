import {
  EMPLOYEE_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_FETCH_SUCCESS:
      return action.payload;
      //if organize by id , we should return
      // return {...state, [id]: action.payload}
    default:
      return state;
  }
};
