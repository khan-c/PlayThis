import React from 'react';
import { searchDatabase } from '../../util/search_api_util';
import _ from 'lodash';
import SongIndexItemContainer from '../playlist/song_index_item_container';

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
    this.props.fetchPlaylists();
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
            Object.values(songs).forEach(song => (
              this.props.receiveSong(song)
            ));
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
      <SongIndexItemContainer
        key={ song.id }
        song={ song }
        />
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
          <div className="search-section-result">
            <div className="search-header">{ songHeader }</div>
            <div className="song-results">
              { songResults }
            </div>
          </div>
          <div className="search-section-result">
            <div className="search-header">{ playlistHeader }</div>
            { playlistResults }
          </div>
          <div className="search-section-result">
            <div className="search-header">{ userHeader }</div>
            { userResults }
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
