import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import merge from "lodash/merge";
import { withRouter } from "react-router-dom";
import FaPlusCircle from "react-icons/lib/fa/plus-circle";
import IoClose from "react-icons/lib/io/ios-close-empty";
import parseTime from "../../util/music_util";

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalIsOpen: false,
      removeModalIsOpen: false
    };
  }

  openAddModal = () => {
    this.setState({ addModalIsOpen: true });
  };

  closeAddModal = () => {
    this.setState({ addModalIsOpen: false });
  };

  openRemoveModal = () => {
    this.setState({ removeModalIsOpen: true });
  };

  closeRemoveModal = () => {
    this.setState({ removeModalIsOpen: false });
  };

  handleRemove = e => {
    e.preventDefault();
    const { playlist, song } = this.props;

    const playlistSongs = playlist.song_ids.slice();
    const songId = song.id;
    playlistSongs.splice(playlistSongs.indexOf(songId), 1);
    const newPlaylist = merge({}, playlist);
    newPlaylist.song_ids = playlistSongs;
    this.handleUpdate(newPlaylist);
  };

  handleAdd = playlistId => {
    const { currentUserPlaylists, song } = this.props;
    return () => {
      const playlist = merge(
        {},
        currentUserPlaylists.find(p => p.id === playlistId)
      );
      const playlistSongs = playlist.song_ids.slice();
      playlistSongs.push(song.id);
      playlist.song_ids = playlistSongs;
      this.handleUpdate(playlist);
    };
  };

  handleUpdate = playlist => {
    const { updatePlaylist } = this.props;

    updatePlaylist(playlist);
    this.closeRemoveModal();
    this.closeAddModal();
  };

  playSong = () => {
    const { receivePlayingStatus, receivePlaybackSongs, song } = this.props;

    receivePlaybackSongs([song.id]);
    receivePlayingStatus(true);
  };

  render() {
    const { song, userOwnsPlaylist, currentUserPlaylists, idx } = this.props;
    const { removeModalIsOpen, addModalIsOpen } = this.state;

    if (!song) {
      return null;
    }
    const length = parseTime(song.length);
    let songRemove = "";
    if (userOwnsPlaylist) {
      songRemove = (
        <button
          type="button"
          className="song-action-button"
          onClick={this.openRemoveModal}
        >
          Remove from playlist
        </button>
      );
    }
    const ownedPlaylists = currentUserPlaylists.map(playlist => {
      const image = playlist.first_song_image
        ? { backgroundImage: `url(${playlist.first_song_image})` }
        : {
            backgroundImage: `url(https://s3-us-west-1.amazonaws.com/playthismusic/images/blank_playlist-1.jpg)`
          };
      const numSongs = playlist.song_ids.length;
      return (
        <li className="playlist-item-song-add" key={playlist.id}>
          <div className="add-to-playlist-image-container">
            <div className="playlist-item-song-add-image" style={image} />
            <button
              type="button"
              onClick={this.handleAdd(playlist.id)}
              className="add-hover"
            >
              <FaPlusCircle className="plus" />
            </button>
          </div>
          <p className="playlist-add-title">{playlist.title}</p>
          <p className="song-count">{`${numSongs} songs`}</p>
        </li>
      );
    });

    return (
      <li onDoubleClick={this.playSong} className="song-li">
        <div className="song">
          <div className="song-position">
            {idx && <p className="song-pos-num">{`${idx}. `}</p>}
            <input
              type="image"
              className="song-play-b"
              onClick={this.playSong}
              src="https://s3-us-west-1.amazonaws.com/playthismusic/images/logo.png"
              alt=">"
            />
          </div>
          <div className="song-details">
            <div className="song-main">
              <p className="song-title">{song.title}</p>
              <div className="song-artist-album">
                <p className="song-artist">{song.artist.name}</p>
                <span className="artist-album-separator">.</span>
                <p className="song-album">{song.album.title}</p>
              </div>
            </div>
            <div className="song-menu">
              <div className="song-options">
                ...
                <div className="song-options-menu">
                  <ul className="song-menu-items">
                    <button
                      type="button"
                      className="song-action-button"
                      onClick={this.openAddModal}
                    >
                      Add to playlist
                    </button>
                    {songRemove}
                  </ul>
                </div>
              </div>
            </div>
            <p className="song-length">{length}</p>
          </div>
        </div>

        <Modal
          isOpen={addModalIsOpen}
          onRequestClose={this.closeAddModal}
          className={{
            base: "song-options-modal",
            afterOpen: "song-add-open",
            beforeClose: "song-options-before-close"
          }}
          overlayClassName={{
            base: "song-options-overlay",
            afterOpen: "song-options-overlay-open",
            beforeClose: "song-options-overlay-before-close"
          }}
        >
          <button
            type="button"
            onClick={this.closeAddModal}
            className="playlist-form-exit-x"
          >
            <IoClose />
          </button>
          <h1 className="playlist-form-title add">Add to playlist</h1>
          <ul className="playlist-song-add-options">{ownedPlaylists}</ul>
        </Modal>

        <Modal
          isOpen={removeModalIsOpen}
          onRequestClose={this.closeRemoveModal}
          className={{
            base: "song-options-modal",
            afterOpen: "song-options-open song-remove",
            beforeClose: "song-options-before-close"
          }}
          overlayClassName={{
            base: "song-options-overlay",
            afterOpen: "song-options-overlay-open",
            beforeClose: "song-options-overlay-before-close"
          }}
        >
          <button
            type="button"
            onClick={this.closeRemoveModal}
            className="playlist-form-exit-x"
          >
            <IoClose />
          </button>
          <h1 className="playlist-form-title remove">
            Are you sure you want to remove this song?
          </h1>
          <div className="playlist-delete-buttons">
            <input
              onClick={this.closeRemoveModal}
              className="playlist-delete-cancel"
              type="button"
              value="cancel"
            />
            <input
              onClick={this.handleRemove}
              className="playlist-delete"
              type="button"
              value="remove"
            />
          </div>
        </Modal>
      </li>
    );
  }
}

SongIndexItem.propTypes = {
  playlist: PropTypes.objectOf(PropTypes.any),
  song: PropTypes.objectOf(PropTypes.any),
  currentUserPlaylists: PropTypes.arrayOf(PropTypes.object).isRequired,
  updatePlaylist: PropTypes.func.isRequired,
  receivePlaybackSongs: PropTypes.func.isRequired,
  receivePlayingStatus: PropTypes.func.isRequired,
  userOwnsPlaylist: PropTypes.bool,
  idx: PropTypes.number
};

SongIndexItem.defaultProps = {
  playlist: null,
  userOwnsPlaylist: null,
  idx: null,
  song: null
};

export default withRouter(SongIndexItem);
