import React from 'react';

class PlaylistIndexHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveNewProps(newProps) {
    if (this.props.match.path !== newProps.match.path) {
      this.props.fetchUsers();
    }
  }

  render() {
    let header;

    if (this.props.type === 'browse') {
      header =
      <div className="playlist-index-header">
        <p className="playlist-index-options">browse</p>
        <h1 className="playlist-index-title">Discover</h1>
      </div>;
    } else if (this.props.type === 'user') {
      if (!this.props.user) {
        return null;
      }
      const image = { backgroundImage: `url(${this.props.user.image_url})` };
      header =
      <div className="user-header">
        <div className="user-profile-image-container">
          <div className="user-avatar" style={ image }></div>
        </div>
        <h1 className="user-title">{ this.props.user.username }</h1>
        <p className="user-followers-count">
          { this.props.user.follower_count } followers
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
