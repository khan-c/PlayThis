import React from 'react';
import { NavLink } from 'react-router-dom';
import FaSearch from 'react-icons/lib/fa/search';
import FaSignOut from 'react-icons/lib/fa/sign-out';

class NavBar extends React.Component {

  render() {
    const currentUserPage = `/user/${this.props.user.id}`;

    return(
      <div className="nav-bar-container">
        <div className="nav-bar">
          <div className="nav-bar-header">
            <NavLink
              activeClassName="selected"
              to="/browse">
              <img className="logo" src="https://s3-us-west-1.amazonaws.com/playthismusic/images/logo-white.png" />
            </NavLink>
          </div>
          <div className="nav-bar-links">
            <NavLink
              activeClassName="selected"
              to="/search">
              <div className="nav-bar-search">
                Search
              <div className="nav-bar-mag-glass">
                <FaSearch />
                </div>
              </div>
            </NavLink>
            <NavLink
              activeClassName="selected"
              to="/browse">
              <div className="nav-bar-home">
                Home
              </div>
            </NavLink>
            <NavLink
              activeClassName="selected"
              to={ currentUserPage }>
              <div className="nav-bar-current-user-page">
                Your Music
              </div>
            </NavLink>
          </div>
          <div className="nav-bar-user-container">
            <NavLink
              activeClassName="selected"
              className="nav-bar-user-link"
              to={ currentUserPage } >
              <div className="nav-bar-user">
                <img className="avatar" src={ this.props.user.image_url } />
                { this.props.user.username }
              </div>
            </NavLink>
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
