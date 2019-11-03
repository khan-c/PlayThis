import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import merge from "lodash/merge";
import SongIndexItemContainer from "./song_index_item_container";
import PlaylistIndexItem from "./playlist_index_item";

class SongsIndex extends React.Component {
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
    if (
      this.props.currentUser.followed_playlist_ids.length !==
      newProps.currentUser.followed_playlist_ids.length
    ) {
      this.props.fetchPlaylist(this.props.match.params.playlistId);
    }
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleDelete = () => {
    this.props
      .deletePlaylist(this.props.playlist.id)
      .then(this.props.history.push("/browse"));
  };

  playPlaylist = () => {
    if (this.props.playlist.song_ids.length !== 0) {
      this.props.receiveCurrentPlaylist(this.props.playlist.id);
      this.props.receivePlaybackSongs(this.props.playlist.song_ids);
      this.props.fetchSongs(this.props.playlist.id);
      this.props.receivePlayingStatus(true);
    }
  };

  toggleFollow = () => {
    const formUser = merge({}, this.props.currentUser);
    if (formUser.followed_playlist_ids.includes(this.props.playlist.id)) {
      formUser.followed_playlist_ids.splice(
        formUser.followed_playlist_ids.indexOf(this.props.playlist.id),
        1
      );
    } else {
      formUser.followed_playlist_ids.push(this.props.playlist.id);
    }
    this.props.updateUser(formUser);
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
            <p onClick={this.playPlaylist} className="playlist-play">
              PLAY
            </p>
            <p className={followClass} onClick={this.toggleFollow}>
              {follow}
            </p>
            <p onClick={this.openModal} className="playlist-options">
              {deleteButton}
            </p>
            <Modal
              isOpen={this.state.modalIsOpen}
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
              <h1 onClick={this.closeModal} className="playlist-form-exit-x">
                X
              </h1>
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

SongsIndex.propTypes = {
  fetchPlaylist: PropTypes.func.isRequired,
  fetchPlaylists: PropTypes.func.isRequired,
  fetchSongs: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.object).isRequired
};

export default SongsIndex;
