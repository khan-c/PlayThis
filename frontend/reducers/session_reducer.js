import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = {
  currentUser: null
};

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      console.log(action.currentUser);
      return merge({}, { currentUser: action.currentUser });
    default:
      return oldState;
  }
};

export default sessionReducer;
