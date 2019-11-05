import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import PlaylistIndexItem from "./playlist_index_item";
import PlaylistIndexHeader from "./playlist_index_header";
import UserIndex from "../user/user_index";

class PlaylistIndex extends React.Component {
  componentDidMount() {
    const { fetchPlaylists, fetchUsers } = this.props;

    fetchPlaylists();
    fetchUsers();
    document.getElementById("above-playback").scrollTo(0, 0);
  }

  // isEmpty(obj) {
  //   for (const key in obj) {
  //     if (obj.hasOwnProperty(key)) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  mapPlaylistItems = playlists => {
    const {
      songs,
      receiveCurrentPlaylist,
      receivePlaybackSongs,
      receivePlayingStatus,
      fetchSongs
    } = this.props;

    return playlists.map(playlist => (
      <PlaylistIndexItem
        key={playlist.id}
        playlist={playlist}
        page="pii-sizing"
        title="index-playlist-title"
        songs={songs}
        receiveCurrentPlaylist={receiveCurrentPlaylist}
        receivePlaybackSongs={receivePlaybackSongs}
        receivePlayingStatus={receivePlayingStatus}
        fetchSongs={fetchSongs}
      />
    ));
  };

  render() {
    const {
      currentUser,
      playlists,
      match,
      users,
      searchPlaylists,
      fetchUsers,
      updateUser,
      logout
    } = this.props;
    let type = "browse";
    let user = null;

    const allPlaylists = Object.values(playlists);

    let ownPlaylists = this.mapPlaylistItems(
      allPlaylists.filter(playlist => playlist.author_id === currentUser.id)
    );

    let playThisPlaylists = this.mapPlaylistItems(
      allPlaylists.filter(
        playlist => playlist.author_id === 1 && !playlist.current_user_follows
      )
    );

    let otherPlaylists = this.mapPlaylistItems(
      allPlaylists.filter(
        playlist =>
          playlist.author_id !== 1 &&
          !playlist.current_user_follows &&
          playlist.author_id !== currentUser.id
      )
    );

    let followedPlaylists = this.mapPlaylistItems(
      allPlaylists.filter(playlist => playlist.current_user_follows)
    );

    let followedUsers = [];

    let userPlaylists = [];
    if (match.path === "/user/:userId") {
      type = "user";
      user = users[match.params.userId];

      if (!user) {
        return null;
      }

      followedUsers = Object.values(users).filter(u => u.current_user_follows);

      if (user.id !== currentUser.id) {
        userPlaylists = this.mapPlaylistItems(
          allPlaylists.filter(playlist => playlist.author_id === user.id)
        );
        followedUsers = Object.values(users).filter(u =>
          user.followed_user_ids.includes(u.id)
        );
        ownPlaylists = [];
      }

      followedPlaylists = this.mapPlaylistItems(
        allPlaylists.filter(playlist =>
          user.followed_playlist_ids.includes(playlist.id)
        )
      );

      playThisPlaylists = [];
      otherPlaylists = [];
    } else if (match.path === "/search") {
      type = "";
    }

    let searchedPlaylists = [];
    if (searchPlaylists) {
      ownPlaylists = [];
      playThisPlaylists = [];
      userPlaylists = [];
      followedPlaylists = [];
      otherPlaylists = [];
      followedUsers = [];
      searchedPlaylists = this.mapPlaylistItems(Object.values(searchPlaylists));
    }

    const ownTitle = ownPlaylists.length > 0 ? "Your Playlists" : "";
    const userTitle =
      userPlaylists.length > 0 ? `${user.username}'s playlists` : "";
    const followedPlaylistsTitle =
      followedPlaylists.length > 0 ? "Followed Playlists" : "";
    const otherPlaylistsTitle = otherPlaylists.length > 0 ? "Discover" : "";
    const followedUsersTitle = followedUsers.length > 0 ? "Followed Users" : "";

    return (
      <div className="playlists">
        <div className="header">
          <PlaylistIndexHeader
            type={type}
            user={user}
            users={users}
            fetchUsers={fetchUsers}
            updateUser={updateUser}
            currentUser={currentUser}
            logout={logout}
          />
        </div>
        <div className="playlist-index">
          <div className="playlist-index-items">
            <div className="discover playlists">{playThisPlaylists}</div>
            <div className="playlists-title">{otherPlaylistsTitle}</div>
            <div className="other playlists">{otherPlaylists}</div>
            <div className="playlists-title">{ownTitle}</div>
            <div className="own playlists">{ownPlaylists}</div>
            <div className="playlists-title">{userTitle}</div>
            <div className="playlists">{userPlaylists}</div>
            <div className="playlists-title">{followedPlaylistsTitle}</div>
            <div className="following playlists">{followedPlaylists}</div>
            <div className="searched playlists">{searchedPlaylists}</div>
            <div className="playlists-title">{followedUsersTitle}</div>
            <div className="playlists">
              <UserIndex users={followedUsers} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PlaylistIndex.propTypes = {
  fetchPlaylists: PropTypes.func.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  songs: PropTypes.objectOf(PropTypes.object).isRequired,
  receiveCurrentPlaylist: PropTypes.func.isRequired,
  receivePlaybackSongs: PropTypes.func.isRequired,
  receivePlayingStatus: PropTypes.func.isRequired,
  fetchSongs: PropTypes.func.isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any).isRequired,
  playlists: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  users: PropTypes.objectOf(PropTypes.object).isRequired,
  searchPlaylists: PropTypes.objectOf(PropTypes.object),
  updateUser: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

PlaylistIndex.defaultProps = {
  searchPlaylists: null
};

export default withRouter(PlaylistIndex);
