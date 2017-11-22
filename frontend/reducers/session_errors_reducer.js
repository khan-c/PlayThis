import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import { CLEAR_ERRORS } from '../actions/error_actions';

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return [...action.errors];
    case RECEIVE_CURRENT_USER:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;
