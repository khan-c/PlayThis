import React from 'react';
import SongIndexItem from './song_index_item';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

class SongsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.playPlaylist = this.playPlaylist.bind(this);
  }

  componentWillMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistId);
    this.props.fetchPlaylists();
    this.props.fetchSongs(this.props.match.params.playlistId);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleDelete() {
    this.props.deletePlaylist(this.props.playlist.id).then(
      this.props.history.push("/browse")
    );
  }

  playPlaylist() {
    this.props.receiveCurrentPlaylist(this.props.playlist.id);
    this.props.receivePlaybackSongs(this.props.playlist.song_ids);
    this.props.fetchSongs(this.props.playlist.id);
    this.props.receivePlayingStatus(true);
  }

  render() {
    const { playlist } = this.props;
    if (!playlist) {
      return (
        null
      );
    }
    const image = { backgroundImage: `url(${playlist.image_url})` };
    const currentUserPlaylists = Object.values(this.props.playlists).filter(p => (
      p.author_id === this.props.currentUser.id
    ));
    const songs = playlist.song_ids.map((songId, idx) => {
      let key;
      if (!this.props.songs[songId]) {
        key = 'test';
      } else {
        key = this.props.songs[songId].title + idx;
      }
      return (
        <SongIndexItem
          key={ key }
          song={ this.props.songs[songId] }
          idx={ idx + 1 }
          playlist={ playlist }
          updatePlaylist={ this.props.updatePlaylist }
          currentUserPlaylists={ currentUserPlaylists }
          receivePlaybackSongs={ this.props.receivePlaybackSongs }
          receivePlayingStatus={ this.props.receivePlayingStatus }
          userOwnsPlaylist={ (this.props.currentUser.id === playlist.author_id) }
        />
      );
    });
    let deleteButton = '';
    if (playlist.author_id === this.props.currentUser.id) {
      deleteButton = 'Delete';
    }
    const userUrl = `/user/${playlist.author_id}`;

    return(
      <div className="playlist-index-container">
        <div className="playlist-show-container">
          <div className="playlist-show-title">
            <div
              className="playlist-show-image">
              <div
                className="playlist-image"
                style={ image }>
                <div

                  className="pi-hover">
                  <img src="https://s3-us-west-1.amazonaws.com/playthismusic/images/logo.png" />
                </div>
              </div>
            </div>
            <p className="playlist-title">{ playlist.title }</p>
            <Link
              to={ userUrl }
              className="playlist-author">
              { playlist.author_name }
            </Link>
            <p className="playlist-song-count">{ songs.length } SONGS</p>
            <p
              onClick={ this.playPlaylist }
              className="playlist-play">PLAY</p>
            <p
              onClick={ this.openModal }
              className="playlist-options">{ deleteButton }
            </p>
            <Modal
              isOpen={ this.state.modalIsOpen }
              onRequestClose={ this.closeModal }
              className={{
                base: 'playlist-options-modal',
                afterOpen: 'playlist-options-open',
                beforeClose: 'playlist-options-before-close'
              }}
              overlayClassName={{
                base: 'playlist-options-overlay',
                afterOpen: 'playlist-options-overlay-open',
                beforeClose: 'playlist-options-overlay-before-close'
              }}
              >
              <h1
                onClick={ this.closeModal }
                className="playlist-form-exit-x">X</h1>
              <h1 className="playlist-form-title">
                Do you really want to delete this playlist?
              </h1>
              <div
                className="playlist-delete-buttons" >
                <input
                  onClick={ this.closeModal }
                  className="playlist-delete-cancel"
                  type="button"
                  value="cancel" />
                <input
                  onClick={ this.handleDelete }
                  className="playlist-delete"
                  type="button"
                  value="delete" />
              </div>
            </Modal>
          </div>
          <ul className="songs">
            { songs }
          </ul>
        </div>
      </div>
    );
  }
}

export default SongsIndex;
