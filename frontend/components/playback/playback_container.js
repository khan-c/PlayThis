import { connect } from 'react-redux';
import Playback from './playback';
import { fetchPlaylist } from '../../actions/playlist_actions';
import {
  receivePlayingStatus,
  receiveCurrentSong
 } from '../../actions/playback_actions';

const mapStateToProps = state => ({
  songs: state.entities.songs,
  playback: state.playback,
  playlists: state.entities.playlists
});

const mapDispatchToProps = dispatch => ({
  fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
  receivePlayingStatus: isPlaying => dispatch(receivePlayingStatus(isPlaying)),
  receiveCurrentSong: songId => dispatch(receiveCurrentSong(songId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playback);
