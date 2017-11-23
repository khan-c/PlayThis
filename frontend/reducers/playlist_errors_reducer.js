import { RECEIVE_PLAYLIST_ERRORS } from '../actions/playlist_actions';
import { CLEAR_ERRORS } from '../actions/error_actions';

const playlistErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_PLAYLIST_ERRORS:
      return [...action.errors];
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default playlistErrorsReducer;
