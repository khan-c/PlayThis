import React from "react";
import { Link } from "react-router-dom";

const Greeting = () => (
  <div className="splash">
    <div className="splash-left">
      <div className="app-logo">
        <img
          src="https://s3-us-west-1.amazonaws.com/playthismusic/images/logo-white.png"
          alt="PlayThis"
        />
        <h1 className="app-name">PlayThis</h1>
      </div>
      <Link className="signup button" to="/signup">
        Sign Up
      </Link>
      <div className="separator">
        <div className="separator-line" />
        <p className="separator-text">Already have an account?</p>
        <div className="separator-line" />
      </div>
      <Link className="login button" to="/login">
        Log In
      </Link>
    </div>
    <div className="splash-right">
      <h1>
        Get the right music,
        <br />
        right now
      </h1>
      <h3>Listen to millions of songs for free.</h3>
      <ul className="splash-list">
        <li>Search & discover music you&apos;ll love</li>
        <li>Create playlists of your favorite music</li>
      </ul>
    </div>
  </div>
);

export default Greeting;
