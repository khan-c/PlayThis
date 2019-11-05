import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div id="not-found">
    <div id="not-found-cover" />
    <p id="not-found-title">Ain&apos;t no sunshine where you&apos;ve gone...</p>
    <img
      src="https://s3-us-west-1.amazonaws.com/playthismusic/images/404.jpeg"
      alt="Nothing here!"
    />
    <div id="go-back-container">
      <Link id="back-to-it" to="/browse">
        Go back!
      </Link>
    </div>
  </div>
);

export default NotFound;
