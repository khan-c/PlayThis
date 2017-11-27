import React from 'react';
import Modal from 'react-modal';
import merge from 'lodash/merge';
import { withRouter } from 'react-router-dom';
import PlaylistIndexContainer from './playlist_index_container';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalIsOpen: false,
      removeModalIsOpen: false
    };

    this.openAddModal = this.openAddModal.bind(this);
    this.closeAddModal = this.closeAddModal.bind(this);
    this.openRemoveModal = this.openRemoveModal.bind(this);
    this.closeRemoveModal = this.closeRemoveModal.bind(this);

    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  openAddModal() {
    this.setState({ addModalIsOpen: true });
  }

  closeAddModal() {
    this.setState({ addModalIsOpen: false });
  }

  openRemoveModal() {
    this.setState({ removeModalIsOpen: true });
  }

  closeRemoveModal() {
    this.setState({ removeModalIsOpen: false });
  }

  parseTime(time) {
    let minutes = Math.floor(time / 60);
    let sec = time % 60;
    let seconds = (sec < 10) ? `0${sec}` : `${sec}`;
    return `${minutes}:${seconds}`;
  }

  handleRemove(e) {
    e.preventDefault();
    const playlistSongs = this.props.playlist.song_ids.slice();
    const songId = this.props.song.id;
    playlistSongs.splice(playlistSongs.indexOf(songId), 1);
    const playlist = merge({}, this.props.playlist);
    playlist.song_ids = playlistSongs;
    this.handleUpdate(playlist);
  }

  handleAdd(playlistId) {
    const playlist = merge({}, this.props.currentUserPlaylists[playlistId]);
    const playlistSongs = playlist.song_ids.slice();
    playlistSongs.push(this.props.song.id);
    playlist.song_ids = playlistSongs;
    return () => this.handleUpdate(playlist);
  }

  handleUpdate(playlist) {
    this.props.updatePlaylist(playlist);
    this.closeRemoveModal();
    this.closeAddModal();
    window.location.reload(); // TODO: how to refresh stuff without reoload?
  }

  render() {
    const { song } = this.props;
    if (!song) {
      return null;
    }
    const length = this.parseTime(song.length);
    let songRemove = '';
    if (this.props.userOwnsPlaylist) {
      songRemove =
        <li onClick={ this.openRemoveModal }>
          Remove from playlist
        </li>;
    }

    const playlists = Object.values(this.props.currentUserPlaylists).map(playlist => {
      const image = { backgroundImage: `url(${playlist.image_url})` };
      if (!playlist.song_ids) {
        return '';
      }
      const numSongs = playlist.song_ids.length;
      return (
        <li
          className="playlist-item-song-add"
          key={ playlist.id }>
          <div className="add-to-playlist-image-container">
            <div
              className="playlist-item-song-add-image"
              style={ image }></div>
            <div
              onClick={ this.handleAdd(playlist.id) }
              className="add-hover">
              <FaPlusCircle className="plus"/>
            </div>
          </div>
          <p className="playlist-add-title">{ playlist.title }</p>
          <p className="song-count">{ numSongs } songs</p>
        </li>
      );
    });


    return(
      <li className="song-li">
        <div className="song">
          <div className="song-position">
            <p className="song-pos-num">{ this.props.idx }.</p>
            <img
              className="song-play-b"
              src="https://s3-us-west-1.amazonaws.com/playthismusic/images/logo.png" />
          </div>
          <div className="song-details">
            <div className="song-main">
              <p className="song-title">{ song.title }</p>
              <div className="song-artist-album">
                <p className="song-artist">{ song.artist.name } </p>
                <span className="artist-album-separator">.</span>
                <p className="song-album">{ song.album.title }</p>
              </div>
            </div>
            <div className="song-menu">
              <div
                className="song-options">
                ...
                <div className="song-options-menu">
                  <ul className="song-menu-items">
                    <li onClick={ this.openAddModal }>Add to playlist</li>
                    { songRemove }
                  </ul>
                </div>
              </div>
            </div>
            <p className="song-length">{ length }</p>
          </div>
        </div>

        <Modal
          isOpen={ this.state.addModalIsOpen }
          onRequestClose={ this.closeAddModal }
          className={{
            base: 'song-options-modal',
            afterOpen: 'song-add-open',
            beforeClose: 'song-options-before-close'
          }}
          overlayClassName={{
            base: 'song-options-overlay',
            afterOpen: 'song-options-overlay-open',
            beforeClose: 'song-options-overlay-before-close'
          }}>
          <h1
            onClick={ this.closeAddModal }
            className="playlist-form-exit-x">X</h1>
          <h1 className="playlist-form-title add">
            Add to playlist
          </h1>
          <ul className="playlist-song-add-options">
            { playlists }
          </ul>
        </Modal>

        <Modal
          isOpen={ this.state.removeModalIsOpen }
          onRequestClose={ this.closeRemoveModal }
          className={{
            base: 'song-options-modal',
            afterOpen: 'song-options-open song-remove',
            beforeClose: 'song-options-before-close'
          }}
          overlayClassName={{
            base: 'song-options-overlay',
            afterOpen: 'song-options-overlay-open',
            beforeClose: 'song-options-overlay-before-close'
          }}>
          <h1
            onClick={ this.closeRemoveModal }
            className="playlist-form-exit-x">X</h1>
          <h1 className="playlist-form-title remove">
            Are you sure you want to remove this song?
          </h1>
          <div
            className="playlist-delete-buttons" >
            <input
              onClick={ this.closeRemoveModal }
              className="playlist-delete-cancel"
              type="button"
              value="cancel" />
            <input
              onClick={ this.handleRemove }
              className="playlist-delete"
              type="button"
              value="remove" />
          </div>
        </Modal>
      </li>
    );
  }
}

export default withRouter(SongIndexItem);
