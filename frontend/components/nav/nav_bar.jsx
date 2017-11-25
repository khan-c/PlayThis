import React from 'react';
import { Link } from 'react-router-dom';
import FaSearch from 'react-icons/lib/fa/search';
import FaSignOut from 'react-icons/lib/fa/sign-out';

class NavBar extends React.Component {

  render() {
    const currentUserPage = `/user/${this.props.user.id}`;

    return(
      <div className="nav-bar-container">
        <div className="nav-bar">
          <div className="nav-bar-header">
            <Link to="/browse">
              <img className="logo" src="https://s3-us-west-1.amazonaws.com/playthismusic/images/logo-white.png" />
            </Link>
          </div>
          <div className="nav-bar-links">
            <Link to="/search">
              <div className="nav-bar-search">
                Search
              <div className="nav-bar-mag-glass">
                <FaSearch />
                </div>
              </div>
            </Link>
            <Link to="/browse">
              <div className="nav-bar-home">
                Home
              </div>
            </Link>
            <Link to={ currentUserPage }>
              <div className="nav-bar-current-user-page">
                Your Music
              </div>
            </Link>
          </div>
          <div className="new-playlist-button">
            <button className="new-p-button">
              New Playlist
            </button>
          </div>
          <div className="nav-bar-user-container">
            <Link
              className="nav-bar-user-link"
              to={ currentUserPage } >
              <div className="nav-bar-user">
                <img className="avatar" src={ this.props.user.image_url } />
                { this.props.user.username }
              </div>
            </Link>
            <button
              className="nav-bar-logout"
              onClick={ this.props.logout }><FaSignOut /></button>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
