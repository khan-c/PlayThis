import React from 'react';

class PlaylistIndexItem extends React.Component {

  render() {
    const { playlist } = this.props;
    const image = { backgroundImage: `url(${playlist.image_url})` };

    return(
      <div className="pii-sizing">
        <div className="playlist-index-item">
          <div className="playlist-index-item-image">
            <div
              className="playlist-image"
              style={ image }>
              <div className="pi-hover">
                <img src="https://s3-us-west-1.amazonaws.com/playthismusic/images/logo.png" />
              </div>
            </div>
          </div>
          <p className="index-playlist-title">{ playlist.title }</p>
        </div>
      </div>
    );
  }
}

export default PlaylistIndexItem;
