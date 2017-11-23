import React from 'react';

class PlaylistIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    const playlists = this.props.playlists.map( playlist => (
      <li key={ playlist.id }>
        <h2>
          { playlist.title }
        </h2>
        <img src={ playlist.image_url } />
      </li>
    ));

    return(
      <div>
        PLACELIST INDEX
        <ul>
          { playlists }
        </ul>
      </div>
    );
  }
}

export default PlaylistIndex;
