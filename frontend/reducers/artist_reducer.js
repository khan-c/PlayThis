import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from '../actions/artist_actions';
import merge from 'lodash/merge';

const artistReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_ARTISTS:
      newState = merge({}, action.artists);
      return newState;
    case RECEIVE_ARTIST:
      newState = merge({}, oldState);
      newState[action.artist.id] = action.artist;
      return newState;
    default:
      return oldState;
  }
};

export default artistReducer;
