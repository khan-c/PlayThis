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
      isPlaying: false
    };

    this.clickPlay = this.clickPlay.bind(this);
  }

  clickPlay(e) {
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  render() {
    console.log(this.props);
    let isPlaying = "";
    let isPaused = "hidden";
    if (this.state.isPlaying) {
      isPlaying = "hidden";
      isPaused = "";
    }
    let currentSongUrl;
    if (!this.props.playback.playbackQueue) {
      currentSongUrl = "";
    } else if (!this.props.songs) {
      currentSongUrl = '';
    } else {
      const songQ = this.props.playback.playbackQueue.slice();
      currentSongUrl = this.props.songs[songQ.shift()].song_url;
      console.log(currentSongUrl);
    }

    return(
      <div className="playback">
        <div className="current-song">
          current song
        </div>
        <div className="playback-controls">
          <div className="playback-buttons">
            <div className="playback-previous">
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
            <div className="playback-next">
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
            />
        </div>
      </div>
    );
  }
}

export default Playback;
