import React from 'react';
import PlaylistIndexItem from './playlist_index_item';

class PlaylistIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylists(this.props.match.params.userId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.userId !== newProps.match.params.userId) {
      this.props.fetchPlaylists(newProps.match.params.userId);
    }
  }

  render() {
    const playlists = this.props.playlists.map( playlist => (
      <PlaylistIndexItem key={ playlist.id } playlist={ playlist }/>
    ));
    let header =
      <div className="playlist-index-header">
        <p className="playlist-index-options">browse</p>
        <h1 className="playlist-index-title">All Playlists</h1>
      </div>;

    if (this.props.match.path === "/user/:userId") {
      console.log(this.props);
      header = ``;
    }

    return(
      <div className="playlist-index-container">
        <div>
          { header }
        </div>
        <div className="playlist-index">
          <div className='playlist-index-items'>
            { playlists }
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistIndex;
