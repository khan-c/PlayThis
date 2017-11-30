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

  mapPlaylistItems(playlists) {
    return playlists.map( playlist => (
      <PlaylistIndexItem
        key={ playlist.id }
        playlist={ playlist }
        receiveCurrentPlaylist={ this.props.receiveCurrentPlaylist }
        receivePlaybackSongs={ this.props.receivePlaybackSongs}
        receivePlayingStatus={ this.props.receivePlayingStatus }
        fetchSongs={ this.props.fetchSongs }/>
    ));
  }

  render() {
    const { currentUser } = this.props;
    let type = 'browse';
    let user = '';
    let allPlaylists = Object.values(this.props.playlists);

    let ownPlaylists = this.mapPlaylistItems(
      allPlaylists.filter(playlist => playlist.author_id === currentUser.id)
    );

    let otherPlaylists = this.mapPlaylistItems(
      allPlaylists.filter(
        playlist => !(playlist.current_user_follows ||
          playlist.author_id === currentUser.id ||
          playlist.author_id === user.id))
    );

    let followedPlaylists = this.mapPlaylistItems(
      allPlaylists.filter(playlist => playlist.current_user_follows)
    );

    let userPlaylists = [];
    if (this.props.match.path === "/user/:userId") {
      type = 'user';
      user = this.props.users[this.props.match.params.userId];

      if (!user) {
        return null;
      }

      if (user.id !== currentUser.id) {
        userPlaylists = this.mapPlaylistItems(
          allPlaylists.filter(playlist => playlist.author_id === user.id)
        );
        ownPlaylists = [];
      }

      followedPlaylists = this.mapPlaylistItems(
        allPlaylists.filter(playlist =>
          user.followed_playlist_ids.includes(playlist.id))
      );

      otherPlaylists = [];

    } else if (this.props.match.path === "/search") {
      type = '';
    }

    let searchPlaylists = [];
    if (this.props.searchPlaylists) {
      ownPlaylists = [];
      otherPlaylists = [];
      userPlaylists = [];
      followedPlaylists = [];
      searchPlaylists = this.mapPlaylistItems(
        Object.values(this.props.searchPlaylists)
      );
    }

    const ownTitle = (ownPlaylists.length > 0) ? "Your Playlists" : '';
    const userTitle = (userPlaylists.length > 0) ? `${user.username}'s playlists` : '';
    const followedTitle = (followedPlaylists.length > 0) ? "Followed Playlists" : '';

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
            <div className="discover playlists">
              { otherPlaylists }
            </div>
            <div className="playlists-title">{ ownTitle }</div>
            <div className="own playlists">
              { ownPlaylists }
            </div>
            <div className="playlists-title">{ userTitle }</div>
            <div className="user playlists">
              { userPlaylists }
            </div>
            <div className="playlists-title">{ followedTitle }</div>
            <div className="following playlists">
              { followedPlaylists }
            </div>
            <div className="searched playlists">
              { searchPlaylists }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PlaylistIndex);
