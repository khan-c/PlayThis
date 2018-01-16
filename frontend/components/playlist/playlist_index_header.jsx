import React from 'react';
import merge from 'lodash/merge';
import FaSignOut from 'react-icons/lib/fa/sign-out';

class PlaylistIndexHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggleFollow = this.toggleFollow.bind(this);
  }

  componentWillReceiveNewProps(newProps) {
    if (this.props.match.path !== newProps.match.path) {
      this.props.fetchUsers();
    }
  }

  toggleFollow() {
    const formUser = merge({}, this.props.currentUser);
    if (formUser.followed_user_ids.includes(this.props.user.id)) {
      formUser.followed_user_ids.splice(
        formUser.followed_user_ids.indexOf(this.props.user.id), 1);
    } else {
      formUser.followed_user_ids.push(this.props.user.id);
    }
    this.props.updateUser(formUser);
  }

  render() {
    let header;

    if (this.props.type === 'browse') {
      header =
      <div className="playlist-index-header">
        <p className="playlist-index-options">browse</p>
        <h1 className="playlist-index-title">Featured Playlists</h1>
      </div>;
    } else if (this.props.type === 'user') {
      const { user, currentUser } = this.props;
      if (!user) {
        return null;
      }

      let follow = (user.current_user_follows) ? 'Unfollow' : 'Follow';
      let followClass = (user.current_user_follows) ?
                              "u-f-button followed" :
                              "u-f-button follow";
      let logoutClass = 'logout hidden';
      if (user.id === currentUser.id) {
        follow = '';
        followClass='';
        logoutClass = 'logout';
      }

      const image = { backgroundImage: `url(${this.props.user.image_url})` };

      header =
      <div className="user-header">
        <div className="user-profile-image-container">
          <div className="user-avatar" style={ image }></div>
        </div>
        <button
          className={ logoutClass }
          onClick={ this.props.logout }
          >
          <p>Log Out</p>
          <span><FaSignOut /></span>
        </button>
        <h1 className="user-title">{ this.props.user.username }</h1>
        <p className="user-followers-count">
          { this.props.user.follower_count } followers
        </p>
        <p
          className={ followClass }
          onClick={ this.toggleFollow }>
          { follow }
        </p>
      </div>;
    } else {
      header = '';
    }

    return (
      <div>
        { header }
      </div>
    );
  }
}

export default PlaylistIndexHeader;
