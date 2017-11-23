import { combineReducers } from 'redux';
import playlistReducer from './playlist_reducer';
import songReducer from './song_reducer';

const entitiesReducer = combineReducers({
  playlists: playlistReducer,
  songs: songReducer
});

export default entitiesReducer;
