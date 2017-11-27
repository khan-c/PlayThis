import { connect } from 'react-redux';
import SongsIndex from './songs_index';
import { fetchSongs } from '../../actions/song_actions';
import {
  fetchPlaylist,
  deletePlaylist,
  updatePlaylist
} from '../../actions/playlist_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  playlist: state.entities.playlists[ownProps.match.params.playlistId],
  songs: state.entities.songs,
  currentUser: state.session.currentUser.user
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: (playlistId) => dispatch(fetchSongs(playlistId)),
  fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
  deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId)),
  updatePlaylist: playlist => dispatch(updatePlaylist(playlist))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsIndex));
