import { combineReducers } from "redux";
import playlistReducer from "./playlist_reducer";
import songReducer from "./song_reducer";
import userReducer from "./user_reducer";

const entitiesReducer = combineReducers({
  playlists: playlistReducer,
  songs: songReducer,
  users: userReducer
});

export default entitiesReducer;
