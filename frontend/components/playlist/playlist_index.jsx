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
      <div className="playlist-index">
        PLACELIST INDEX
        <ul>
          { playlists }
        </ul>
      </div>
    );
  }
}

export default PlaylistIndex;
