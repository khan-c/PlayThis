import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';
import PlaylistForm from './playlist_form';

const mapDispatchToProps = dispatch => ({
  createPlaylist: formPlaylist => dispatch(createPlaylist(formPlaylist))
});

export default connect(
  null,
  mapDispatchToProps
)(PlaylistForm);
