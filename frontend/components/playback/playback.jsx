import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import MdPrev from "react-icons/lib/md/skip-previous";
import MdNext from "react-icons/lib/md/skip-next";
import MdPause from "react-icons/lib/md/pause-circle-outline";
import MdPlay from "react-icons/lib/md/play-circle-outline";
import FaVolumeLow from "react-icons/lib/fa/volume-down";
import FaVolumeHigh from "react-icons/lib/fa/volume-up";
import FaVolumeOff from "react-icons/lib/fa/volume-off";
import parseTime from "../../util/music_util";

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
      prevVolume: 0
    };
  }

  componentDidUpdate(prevProps) {
    const { playback } = this.props;
    if (playback !== prevProps.playback) {
      this.onUpdate(playback);
    }
  }

  onUpdate = playback => {
    if (playback.isPlaying) {
      this.setState({ isPlaying: true });
    }
    if (playback.playbackQueue.length === 1) {
      this.setState({ currentSongIdx: 0 });
    }
  };

  setCurrentSong = () => {
    const { receiveCurrentSong, playback } = this.props;
    const { currentSongIdx } = this.state;
    receiveCurrentSong(playback.playbackQueue[currentSongIdx]);
  };

  togglePlay = () => {
    const { playback, receivePlayingStatus } = this.props;
    const { isPlaying } = this.state;

    if (playback.isPlaying) {
      receivePlayingStatus(false);
    }
    this.setState({ isPlaying: !isPlaying });
  };

  handlePrevious = () => {
    const { playedSeconds, currentSongIdx } = this.state;

    if (playedSeconds > 2) {
      this.player.seekTo(0);
    } else {
      this.setState({ currentSongIdx: currentSongIdx - 1 });
      if (currentSongIdx <= 0) {
        this.setState({ currentSongIdx: 0 });
      }
    }
  };

  handleNext = () => {
    const { playback, receivePlayingStatus } = this.props;
    const { currentSongIdx } = this.state;

    this.setState({ currentSongIdx: currentSongIdx + 1 });
    if (currentSongIdx >= playback.playbackQueue.length - 1) {
      this.setState({ isPlaying: false, currentSongIdx: 0 });
      receivePlayingStatus(false);
    }
  };

  setProgress = progress => {
    this.setState({
      played: progress.played,
      playedSeconds: progress.playedSeconds
    });
  };

  volumeChange = e => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  toggleMute = () => {
    const { volume, prevVolume } = this.state;

    if (volume > 0) {
      this.setState({ prevVolume: volume, volume: 0 });
    } else {
      this.setState({ volume: prevVolume });
    }
  };

  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) });
  };

  onSeekMouseUp = e => {
    this.player.seekTo(parseFloat(e.target.value));
  };

  ref = player => {
    this.player = player;
  };

  render() {
    const { playback, songs, playlists } = this.props;
    const {
      volume,
      isPlaying,
      currentSongIdx,
      playedSeconds,
      played,
      duration
    } = this.state;

    let volumeIcon;
    if (volume >= 0.5) {
      volumeIcon = <FaVolumeHigh />;
    } else if (volume < 0.5 && volume > 0) {
      volumeIcon = <FaVolumeLow />;
    } else if (volume <= 0.01) {
      volumeIcon = <FaVolumeOff />;
    }

    let isPlayingClassName = "";
    let isPaused = "hidden";
    if (isPlaying) {
      isPlayingClassName = "hidden";
      isPaused = "";
    }

    const songQ = playback.playbackQueue.slice();
    const currentSong = songs[songQ[currentSongIdx]];

    if (!currentSong) return null;

    const currentSongUrl = currentSong.song_url;

    const currentPlaylist = playlists[playback.currentPlaylist];
    let image = "";
    if (currentPlaylist) {
      if (currentPlaylist.image_url) {
        image = currentPlaylist.image_url;
      } else {
        image = currentPlaylist.first_song_image;
      }
    }

    return (
      <div className="playback">
        <div className="current-song">
          <img
            className="current-playlist-image"
            src={image}
            alt="playlist cover"
          />
          <div className="current-song-details">
            <p className="current-song-title">{currentSong.title}</p>
            <p className="current-song-artist">{currentSong.artist.name}</p>
          </div>
        </div>
        <div className="playback-controls">
          <div className="playback-buttons">
            <button
              type="button"
              onClick={this.handlePrevious}
              className="playback-previous"
            >
              <MdPrev />
            </button>
            <div className="playback-playpause">
              <MdPlay
                onClick={this.togglePlay}
                className={isPlayingClassName}
              />
              <MdPause onClick={this.togglePlay} className={isPaused} />
            </div>
            <button
              type="button"
              onClick={this.handleNext}
              className="playback-next"
            >
              <MdNext />
            </button>
          </div>
          <div className="playback-progress">
            <p className="time">{parseTime(playedSeconds)}</p>
            <input
              className="progressbar"
              type="range"
              min={0}
              max={1}
              step="any"
              value={played}
              // onMouseDown={this.onSeekMouseDown}
              onChange={this.onSeekChange}
              onMouseUp={this.onSeekMouseUp}
            />
            <p className="time">{parseTime(duration)}</p>
          </div>
        </div>
        <div className="playback-volume">
          <button
            type="button"
            className="volume-button"
            onClick={this.toggleMute}
          >
            {volumeIcon}
          </button>
          <div className="volumeslider">
            <input
              onChange={this.volumeChange}
              className="volume"
              type="range"
              min="0"
              max="1"
              step="any"
              value={volume}
            />
          </div>
        </div>
        <div className="player">
          <ReactPlayer
            ref={this.ref}
            url={currentSongUrl}
            playing={isPlaying}
            volume={volume}
            onEnded={this.handleNext}
            onStart={this.setCurrentSong}
            onProgress={this.setProgress}
            onDuration={newDuration => this.setState({ duration: newDuration })}
          />
        </div>
      </div>
    );
  }
}

Playback.propTypes = {
  receiveCurrentSong: PropTypes.func.isRequired,
  receivePlayingStatus: PropTypes.func.isRequired,
  playback: PropTypes.objectOf(PropTypes.any).isRequired,
  songs: PropTypes.objectOf(PropTypes.object).isRequired,
  playlists: PropTypes.objectOf(PropTypes.object).isRequired
};

export default Playback;
