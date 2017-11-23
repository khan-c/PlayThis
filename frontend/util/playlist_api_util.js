export const fetchPlaylists = () => (
  $.ajax({
    type: 'GET',
    url: 'api/playlists'
  })
);

export const fetchPlaylist = playlistId => (
  $.ajax({
    type: 'GET',
    url: `api/playlists/${playlistId}`
  })
);

export const createPlaylist = playlist => (
  $.ajax({
    type: 'POST',
    url: `api/playlists`,
    data: { playlist: playlist }
  })
);

export const updatePlaylist = playlist => (
  $.ajax({
    type: 'PATCH',
    url: `api/playlists/${playlist.id}`
  })
);

export const deletePlaylist = playlistId => (
  $.ajax({
    type: 'DELETE',
    url: `api/playlists/${playlistId}`
  })
);
