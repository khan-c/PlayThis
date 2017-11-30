import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchSongs } from '../../actions/song_actions';
import {
  receiveCurrentPlaylist,
  receivePlaybackSongs,
  receivePlayingStatus
} from '../../actions/playback_actions';
import { usersPlaylists } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let playlists = Object.values(state.entities.playlists);
  // if (ownProps.match.params.userId) {
  //   playlists = usersPlaylists(state, ownProps.match.params.userId);
  // }
  return {
    playlists,
    users: state.entities.users,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPlaylists: (userId) => dispatch(fetchPlaylists(userId)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchSongs: playlistId => dispatch(fetchSongs(playlistId)),
  receiveCurrentPlaylist: playlistId => dispatch(receiveCurrentPlaylist(playlistId)),
  receivePlaybackSongs: songs => dispatch(receivePlaybackSongs(songs)),
  receivePlayingStatus: isPlaying => dispatch(receivePlayingStatus(isPlaying))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistIndex));
