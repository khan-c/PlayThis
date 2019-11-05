import React from "react";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";
import searchDatabase from "../../util/search_api_util";
import SongIndexItemContainer from "../playlist/song_index_item_container";
import PlaylistIndexContainer from "../playlist/playlist_index_container";
import UserIndex from "../user/user_index";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      songs: {},
      playlists: {},
      users: {}
    };
  }

  componentDidMount() {
    const { fetchPlaylists } = this.props;

    fetchPlaylists();
    document
      .getElementById("search-query")
      .addEventListener("keyup", debounce(this.handleSearch, 500));
  }

  componentWillUnmount() {
    document
      .getElementById("search-query")
      .removeEventListener("keyup", debounce(this.handleSearch, 500));
  }

  handleInput = e => {
    if (e.target.value) {
      this.setState({ searchQuery: e.target.value });
    } else {
      this.setState({
        searchQuery: "",
        songs: {},
        playlists: {},
        users: {}
      });
    }
  };

  handleSearch = () => {
    const { receiveSong } = this.props;
    const { searchQuery } = this.state;

    if (searchQuery) {
      searchDatabase(searchQuery).then(response => {
        let songs = {};
        let playlists = {};
        let users = {};
        if (response.songs) {
          songs = response.songs;
          Object.values(songs).forEach(song => receiveSong(song));
        }
        if (response.playlists) {
          playlists = response.playlists;
        }
        if (response.users) {
          users = response.users;
        }
        this.setState({
          songs,
          playlists,
          users
        });
      });
    }
  };

  render() {
    const { songs, playlists, users, searchQuery } = this.state;
    const songResults = Object.values(songs).map(song => (
      <SongIndexItemContainer key={song.id} song={song} />
    ));

    const playlistResults = (
      <PlaylistIndexContainer searchPlaylists={playlists} />
    );

    const userResults = <UserIndex users={users} />;

    let sResults = "";
    if (songResults.length > 0) {
      sResults = (
        <div className="search-section-result">
          <div className="search-header">Songs</div>
          <div className="results">{songResults}</div>
        </div>
      );
    }

    let pResults = "";
    if (Object.keys(playlists).length > 0) {
      pResults = (
        <div className="search-section-result">
          <div className="search-header">Playlists</div>
          <div className="results">{playlistResults}</div>
        </div>
      );
    }

    let uResults = "";
    if (Object.keys(users).length > 0) {
      uResults = (
        <div className="search-section-result">
          <div className="search-header">Users</div>
          <div className="user-results">{userResults}</div>
        </div>
      );
    }

    let topResults = "";
    if (pResults || sResults || uResults) {
      topResults = "Top Results";
    }

    return (
      <div className="search">
        <div className="search-bar">
          <p className="search-label">Search for a Song, Playlist, User</p>
          {/* eslint-disable jsx-a11y/no-autofocus */}
          <input
            onChange={this.handleInput}
            className="search-query"
            id="search-query"
            type="text"
            value={searchQuery}
            placeholder="Start typing..."
            autoFocus
          />
          {/* eslint-enable jsx-a11y/no-autofocus */}
        </div>
        <div className="search-results">
          <h1 className="top-results">{topResults}</h1>
          {sResults}
          {pResults}
          {uResults}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  fetchPlaylists: PropTypes.func.isRequired,
  receiveSong: PropTypes.func.isRequired
};

export default Search;
