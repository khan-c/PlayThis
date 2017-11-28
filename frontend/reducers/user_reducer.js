import { RECEIVE_USERS } from '../actions/user_actions';
import merge from 'lodash/merge';

const userReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, action.users);
    default:
      return oldState;
  }
};

export default userReducer;
