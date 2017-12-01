import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div id="not-found">
    <div id="not-found-cover"></div>
    <p id="not-found-title">
      Ain't no sunshine where you've gone...
    </p>
    <img src="https://s3-us-west-1.amazonaws.com/playthismusic/images/404.jpeg" />
    <div id="go-back-container">
      <Link
        id="back-to-it"
        to="/browse" >
        Go back!
      </Link>
    </div>
  </div>
);

export default NotFound;
