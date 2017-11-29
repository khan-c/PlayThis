import React from 'react';
import ReactPlayer from 'react-player';
import MdPrev from 'react-icons/lib/md/skip-previous';
import MdNext from 'react-icons/lib/md/skip-next';
import MdPause from 'react-icons/lib/md/pause-circle-outline';
import MdPlay from 'react-icons/lib/md/play-circle-outline';
import FaVolumeLow from 'react-icons/lib/fa/volume-down';
import FaVolumeHigh from 'react-icons/lib/fa/volume-up';
import FaVolumeOff from 'react-icons/lib/fa/volume-off';
import { parseTime } from '../../util/music_util';

class Playback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      currentSongIdx: 0,
      duration: 0,
      played: 0,
      playedSeconds: 0,
      volume: 0.7,
      prevVolume: 0,
      seeking: false
    };

    this.togglePlay = this.togglePlay.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.setProgress = this.setProgress.bind(this);
    this.volumeChange = this.volumeChange.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
    this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
    this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
    this.onSeekChange = this.onSeekChange.bind(this);
    this.ref = this.ref.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.playback.isPlaying) {
      this.setState({ isPlaying: true });
    }
  }

  togglePlay(e) {
    if (this.props.playback.isPlaying) {
      this.props.receivePlayingStatus(false);
    }
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  handlePrevious() {
    if (this.state.playedSeconds > 2) {
      this.player.seekTo(0);
    } else {
      this.setState({ currentSongIdx: this.state.currentSongIdx - 1 });
      if (this.state.currentSongIdx <= 0) {
        this.setState({ currentSongIdx: 0 });
      }
    }
  }

  handleNext() {
    this.setState({ currentSongIdx: this.state.currentSongIdx + 1 });
    if (this.state.currentSongIdx >= this.props.playback.playbackQueue.length - 1) {
      this.setState({ isPlaying: false, currentSongIdx: 0 });
      this.props.receivePlayingStatus(false);
    }
  }

  setProgress(progress) {
    this.setState({
      played: progress.played,
      playedSeconds: progress.playedSeconds
    });
  }

  volumeChange(e) {
    this.setState({ volume: parseFloat(e.target.value) });
  }

  toggleMute() {
    if (this.state.volume > 0) {
      this.setState({ prevVolume: this.state.volume, volume: 0 });
    } else {
      this.setState({ volume: this.state.prevVolume });
    }
  }

  onSeekMouseDown(e) {
    this.setState({ seeking: true });
  }

  onSeekChange(e) {
    this.setState({ played: parseFloat(e.target.value) });
  }

  onSeekMouseUp(e) {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  }

  ref(player) {
    this.player = player;
  }

  render() {
    let volumeIcon;
    if (this.state.volume >= .5) {
      volumeIcon = <FaVolumeHigh />;
    } else if (this.state.volume < .5 && this.state.volume > 0) {
      volumeIcon = <FaVolumeLow />;
    } else if (this.state.volume <= 0.01){
      volumeIcon = <FaVolumeOff />;
    }

    let isPlaying = "";
    let isPaused = "hidden";
    if (this.state.isPlaying) {
      isPlaying = "hidden";
      isPaused = "";
    }

    const songQ = this.props.playback.playbackQueue.slice();
    let currentSong = this.props.songs[songQ[this.state.currentSongIdx]];

    if (!currentSong) {
      return (
        <div className="playback">
          <div className="current-song">
            <img className="current-playlist-image" src={ image } />
            <div className="current-song-details">
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
                  onClick={ this.togglePlay }
                  className={ isPlaying } />
                <MdPause
                  onClick={ this.togglePlay }
                  className={ isPaused } />
              </div>
              <div
                onClick={ this.handleNext }
                className="playback-next">
                <MdNext />
              </div>
            </div>
            <div className="playback-progress">
              <p className="time">{ parseTime(this.state.playedSeconds) }</p>
              <input
                className="progressbar"
                type='range'
                min={0}
                max={1}
                step='any'
                value={ this.state.played }
                onMouseDown={this.onSeekMouseDown}
                onChange={this.onSeekChange}
                onMouseUp={this.onSeekMouseUp}
              />
            <p className="time">{ parseTime(this.state.duration) }</p>
            </div>
          </div>
          <div className="playback-volume">
            <div
              className="volume-button"
              onClick={ this.toggleMute }>
              { volumeIcon }
            </div>
            <div className="volumeslider">
              <input
                onChange={ this.volumeChange }
                className="volume"
                type="range"
                min="0"
                max="1"
                step='any'
                value={ this.state.volume } />
            </div>
          </div>
        </div>
      );
    }

    let currentSongUrl = currentSong.song_url;

    let currentPlaylist = this.props.playlists[this.props.playback.currentPlaylist];
    let image = '';
    if (currentPlaylist) {
      image = currentPlaylist.image_url;
    }

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
                onClick={ this.togglePlay }
                className={ isPlaying } />
              <MdPause
                onClick={ this.togglePlay }
                className={ isPaused } />
            </div>
            <div
              onClick={ this.handleNext }
              className="playback-next">
              <MdNext />
            </div>
          </div>
          <div className="playback-progress">
            <p className="time">{ parseTime(this.state.playedSeconds) }</p>
            <input
              className="progressbar"
              type='range'
              min={0}
              max={1}
              step='any'
              value={ this.state.played }
              onMouseDown={this.onSeekMouseDown}
              onChange={this.onSeekChange}
              onMouseUp={this.onSeekMouseUp}
            />
          <p className="time">{ parseTime(this.state.duration) }</p>
          </div>
        </div>
        <div className="playback-volume">
          <div
            className="volume-button"
            onClick={ this.toggleMute }>
            { volumeIcon }
          </div>
          <div className="volumeslider">
            <input
              onChange={ this.volumeChange }
              className="volume"
              type="range"
              min="0"
              max="1"
              step='any'
              value={ this.state.volume } />
          </div>
        </div>
        <div className="player">
          <ReactPlayer
            ref={ this.ref }
            url={ currentSongUrl }
            playing={ this.state.isPlaying }
            volume= { this.state.volume }
            onEnded={ this.handleNext }
            onProgress={ this.setProgress }
            onDuration={duration => this.setState({ duration }) }
            />
        </div>
      </div>
    );
  }
}

export default Playback;
