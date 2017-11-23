import { combineReducers } from 'redux';
import playlistReducer from './playlist_reducer';

const entitiesReducer = combineReducers({
  playlists: playlistReducer
});

export default entitiesReducer;
