import { connect } from "react-redux";
import Search from "./search";
import { receiveSong } from "../../actions/song_actions";
import { fetchPlaylists } from "../../actions/playlist_actions";
import { currentUserPlaylists } from "../../reducers/selectors";

const mapStateToProps = state => ({
  currentUserPlaylists: currentUserPlaylists(state)
});

const mapDispatchToProps = dispatch => ({
  receiveSong: song => dispatch(receiveSong(song)),
  fetchPlaylists: () => dispatch(fetchPlaylists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
