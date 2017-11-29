import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import merge from 'lodash/merge';

class PlaylistIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylists();
    this.props.fetchUsers();
  }

  render() {
    let playlists;
    let header =
      <div className="playlist-index-header">
        <p className="playlist-index-options">browse</p>
        <h1 className="playlist-index-title">All Playlists</h1>
      </div>;

    if (this.props.match.path === "/user/:userId") {
      const user = this.props.users[this.props.match.params.userId];
      if (!user) {
        return null;
      }

      const usersPlaylists = this.props.playlists.filter(playlist => (
        playlist.author_id === user.id
      ));

      playlists = usersPlaylists.map( playlist => (
        <PlaylistIndexItem
          key={ playlist.id }
          playlist={ playlist }
          receiveCurrentPlaylist={ this.props.receiveCurrentPlaylist }
          receivePlaybackSongs={ this.props.receivePlaybackSongs}
          receivePlayingStatus={ this.props.receivePlayingStatus }
          fetchSongs={ this.props.fetchSongs }/>
      ));

      const image = { backgroundImage: `url(${user.avatar_url})` };
      header =
        <div className="user-header">
          <div className="user-profile-image-container">
            <div className="user-avatar" style={ image }></div>
          </div>
          <h1 className="user-title">{ user.username }</h1>
          <p>Playlists</p>
        </div>;
    } else {
      playlists = this.props.playlists.map( playlist => (
        <PlaylistIndexItem
          key={ playlist.id }
          playlist={ playlist }
          receiveCurrentPlaylist={ this.props.receiveCurrentPlaylist }
          receivePlaybackSongs={ this.props.receivePlaybackSongs}
          receivePlayingStatus={ this.props.receivePlayingStatus }
          fetchSongs={ this.props.fetchSongs }/>
      ));
    }

    return(
      <div className="playlist-index-container">
        <div className="header">
          { header }
        </div>
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
