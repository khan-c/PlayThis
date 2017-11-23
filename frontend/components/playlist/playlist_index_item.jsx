import React from 'react';

class PlaylistIndexItem extends React.Component {

  render() {
    const { playlist } = this.props;

    return(
      <div className="playlist-index-item">
        <img src={ playlist.image_url } />
        <h2>{ playlist.title }</h2>
      </div>
    );
  }
}

export default PlaylistIndexItem;
