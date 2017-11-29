export const RECEIVE_PLAYBACK_SONGS = 'RECEIVE_PLAYBACK_SONGS';
export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const RECEIVE_CURRENT_PLAYLIST = 'RECEIVE_CURRENT_PLAYLIST';
export const RECEIVE_PLAYING_STATUS = 'RECEIVE_PLAYING_STATUS';

// needed?
export const receivePlaybackSongs = songs => ({
  type: RECEIVE_PLAYBACK_SONGS,
  songs
});

export const receiveCurrentSong = song => ({
  type: RECEIVE_CURRENT_SONG,
  song
});

export const receiveCurrentPlaylist = playlist => ({
  type: RECEIVE_CURRENT_PLAYLIST,
  playlist
});

export const receivePlayingStatus = isPlaying => ({
  type: RECEIVE_PLAYING_STATUS,
  isPlaying
});
