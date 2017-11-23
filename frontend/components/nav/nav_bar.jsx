import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  render() {
    return(
      <div className="nav-bar-container">
        <div className="nav-bar">
          <div className="nav-bar-header">
            <Link to="/browse">
              <img className="logo" src="https://s3-us-west-1.amazonaws.com/playthismusic/images/logo-white.png" />
            </Link>
          </div>

          <div className="nav-bar-user">
            <img className="avatar" src={ this.props.user.image_url } />
            { this.props.user.username }
          </div>
          <button
            className="nav-bar-b"
            onClick={ this.props.logout }>Log Out</button>
        </div>
      </div>
    );
  }
}

export default NavBar;
