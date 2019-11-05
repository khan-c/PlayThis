import merge from "lodash/merge";
import {
  RECEIVE_PLAYBACK_SONGS,
  RECEIVE_CURRENT_SONG,
  RECEIVE_CURRENT_PLAYLIST,
  RECEIVE_PLAYING_STATUS
} from "../actions/playback_actions";

const defaultPlayback = {
  currentPlaylist: 1,
  playbackQueue: [6, 8, 10],
  isPlaying: false
};

const playbackReducer = (oldState = defaultPlayback, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_PLAYBACK_SONGS:
      newState = merge({}, oldState);
      newState.playbackQueue = action.songs;
      return newState;
    case RECEIVE_CURRENT_SONG:
      newState = merge({}, oldState);
      newState.currentSongId = action.songId;
      return newState;
    case RECEIVE_CURRENT_PLAYLIST:
      newState = merge({}, oldState);
      newState.currentPlaylist = action.playlist;
      return newState;
    case RECEIVE_PLAYING_STATUS:
      newState = merge({}, oldState);
      newState.isPlaying = action.isPlaying;
      return newState;
    default:
      return oldState;
  }
};

export default playbackReducer;
