import { connect } from 'react-redux';
import SongsIndex from './songs_index';
import { fetchSongs } from '../../actions/song_actions';
import {
  fetchPlaylist,
  deletePlaylist
} from '../../actions/playlist_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  playlist: state.entities.playlists[ownProps.match.params.playlistId],
  songs: Object.values(state.entities.songs)
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: (playlistId) => dispatch(fetchSongs(playlistId)),
  fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
  deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsIndex));
