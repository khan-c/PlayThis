import { connect } from 'react-redux';
import { createPlaylist } from '../../actions/playlist_actions';
import PlaylistForm from './playlist_form';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  createPlaylist: formPlaylist => dispatch(createPlaylist(formPlaylist))
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(PlaylistForm));
