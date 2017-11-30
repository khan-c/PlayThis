import React from 'react';
import PlaylistIndexItem from './playlist_index_item';
import PlaylistIndexHeader from './playlist_index_header';
import merge from 'lodash/merge';
import { withRouter } from 'react-router-dom';

class PlaylistIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylists();
    this.props.fetchUsers();
  }

  render() {
    let type = 'browse';
    let user = '';

    if (this.props.match.path === "/user/:userId") {
      type = 'user';
      user = this.props.users[this.props.match.params.userId];
    } else if (this.props.match.path === "/search") {
      type = '';
    }

    let playlistsList;
    if (this.props.searchPlaylists) {
      playlistsList = Object.values(this.props.searchPlaylists);
    } else {
      playlistsList = Object.values(this.props.playlists);
    }
    const playlists = playlistsList.map( playlist => (
      <PlaylistIndexItem
        key={ playlist.id }
        playlist={ playlist }
        receiveCurrentPlaylist={ this.props.receiveCurrentPlaylist }
        receivePlaybackSongs={ this.props.receivePlaybackSongs}
        receivePlayingStatus={ this.props.receivePlayingStatus }
        fetchSongs={ this.props.fetchSongs }/>
    ));

    return(
      <div className="playlists">
        <div className="header">
          <PlaylistIndexHeader
            type={ type }
            user={ user }
            users={ this.props.users }
            fetchUsers={ this.props.fetchUsers }
            />
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

export default withRouter(PlaylistIndex);
