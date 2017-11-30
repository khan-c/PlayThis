import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUser = {
  currentUser: null
};

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { currentUser: action.currentUser });
    case RECEIVE_USERS:
      let newState = merge({}, oldState);
      newState.currentUser = action.users[newState.currentUser.id];
      return newState;
    default:
      return oldState;
  }
};

export default sessionReducer;
