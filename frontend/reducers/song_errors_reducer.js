import { RECEIVE_SONG_ERRORS } from "../actions/song_actions";
import { CLEAR_ERRORS } from "../actions/error_actions";

const songErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SONG_ERRORS:
      return [...action.errors];
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default songErrorsReducer;
