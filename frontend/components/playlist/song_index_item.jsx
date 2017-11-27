import React from 'react';
import Modal from 'react-modal';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
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
                onClick={ this.openModal }
                className="song-add">
                +
              </div>
            </div>
            <p className="song-length">{ length }</p>
          </div>
        </div>
        <Modal
          isOpen={ this.state.modalIsOpen }
          onRequestClose={ this.closeModal }
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
            onClick={ this.closeModal }
            className="playlist-form-exit-x">X</h1>
          <h1 className="playlist-form-title">
            Add to playlist
          </h1>
          <ul>
            
          </ul>
        </Modal>
      </li>
    );
  }
}

export default SongIndexItem;
