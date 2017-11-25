import { RECEIVE_SONGS } from '../actions/song_actions';
import merge from 'lodash/merge';

const songReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_SONGS:
      return merge({}, action.songs);
    default:
      return oldState;
  }
};

export default songReducer;
