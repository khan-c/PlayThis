export const fetchSongs = (playlistId) => (
  $.ajax({
    type: 'GET',
    url: `api/playlists/${playlistId}/songs`
  })
);
