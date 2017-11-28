import {
  RECEIVE_PLAYBACK_SONGS,
  RECEIVE_CURRENT_SONG,
  RECEIVE_CURRENT_PLAYLIST
} from '../actions/playback_actions';
import merge from 'lodash/merge';

const playbackReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_PLAYBACK_SONGS:
      newState = merge({}, oldState);
      newState['playbackQueue'] = action.songs;
      return newState;
    case RECEIVE_CURRENT_SONG:
      newState = merge({}, oldState);
      newState['currentSong'] = action.song;
      return newState;
    case RECEIVE_CURRENT_PLAYLIST:
      newState = merge({}, oldState);
      newState['currentPlaylist'] = action.playlist;
      return newState;
    default:
      return oldState;
  }
};

export default playbackReducer;
