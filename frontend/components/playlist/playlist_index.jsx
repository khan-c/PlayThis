import React from 'react';
import PlaylistIndexItem from './playlist_index_item';

class PlaylistIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    const playlists = this.props.playlists.map( playlist => (
      <PlaylistIndexItem key={ playlist.id } playlist={ playlist }/>
    ));

    return(
      <div className="playlist-index-container">
        <p className="playlist-index-options">browse</p>
        <h1 className="playlist-index-title">Featured Music</h1>
        <div className="playlist-index">
          <div className='playlist-index-items'>
            { playlists }
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistIndex;
