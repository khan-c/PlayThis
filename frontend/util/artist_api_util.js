export const fetchArtist = artistId => (
  $.ajax({
    type: 'GET',
    url: `api/artists/${artistId}`
  })
);

export const fetchArtists = () => (
  $.ajax({
    type: 'GET',
    url: 'api/artists'
  })
);
