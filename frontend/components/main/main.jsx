import React from 'react';
import NavBar from '../nav/nav_bar';
import Playback from '../playback/playback';

class Main extends React.Component {

  render() {
    return(
      <div className="main">
        <div className="above-playback">
          <NavBar user={ this.props.user }/>
          <div className="main-stuff">
            <h1>Main Page Placeholder text</h1>
            <button
              className="button"
              onClick={ this.props.logout }>Log Out</button>
          </div>
        </div>
        <Playback />
      </div>
    );
  }
}

export default Main;
