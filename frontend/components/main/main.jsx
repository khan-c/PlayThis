import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import NavBar from '../nav/nav_bar';
import PlaybackContainer from '../playback/playback_container';
import PlaylistIndexContainer from '../playlist/playlist_index_container';
import PlaylistShowContainer from '../playlist/playlist_show_container';
import PlaylistFormContainer from '../playlist/playlist_form_container';
import ArtistContainer from '../artist/artist_container';
import SearchContainer from '../search/search_container';
import NotFound from '../not_found';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  componentDidMount() {
    document.getElementById('above-playback').scrollTo(0,0);
  }

  render() {
    return(
      <div className="main">
        <div className="main-background"></div>
        <div id="above-playback">
          <NavBar user={ this.props.user } logout={ this.props.logout }/>
          <div className="playlist-index-container">
            <Switch>
              <Route
                path="/playlist/:playlistId"
                component={PlaylistShowContainer} />
              <Route
                path="/user/:userId"
                component={PlaylistIndexContainer} />
              <Route
                path="/artist/:artistId"
                component={ArtistContainer} />
              <Route
                path="/search"
                component={SearchContainer} />
              <Route path="/browse" component={PlaylistIndexContainer} />
            </Switch>
          </div>
        </div>
        <PlaybackContainer />
      </div>
    );
  }
}

export default Main;
