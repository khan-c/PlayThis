export const fetchPlaylists = userId =>
  $.ajax({
    type: "GET",
    url: "api/playlists",
    data: { userId }
  });

export const fetchPlaylist = playlistId =>
  $.ajax({
    type: "GET",
    url: `api/playlists/${playlistId}`
  });

export const createPlaylist = playlist =>
  $.ajax({
    type: "POST",
    url: `api/playlists`,
    data: { playlist }
  });

export const updatePlaylist = playlist =>
  $.ajax({
    type: "PATCH",
    url: `api/playlists/${playlist.id}`,
    data: { playlist }
  });

export const deletePlaylist = playlistId =>
  $.ajax({
    type: "DELETE",
    url: `api/playlists/${playlistId}`
  });
