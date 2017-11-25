import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import NavBar from '../nav/nav_bar';
import Playback from '../playback/playback';
import PlaylistIndexContainer from '../playlist/playlist_index_container';
import PlaylistShowContainer from '../playlist/playlist_show_container';

class Main extends React.Component {

  render() {
    return(
      <div className="main">
        <div className="main-background"></div>
        <div className="above-playback">
          <NavBar user={ this.props.user } logout={ this.props.logout }/>
          <Switch>
            <Route path="/browse" component={PlaylistIndexContainer} />
            <Route path="/playlist/:playlistId" component={PlaylistShowContainer} />
          </Switch>
        </div>
        <Playback />
      </div>
    );
  }
}

export default Main;
