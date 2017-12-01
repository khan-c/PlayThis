import React from 'react';
import { withRouter } from 'react-router-dom';

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.playlistClick = this.playlistClick.bind(this);
    this.playPlaylist = this.playPlaylist.bind(this);
  }

  playlistClick() {
    this.props.history.push(`/playlist/${ this.props.playlist.id }`);
  }

  playPlaylist(e) {
    e.stopPropagation();
    this.props.receiveCurrentPlaylist(this.props.playlist.id);
    this.props.receivePlaybackSongs(this.props.playlist.song_ids);
    this.props.fetchSongs(this.props.playlist.id);
    this.props.receivePlayingStatus(true);
  }

  render() {
    const { playlist } = this.props;
    let image;
    if (!playlist.image_url) {
      if (!playlist.first_song_image) {
        image = {};
      } else {
        image = { backgroundImage: `url(${playlist.first_song_image})` };
      }
    } else {
      image = { backgroundImage: `url(${playlist.image_url})` };
    }
    const link = `/playlist/${ playlist.id }`;

    return(
      <div className={ this.props.page }>
        <div className="playlist-index-item">
          <div
            onClick={ this.playlistClick }
            className="playlist-index-item-image">
            <div
              className="playlist-image"
              style={ image }>
              <div
                className="pi-hover">
                <img
                  onClick={ this.playPlaylist }
                  src="https://s3-us-west-1.amazonaws.com/playthismusic/images/logo.png" />
              </div>
            </div>
          </div>
          <p
            onClick={ this.playlistClick }
            className={ this.props.title }>
            { playlist.title }
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(PlaylistIndexItem);
