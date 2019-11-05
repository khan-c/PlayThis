import React from "react";
import PropTypes from "prop-types";
import merge from "lodash/merge";
import FaSignOut from "react-icons/lib/fa/sign-out";

class PlaylistIndexHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggleFollow = this.toggleFollow.bind(this);
  }

  componentWillReceiveNewProps(newProps) {
    const { match, fetchUsers } = this.props;
    if (match.path !== newProps.match.path) {
      fetchUsers();
    }
  }

  toggleFollow() {
    const { user, currentUser, updateUser } = this.props;

    const formUser = merge({}, currentUser);
    if (formUser.followed_user_ids.includes(user.id)) {
      formUser.followed_user_ids.splice(
        formUser.followed_user_ids.indexOf(user.id),
        1
      );
    } else {
      formUser.followed_user_ids.push(user.id);
    }
    updateUser(formUser);
  }

  render() {
    const { type, user, logout } = this.props;

    let header;

    // where is type being used/coming from?
    if (type === "browse") {
      header = (
        <div className="playlist-index-header">
          <p className="playlist-index-options">browse</p>
          <h1 className="playlist-index-title">Featured Playlists</h1>
        </div>
      );
    } else if (type === "user") {
      const { currentUser } = this.props;
      if (!user) {
        return null;
      }

      let follow = user.current_user_follows ? "Unfollow" : "Follow";
      let followClass = user.current_user_follows
        ? "u-f-button followed"
        : "u-f-button follow";
      let logoutClass = "hidden";
      if (user.id === currentUser.id) {
        follow = "";
        followClass = "";
        logoutClass = "logout";
      }

      const image = { backgroundImage: `url(${user.image_url})` };

      header = (
        <div className="user-header">
          <div className="user-profile-image-container">
            <div className="user-avatar" style={image} />
          </div>
          <button type="button" className={logoutClass} onClick={logout}>
            <p>Log Out</p>
            <span>
              <FaSignOut />
            </span>
          </button>
          <h1 className="user-title">{user.username}</h1>
          <p className="user-followers-count">{`${user.follower_count} followers`}</p>
          <button
            type="button"
            className={followClass}
            onClick={this.toggleFollow}
          >
            {follow}
          </button>
        </div>
      );
    } else {
      header = "";
    }

    return header;
  }
}

PlaylistIndexHeader.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
  user: PropTypes.objectOf(PropTypes.any),
  currentUser: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchUsers: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

PlaylistIndexHeader.defaultProps = {
  match: null,
  user: null
};

export default PlaylistIndexHeader;
