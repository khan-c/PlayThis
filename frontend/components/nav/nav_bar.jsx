import React from 'react';
import { Link } from 'react-router-dom';
import FaSearch from 'react-icons/lib/fa/search';

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
            <div className="nav-bar-search">
              <Link to="/search">
                Search
              </Link>
              <div className="nav-bar-mag-glass">
                <FaSearch />
              </div>
            </div>
            <div className="nav-bar-home">
              <Link to="/browse">
                Home
              </Link>
            </div>
            <div className="nav-bar-current-user-page">
              <Link to={ currentUserPage }>
                Your Music
              </Link>
            </div>
          </div>
          <div className="nav-bar-user-container">
            <div className="nav-bar-user">
              <img className="avatar" src={ this.props.user.image_url } />
              { this.props.user.username }
            </div>
            <button
              className="nav-bar-logout"
              onClick={ this.props.logout }>Log Out</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
