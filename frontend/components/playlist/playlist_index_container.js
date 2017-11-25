import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index';
import { fetchPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = state => ({
  playlists: Object.values(state.entities.playlists)
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylists: (userId) => dispatch(fetchPlaylists(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistIndex);
