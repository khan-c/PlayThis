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
        <h1 className="playlist-title">PLAYLIST INDEX</h1>
        <div className="playlist-index">
          { playlists }
        </div>
      </div>
    );
  }
}

export default PlaylistIndex;
