import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
  playlists: Object.values(state.entities.playlists),
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylists: (userId) => dispatch(fetchPlaylists(userId)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistIndex);
