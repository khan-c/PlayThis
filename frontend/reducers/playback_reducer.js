import { RECEIVE_PLAYBACK_SONGS } from '../actions/playback_actions';
import merge from 'lodash/merge';

const playbackReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_PLAYBACK_SONGS:
      newState = merge({}, oldState);
      newState['playbackQueue'] = action.songs;
      return newState;
    default:
      return oldState;
  }
};

export default playbackReducer;
