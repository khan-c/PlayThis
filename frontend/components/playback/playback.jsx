import React from 'react';
import ReactPlayer from 'react-player';
import MdPrev from 'react-icons/lib/md/skip-previous';
import MdNext from 'react-icons/lib/md/skip-next';
import MdPause from 'react-icons/lib/md/pause-circle-outline';
import MdPlay from 'react-icons/lib/md/play-circle-outline';

class Playback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      currentSongIdx: 0
    };

    this.clickPlay = this.clickPlay.bind(this);
    this.onSongEnd = this.onSongEnd.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  componentWillReceiveProps(newProps) {
    // console.log(newProps);
    if (newProps.playback.isPlaying) {
      this.setState({ isPlaying: true });
    }
  }

  clickPlay(e) {
    if (this.props.playback.isPlaying) {
      this.props.receivePlayingStatus(false);
    }
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  loadSong(currentSong) {
    return currentSong.song_url;
  }

  handlePrevious() {
    console.log("previous");
  }

  handleNext() {
    this.setState({ currentSongIdx: this.state.currentSongIdx + 1 });
    if (this.state.currentSongIdx === this.props.playback.playbackQueue.length - 1) {
      this.setState({ isPlaying: false, currentSongIdx: 0 });
      this.props.receivePlayingStatus(false);
    }
  }

  onSongEnd() {

  }

  render() {
    let isPlaying = "";
    let isPaused = "hidden";
    if (this.state.isPlaying) {
      isPlaying = "hidden";
      isPaused = "";
    }

    const songQ = this.props.playback.playbackQueue.slice();
    let currentSong = this.props.songs[songQ[this.state.currentSongIdx]];

    if (!currentSong) {
      return <div className="playback"></div>;
    }

    let currentSongUrl = this.loadSong(currentSong);

    // console.log(currentSong);
    let currentPlaylist = this.props.playlists[this.props.playback.currentPlaylist];
    let image = '';
    if (currentPlaylist) {
      image = currentPlaylist.image_url;
    }
    // console.log(image);

    return(
      <div className="playback">
        <div className="current-song">
          <img className="current-playlist-image" src={ image } />
          <div className="current-song-details">
            <p className="current-song-title">
              { currentSong.title }
            </p>
            <p className="current-song-artist">
              { currentSong.artist.name }
            </p>
          </div>
        </div>
        <div className="playback-controls">
          <div className="playback-buttons">
            <div
              onClick={ this.handlePrevious }
              className="playback-previous">
              <MdPrev />
            </div>
            <div className="playback-playpause">
              <MdPlay
                onClick={ this.clickPlay }
                className={ isPlaying } />
              <MdPause
                onClick={ this.clickPlay }
                className={ isPaused } />
            </div>
            <div
              onClick={ this.handleNext }
              className="playback-next">
              <MdNext />
            </div>
          </div>
          <div className="playback-progress">
            progress bar
          </div>
        </div>
        <div className="playback-volume">
          volume
        </div>
        <div className="player">
          <ReactPlayer
            url={ currentSongUrl }
            playing={ this.state.isPlaying }
            onEnded={ this.onSongEnd }
            />
        </div>
      </div>
    );
  }
}

export default Playback;
