import React from 'react';
import SongIndexItem from './song_index_item';

class SongsIndex extends React.Component {
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
            <p className="playlist-author">{ playlist.author }</p>
            <p className="playlist-song-count">{ songs.length } SONGS</p>
            <p className="playlist-play">PLAY</p>
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
