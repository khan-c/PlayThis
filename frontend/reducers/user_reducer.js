import merge from "lodash/merge";
import { RECEIVE_USERS } from "../actions/user_actions";

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
