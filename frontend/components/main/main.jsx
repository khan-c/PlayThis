import React from 'react';
import NavBar from '../nav/nav_bar';
import Playback from '../playback/playback';

class Main extends React.Component {

  render() {
    return(
      <div className="main">
        <div className="above-playback">
          <NavBar user={ this.props.user } logout={ this.props.logout }/>
          <div className="main-stuff">
            <h1>Main Page Placeholder text</h1>
          </div>
        </div>
        <Playback />
      </div>
    );
  }
}

export default Main;
