import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    return(
      <div className="splash">
        <div className="splash-left">
          <h1 className="app-name">PlayThis</h1>
          <Link className="signup button" to="/signup">Sign Up</Link>
          <div className="separator">
            <div className="separator-line"></div>
            <p className="separator-text">Already have an account?</p>
            <div className="separator-line"></div>
          </div>
          <Link className="login button" to="/login">Log In</Link>
        </div>
        <div className="splash-right">
          <h1>Get the right music,<br />right now</h1>
          <h3>Listen to millions of songs for free.</h3>
          <ul className="splash-list">
            <li>Search & discover music you'll love</li>
            <li>Create playlists of your favorite music</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Greeting;
