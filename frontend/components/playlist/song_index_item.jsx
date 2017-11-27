import React from 'react';
import Modal from 'react-modal';

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

  render() {
    const { song } = this.props;
    const length = this.parseTime(song.length);
    let songRemove = '';
    if (this.props.userOwnsPlaylist) {
      songRemove= <li onClick={ this.openRemoveModal }>Remove from playlist</li>;
    }


    return(

      <li className="song-li">
        <div className="song">
          <div className="song-position">
            <p className="song-pos-num">{ this.props.idx }.</p>
            <img className="song-play-b" src="https://s3-us-west-1.amazonaws.com/playthismusic/images/logo.png" />
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
            afterOpen: 'song-options-open',
            beforeClose: 'song-options-before-close'
          }}
          overlayClassName={{
            base: 'song-options-overlay',
            afterOpen: 'song-options-overlay-open',
            beforeClose: 'song-options-overlay-before-close'
          }}
          >
          <h1
            onClick={ this.closeAddModal }
            className="playlist-form-exit-x">X</h1>
          <h1 className="playlist-form-title add">
            Add to playlist
          </h1>
          <ul>

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
        }}
        >
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
              onClick={ this.handleUpdate }
              className="playlist-delete"
              type="button"
              value="remove" />
          </div>
        </Modal>
      </li>
    );
  }
}

export default SongIndexItem;
