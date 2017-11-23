import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST
} from '../actions/playlist_actions';
import merge from 'lodash/merge';

const playlistReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return merge({}, action.playlists);
    case RECEIVE_PLAYLIST:
      newState = {};
      newState[action.playlist.id] = action.playlist;
      return merge({}, oldState, newState);
    case REMOVE_PLAYLIST:
      newState = merge({}, oldState);
      delete newState[action.playlistId];
      return newState;
    default:
      return oldState;
  }
};

export default playlistReducer;
