import * as PlaylistAPIUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';
export const RECEIVE_PLAYLIST_ERRORS = 'RECEIVE_PLAYLIST_ERRORS';

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

export const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

export const removePlaylist = playlistId => ({
  type: REMOVE_PLAYLIST,
  playlistId
});

export const receivePlaylistErrors = errors => ({
  type: RECEIVE_PLAYLIST_ERRORS,
  errors
});

export const fetchPlaylists = (userId) => dispatch => (
  PlaylistAPIUtil.fetchPlaylists(userId).then(
    playlists => {
      return dispatch(receivePlaylists(playlists));},
    errors => dispatch(receivePlaylistErrors(errors))
  )
);

export const fetchPlaylist = playlistId => dispatch => (
  PlaylistAPIUtil.fetchPlaylist(playlistId).then(
    playlist => dispatch(receivePlaylist(playlist)),
    errors => dispatch(receivePlaylistErrors(errors))
  )
);

export const createPlaylist = formPlaylist => dispatch => (
  PlaylistAPIUtil.createPlaylist(formPlaylist).then(
    playlist => {
      dispatch(receivePlaylist(playlist));
      return playlist;
    },
    errors => dispatch(receivePlaylistErrors(errors))
  )
);

export const updatePlaylist = formPlaylist => dispatch => (
  PlaylistAPIUtil.updatePlaylist(formPlaylist).then(
    playlist => {
      return dispatch(receivePlaylist(playlist));},
    errors => dispatch(receivePlaylistErrors(errors))
  )
);

export const deletePlaylist = playlistId => dispatch => (
  PlaylistAPIUtil.deletePlaylist(playlistId).then(
    playlist => dispatch(removePlaylist(playlist.id)),
    errors => dispatch(receivePlaylistErrors(errors))
  )
);
