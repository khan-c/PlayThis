import React from 'react';
import NavBar from '../nav/nav_bar';
import Playback from '../playback/playback';
import PlaylistIndexContainer from '../playlist/playlist_index_container';

class Main extends React.Component {

  render() {
    return(
      <div className="main">
        <div className="main-background"></div>
        <div className="above-playback">
          <NavBar user={ this.props.user } logout={ this.props.logout }/>
          <PlaylistIndexContainer />
        </div>
        <Playback />
      </div>
    );
  }
}

export default Main;
