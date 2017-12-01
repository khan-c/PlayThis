import { connect } from 'react-redux';
import { fetchArtists, fetchArtist } from '../../actions/artist_actions';
import ArtistItem from './artist_item';
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = (state, ownProps) => ({
  artist: state.entities.artists[ownProps.match.params.artistId],
  songs: Object.values(state.entities.songs).filter(
    song => song.artist_id === ownProps.match.params.artistId
  )
});

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists()),
  fetchArtist: artistId => dispatch(fetchArtist(artistId)),
  fetchSongs: () => dispatch(fetchSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistItem);
