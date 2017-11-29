import { connect } from 'react-redux';
import SongsIndexItem from './song_index_item';
import { fetchSongs } from '../../actions/song_actions';
import {
  fetchPlaylists,
  updatePlaylist
} from '../../actions/playlist_actions';
import {
  receivePlaybackSongs,
  receivePlayingStatus
} from '../../actions/playback_actions';
import { withRouter } from 'react-router-dom';
import { currentUserPlaylists } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  playlist: state.entities.playlists[ownProps.match.params.playlistId],
  currentUserPlaylists: currentUserPlaylists(state),
  songs: state.entities.songs,
  currentUser: state.session.currentUser,
  playlists: state.entities.playlists
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylists: userId => dispatch(fetchPlaylists(userId)),
  updatePlaylist: playlist => dispatch(updatePlaylist(playlist)),
  receivePlaybackSongs: songs => dispatch(receivePlaybackSongs(songs)),
  receivePlayingStatus: isPlaying => dispatch(receivePlayingStatus(isPlaying))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsIndexItem));
