import * as SongAPIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';
export const RECEIVE_SONG_ERRORS = 'RECEIVE_SONG_ERRORS';

export const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const removeSong = songId => ({
  type: REMOVE_SONG,
  songId
});

export const receiveSongErrors = errors => ({
  type: RECEIVE_SONG_ERRORS,
  errors
});

export const fetchSongs = (playlistId) => dispatch => (
  SongAPIUtil.fetchSongs(playlistId).then(
    songs => dispatch(receiveSongs(songs)),
    errors => dispatch(receiveSongErrors(errors))
  )
);

export const addSongToPlaylist = playlistSong => dispatch => (
  SongAPIUtil.addSongToPlaylist(playlistSong).then(
    newSongToPlaylist => dispatch(receiveSong(newSongToPlaylist)),
    errors => dispatch(receiveSongErrors(errors))
  )
);

export const removeSongFromPlaylist = playlistSongId => dispatch => (
  SongAPIUtil.removeSongToPlaylist(playlistSongId).then(
    song => dispatch(removeSong(song.id)),
    errors => dispatch(receiveSongErrors(errors))
  )
);
