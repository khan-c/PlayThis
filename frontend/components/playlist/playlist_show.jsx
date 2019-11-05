import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import merge from "lodash/merge";
import IoClose from "react-icons/lib/io/ios-close-empty";
import SongIndexItemContainer from "./song_index_item_container";
import PlaylistIndexItem from "./playlist_index_item";

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  componentDidMount() {
    const { fetchPlaylist, fetchPlaylists, fetchSongs, match } = this.props;
    fetchPlaylist(match.params.playlistId);
    fetchPlaylists();
    fetchSongs(match.params.playlistId);
    document.getElementById("above-playback").scrollTo(0, 0);
    Modal.setAppElement("body");
  }

  componentDidUpdate(newProps) {
    const { currentUser, match, fetchPlaylist } = this.props;
    if (
      currentUser.followed_playlist_ids.length !==
      newProps.currentUser.followed_playlist_ids.length
    ) {
      fetchPlaylist(match.params.playlistId);
    }
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleDelete = () => {
    const { deletePlaylist, playlist, history } = this.props;

    deletePlaylist(playlist.id).then(history.push("/browse"));
  };

  playPlaylist = () => {
    const {
      playlist,
      receiveCurrentPlaylist,
      receivePlaybackSongs,
      fetchSongs,
      receivePlayingStatus
    } = this.props;
    if (playlist.song_ids.length !== 0) {
      receiveCurrentPlaylist(playlist.id);
      receivePlaybackSongs(playlist.song_ids);
      fetchSongs(playlist.id);
      receivePlayingStatus(true);
    }
  };

  toggleFollow = () => {
    const { currentUser, playlist, updateUser } = this.props;
    const formUser = merge({}, currentUser);
    if (formUser.followed_playlist_ids.includes(playlist.id)) {
      formUser.followed_playlist_ids.splice(
        formUser.followed_playlist_ids.indexOf(playlist.id),
        1
      );
    } else {
      formUser.followed_playlist_ids.push(playlist.id);
    }
    updateUser(formUser);
  };

  render() {
    const {
      playlist,
      currentUser,
      songs,
      receiveCurrentPlaylist,
      receivePlaybackSongs,
      receivePlayingStatus,
      fetchSongs
    } = this.props;
    const { modalIsOpen } = this.state;

    if (!playlist) {
      return null;
    }
    // const image = { backgroundImage: `url(${playlist.image_url})` };
    // const currentUserPlaylists = Object.values(this.props.playlists).filter((p) => (
    //   p.author_id === this.props.currentUser.id
    // ));
    const userOwnsPlaylist = currentUser.id === playlist.author_id;

    const songsList = playlist.song_ids.map((songId, idx) => {
      let key;
      if (!songs[songId]) {
        key = Math.random();
      } else {
        key = songs[songId].title + idx;
      }
      return (
        <SongIndexItemContainer
          key={key}
          song={songs[songId]}
          idx={idx + 1}
          playlist={playlist}
          userOwnsPlaylist={userOwnsPlaylist}
        />
      );
    });
    let deleteButton = "";
    if (playlist.author_id === currentUser.id) {
      deleteButton = "Delete";
    }
    const userUrl = `/user/${playlist.author_id}`;

    let follow = playlist.current_user_follows ? "Unfollow" : "Follow";
    const followClass = playlist.current_user_follows
      ? "f-button followed"
      : "f-button follow";
    if (userOwnsPlaylist) {
      follow = "";
    }

    return (
      <div className="playlists">
        <div className="playlist-show-container">
          <div className="playlist-show-title">
            <PlaylistIndexItem
              playlist={playlist}
              songs={songs}
              page="playlist-show-page"
              title="playlist-title"
              receiveCurrentPlaylist={receiveCurrentPlaylist}
              receivePlaybackSongs={receivePlaybackSongs}
              receivePlayingStatus={receivePlayingStatus}
              fetchSongs={fetchSongs}
            />
            <Link to={userUrl} className="playlist-author">
              {playlist.author_name}
            </Link>
            <p className="playlist-song-count">{`${songsList.length} SONGS`}</p>
            <p className="playlist-follow-count">
              {`${playlist.followers} followers`}
            </p>
            <button
              type="button"
              onClick={this.playPlaylist}
              className="playlist-play"
            >
              PLAY
            </button>
            <button
              type="button"
              className={followClass}
              onClick={this.toggleFollow}
            >
              {follow}
            </button>
            <button
              type="button"
              onClick={this.openModal}
              className="playlist-options"
            >
              {deleteButton}
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={this.closeModal}
              className={{
                base: "playlist-options-modal",
                afterOpen: "playlist-options-open",
                beforeClose: "playlist-options-before-close"
              }}
              overlayClassName={{
                base: "playlist-options-overlay",
                afterOpen: "playlist-options-overlay-open",
                beforeClose: "playlist-options-overlay-before-close"
              }}
            >
              <button
                type="button"
                onClick={this.closeModal}
                className="playlist-form-exit-x"
              >
                <IoClose />
              </button>
              <h1 className="playlist-form-title">
                Do you really want to delete this playlist?
              </h1>
              <div className="playlist-delete-buttons">
                <input
                  onClick={this.closeModal}
                  className="playlist-delete-cancel"
                  type="button"
                  value="cancel"
                />
                <input
                  onClick={this.handleDelete}
                  className="playlist-delete"
                  type="button"
                  value="delete"
                />
              </div>
            </Modal>
          </div>
          <ul className="songs">{songsList}</ul>
        </div>
      </div>
    );
  }
}

PlaylistShow.propTypes = {
  fetchPlaylist: PropTypes.func.isRequired,
  fetchPlaylists: PropTypes.func.isRequired,
  fetchSongs: PropTypes.func.isRequired,
  deletePlaylist: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  playlist: PropTypes.objectOf(PropTypes.any),
  receivePlayingStatus: PropTypes.func.isRequired,
  receiveCurrentPlaylist: PropTypes.func.isRequired,
  receivePlaybackSongs: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  songs: PropTypes.objectOf(PropTypes.object).isRequired
};

PlaylistShow.defaultProps = {
  playlist: null
};

export default PlaylistShow;
