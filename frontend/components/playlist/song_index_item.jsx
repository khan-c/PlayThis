import React from 'react';

class SongIndexItem extends React.Component {
  parseLength(time) {
    let minutes = Math.floor(time / 60);
    let sec = time % 60;
    let seconds = (sec < 10) ? `0${sec}` : `${sec}`;
    return `${minutes}:${seconds}`;
  }

  render() {
    const { song } = this.props;
    const length = this.parseLength(song.length);

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
            <p className="song-length">{ length }</p>
          </div>
        </div>
      </li>
    );
  }
}

export default SongIndexItem;
