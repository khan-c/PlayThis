import { connect } from 'react-redux';
import Playback from './playback';
import { fetchPlaylist } from '../../actions/playlist_actions';

const mapStateToProps = state => ({
  songs: state.entities.songs,
  playback: state.playback
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playback);
