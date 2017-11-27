import React from 'react';
import { withRouter } from 'react-router-dom';

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.playlistClick = this.playlistClick.bind(this);
  }

  playlistClick() {
    this.props.history.push(`/playlist/${ this.props.playlist.id }`);
  }

  render() {
    const { playlist } = this.props;
    const image = { backgroundImage: `url(${playlist.image_url})` };
    const link = `/playlist/${ playlist.id }`;

    return(
      <div className="pii-sizing">
        <div className="playlist-index-item">
          <div
            onClick={ this.playlistClick }
            className="playlist-index-item-image">
            <div
              className="playlist-image"
              style={ image }>
              <div className="pi-hover">
                <img src="https://s3-us-west-1.amazonaws.com/playthismusic/images/logo.png" />
              </div>
            </div>
          </div>
          <p
            onClick={ this.playlistClick }
            className="index-playlist-title">
            { playlist.title }
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(PlaylistIndexItem);
