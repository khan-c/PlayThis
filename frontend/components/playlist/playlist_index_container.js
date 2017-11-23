import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index';
import { fetchPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = state => ({
  playlists: Object.values(state.entities.playlists),
  songs: Object.values(state.entities.playlists)
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylists: () => dispatch(fetchPlaylists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistIndex);
