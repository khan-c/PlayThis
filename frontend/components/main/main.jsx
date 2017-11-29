import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import NavBar from '../nav/nav_bar';
import PlaybackContainer from '../playback/playback_container';
import PlaylistIndexContainer from '../playlist/playlist_index_container';
import PlaylistShowContainer from '../playlist/playlist_show_container';
import PlaylistFormContainer from '../playlist/playlist_form_container';
import ReactDOM from 'react-dom';

class Main extends React.Component {

  render() {
    return(
      <div className="main">
        <div className="main-background"></div>
        <div className="above-playback">
          <NavBar user={ this.props.user } logout={ this.props.logout }/>
          <Switch>
            <Route
              path="/playlist/:playlistId"
              component={PlaylistShowContainer} />
            <Route
              path="/user/:userId"
              component={PlaylistIndexContainer} />
            <Route exact path="/browse" component={PlaylistIndexContainer} />
          </Switch>
        </div>
        <PlaybackContainer />
      </div>
    );
  }
}

export default Main;
