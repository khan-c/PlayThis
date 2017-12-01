import * as ArtistAPIUtil from '../util/artist_api_util';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';

export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const receiveArtist = artist => ({
  type: RECEIVE_ARTIST,
  artist
});

export const fetchArtists = () => dispatch => (
  ArtistAPIUtil.fetchArtists().then(
    artists => dispatch(receiveArtists(artists))
  )
);

export const fetchArtist = (artistId) => dispatch => (
  ArtistAPIUtil.fetchArtist(artistId).then(
    artist => dispatch(receiveArtist(artist))
  )
);
