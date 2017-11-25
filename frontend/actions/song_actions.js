import * as SongAPIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG_ERRORS = 'RECEIVE_SONG_ERRORS';

export const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

export const receiveSongErrors = errors => ({
  type: RECEIVE_SONG_ERRORS,
  errors
});

export const fetchSongs = (playlistId) => dispatch => (
  SongAPIUtil.fetchSongs(playlistId).then(
    songs => dispatch(receiveSongs(songs)),
    errors => dispatch(receiveSongErrors(errors.responseJSON))
  )
);
