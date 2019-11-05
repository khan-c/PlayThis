import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import NavBar from "../nav/nav_bar";
import PlaybackContainer from "../playback/playback_container";
import PlaylistIndexContainer from "../playlist/playlist_index_container";
import PlaylistShowContainer from "../playlist/playlist_show_container";
import SearchContainer from "../search/search_container";

class Main extends React.Component {
  componentDidMount() {
    document.getElementById("above-playback").scrollTo(0, 0);
  }

  render() {
    const { user, logout } = this.props;

    return (
      <div className="main">
        <div className="main-background" />
        <div id="above-playback">
          <NavBar user={user} logout={logout} />
          <div className="playlist-index-container">
            <Switch>
              <Route
                path="/playlist/:playlistId"
                component={PlaylistShowContainer}
              />
              <Route path="/user/:userId" component={PlaylistIndexContainer} />
              <Route path="/search" component={SearchContainer} />
              <Route path="/browse" component={PlaylistIndexContainer} />
            </Switch>
          </div>
        </div>
        <PlaybackContainer />
      </div>
    );
  }
}

Main.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  logout: PropTypes.func.isRequired
};

export default Main;
