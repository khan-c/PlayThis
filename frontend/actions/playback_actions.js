export const RECEIVE_PLAYBACK_SONGS = 'RECEIVE_PLAYBACK_SONGS';

export const receivePlaybackSongs = songs => ({
  type: RECEIVE_PLAYBACK_SONGS,
  songs
});
