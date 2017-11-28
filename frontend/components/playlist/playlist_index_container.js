import { connect } from 'react-redux';
import PlaylistIndex from './playlist_index';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchSongs } from '../../actions/song_actions';
import {
  receiveCurrentPlaylist,
  receivePlaybackSongs
} from '../../actions/playback_actions';

const mapStateToProps = state => ({
  playlists: Object.values(state.entities.playlists),
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylists: (userId) => dispatch(fetchPlaylists(userId)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchSongs: playlistId => dispatch(fetchSongs(playlistId)),
  receiveCurrentPlaylist: playlistId => dispatch(receiveCurrentPlaylist(playlistId)),
  receivePlaybackSongs: songs => dispatch(receivePlaybackSongs(songs))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistIndex);
