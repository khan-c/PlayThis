import merge from "lodash/merge";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USERS } from "../actions/user_actions";

const nullUser = {
  currentUser: null
};

const sessionReducer = (oldState = nullUser, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { currentUser: action.currentUser });
    case RECEIVE_USERS: {
      const newState = merge({}, oldState);
      newState.currentUser = action.users[newState.currentUser.id];
      return newState;
    }
    default:
      return oldState;
  }
};

export default sessionReducer;
