import React from 'react';
import { searchDatabase } from '../../util/search_api_util';
import _ from 'lodash';
import SongIndexItem from '../playlist/song_index_item';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      songs: {},
      playlists: {},
      users: {}
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    document.getElementById('search-query').addEventListener('keyup', _.debounce(this.handleSearch, 250));
  }

  componentWillUnmount() {
    document.getElementById('search-query').removeEventListener('keyup', _.debounce(this.handleSearch, 250));
  }

  handleInput(e) {
    if (e.target.value) {
      this.setState({ searchQuery: e.target.value });
    } else {
      this.setState({
        searchQuery: '',
        songs: {},
        playlists: {},
        users: {}
      });
    }
  }

  handleSearch() {
    if (this.state.searchQuery) {
      searchDatabase(this.state.searchQuery).then(
        response => {
          let songs = {};
          let playlists = {};
          let users = {};
          if (response.songs) {
            songs = response.songs;
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
        }
      );
    }
  }

  render() {
    const { songs, playlists, users } = this.state;
    const songResults = Object.values(songs).map( song => (
      <li key={ song.id }>
        { song.title }
      </li>
    ));

    const playlistResults = Object.values(playlists).map( playlist => (
      <li key={ playlist.id }>
        { playlist.title }
      </li>
    ));

    const userResults = Object.values(users).map( user => (
      <li key={ user.id }>
        { user.username }
      </li>
    ));

    let songHeader = '';
    if (songResults.length > 0) {
      songHeader = 'Songs';
    }

    let playlistHeader = '';
    if (playlistResults.length > 0) {
      playlistHeader = 'Playlists';
    }

    let userHeader = '';
    if (userResults.length > 0) {
      userHeader = 'Users';
    }

    return(
      <div className="playlist-index-container">
        <div className="search-bar">
          <p className="search-label">Search for a Song, Playlist, User</p>
          <input
            onChange={ this.handleInput }
            className="search-query"
            id="search-query"
            type="text"
            value={ this.state.searchQuery }
            placeholder="Start typing..."
            autoFocus
            />
        </div>
        <div className="search-results">
          <div>
            { songHeader }
            { songResults }
          </div>
          <div>
            { playlistHeader }
            { playlistResults }
          </div>
          <div>
            { userHeader }
            { userResults }
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
