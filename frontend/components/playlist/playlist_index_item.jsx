import React from 'react';

class PlaylistIndexItem extends React.Component {

  render() {
    const { playlist } = this.props;
    const image = { backgroundImage: `url(${playlist.image_url})` };

    return(
      <div className="pii-sizing">
        <div className="playlist-index-item">
          <div className="playlist_index-item-image">
            <img src={ playlist.image_url } />
          </div>
          <h2>{ playlist.title }</h2>
        </div>
      </div>
    );
  }
}

export default PlaylistIndexItem;
