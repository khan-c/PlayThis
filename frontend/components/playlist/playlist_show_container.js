import { connect } from 'react-redux';
import SongsIndex from './songs_index';
import { fetchSongs } from '../../actions/song_actions';
import {
  fetchPlaylist,
  fetchPlaylists,
  deletePlaylist,
  updatePlaylist
} from '../../actions/playlist_actions';
import {
  receiveCurrentPlaylist,
  receivePlaybackSongs,
  receivePlayingStatus
} from '../../actions/playback_actions';
import { updateUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  playlist: state.entities.playlists[ownProps.match.params.playlistId],
  songs: state.entities.songs,
  currentUser: state.session.currentUser,
  playlists: state.entities.playlists
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: (playlistId) => dispatch(fetchSongs(playlistId)),
  fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
  fetchPlaylists: (userId) => dispatch(fetchPlaylists(userId)),
  deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId)),
  updatePlaylist: playlist => dispatch(updatePlaylist(playlist)),
  receiveCurrentPlaylist: playlistId => dispatch(receiveCurrentPlaylist(playlistId)),
  receivePlaybackSongs: songs => dispatch(receivePlaybackSongs(songs)),
  receivePlayingStatus: isPlaying => dispatch(receivePlayingStatus(isPlaying)),
  updateUser: formUser => dispatch(updateUser(formUser))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsIndex));
