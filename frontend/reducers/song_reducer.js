import {
  RECEIVE_SONGS,
  RECEIVE_SONG,
  REMOVE_SONG
} from '../actions/song_actions';
import merge from 'lodash/merge';

const songReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_SONGS:
      return merge({}, action.songs);
    case RECEIVE_SONG:
      newState = {};
      newState[action.song.id] = action.song;
      return merge({}, oldState, newState);
    case REMOVE_SONG:
      newState = merge({}, oldState);
      delete newState[action.songId];
      return newState;
    default:
      return oldState;
  }
};

export default songReducer;
