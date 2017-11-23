export const addSongToPlaylist = playlistSong => (
  $.ajax({
    type: 'POST',
    url: 'api/playlist_songs',
    data: { playlist_song: playlistSong }
  })
);

export const removeSongFromPlaylist = playlistSongId => (
  $.ajax({
    type: 'DELETE',
    url: `api/playlist_songs/${playlistSongId}`
  })
);
