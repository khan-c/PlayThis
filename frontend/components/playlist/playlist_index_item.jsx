import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class PlaylistIndexItem extends React.Component {
  playlistClick = () => {
    const { history, playlist } = this.props;
    history.push(`/playlist/${playlist.id}`);
  };

  playPlaylist = e => {
    e.stopPropagation();
    const {
      playlist,
      receiveCurrentPlaylist,
      receivePlaybackSongs,
      receivePlayingStatus,
      fetchSongs
    } = this.props;

    if (playlist.song_ids.length !== 0) {
      receiveCurrentPlaylist(playlist.id);
      receivePlaybackSongs(playlist.song_ids);
      fetchSongs(playlist.id);
      receivePlayingStatus(true);
    }
  };

  render() {
    const { playlist, page, title } = this.props;
    let image;
    if (!playlist.image_url) {
      if (!playlist.first_song_image) {
        image = {};
      } else {
        image = { backgroundImage: `url(${playlist.first_song_image})` };
      }
    } else {
      image = { backgroundImage: `url(${playlist.image_url})` };
    }

    return (
      <div className={page}>
        <div className="playlist-index-item">
          <button
            type="button"
            onClick={this.playlistClick}
            className="playlist-index-item-image"
          >
            <div className="playlist-image" style={image}>
              <div className="pi-hover">
                <input
                  type="image"
                  alt=">"
                  src="https://s3-us-west-1.amazonaws.com/playthismusic/images/logo.png"
                  onClick={this.playPlaylist}
                />
              </div>
            </div>
          </button>
          <button type="button" onClick={this.playlistClick} className={title}>
            {playlist.title}
          </button>
        </div>
      </div>
    );
  }
}

PlaylistIndexItem.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  playlist: PropTypes.objectOf(PropTypes.any).isRequired,
  receiveCurrentPlaylist: PropTypes.func.isRequired,
  receivePlayingStatus: PropTypes.func.isRequired,
  receivePlaybackSongs: PropTypes.func.isRequired,
  fetchSongs: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default withRouter(PlaylistIndexItem);
