import React from 'react';
import { searchDatabase } from '../../util/search_api_util';
import debounce from 'lodash/debounce';
import SongIndexItemContainer from '../playlist/song_index_item_container';
import PlaylistIndexContainer from '../playlist/playlist_index_container';
import UserIndex from '../user/user_index';

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
    document.getElementById('search-query').addEventListener('keyup', debounce(this.handleSearch, 500));
  }

  componentWillUnmount() {
    document.getElementById('search-query').removeEventListener('keyup', debounce(this.handleSearch, 500));
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

    const playlistResults =
      <PlaylistIndexContainer
        searchPlaylists={ this.state.playlists }
      />;

    const userResults =
      <UserIndex
        users={ this.state.users }
      />;

    let sResults = '';
    if (songResults.length > 0) {
      sResults =
      <div className="search-section-result">
        <div className="search-header">Songs</div>
        <div className="results">
          { songResults }
        </div>
      </div>;
    }

    let pResults = '';
    if (Object.keys(this.state.playlists).length > 0) {
      pResults =
      <div className="search-section-result">
        <div className="search-header">Playlists</div>
        <div className="results">
          { playlistResults }
        </div>
      </div>;
    }

    let uResults = '';
    if (Object.keys(this.state.users).length > 0) {
      uResults =
      <div className="search-section-result">
        <div className="search-header">Users</div>
        <div className="user-results">
          { userResults }
        </div>
      </div>;
    }

    let topResults = '';
    if (pResults || sResults || uResults) {
      topResults = 'Top Results';
    }

    return(
      <div className="search">
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
          <h1 className='top-results'>{ topResults }</h1>
          { sResults }
          { pResults }
          { uResults}
        </div>
      </div>
    );
  }
}

export default Search;
