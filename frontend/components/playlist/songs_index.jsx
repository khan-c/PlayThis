import React from 'react';
import SongIndexItem from './song_index_item';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';
import Modal from 'react-modal';

class SongsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  componentWillMount() {
    this.props.fetchPlaylist(this.props.match.params.playlistId);
    this.props.fetchSongs(this.props.match.params.playlistId);
  }

  render() {
    const { playlist } = this.props;
    if (!playlist) {
      return null;
    }
    const image = { backgroundImage: `url(${playlist.image_url})` };
    const songs = this.props.songs.map((song, idx) => (
      <SongIndexItem key={ song.id } song={ song } idx={ idx + 1 } />
    ));
    let deleteButton = '';
    if (playlist.author_id === this.props.currentUser.id) {
      deleteButton = 'Delete';
    }

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
            <p className="playlist-author">{ playlist.author_name }</p>
            <p className="playlist-song-count">{ songs.length } SONGS</p>
            <p className="playlist-play">PLAY</p>
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
