import React from 'react';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.title !== '') {
      const playlist = Object.assign({}, this.state);
      this.props.createPlaylist(playlist).then(
        this.props.history.replace("/browse")
      );
      this.props.closeModal();
    }
  }

  render() {
    return(
      <div className="playlist-form-content">
        <h1
          className="playlist-form-exit-x"
          onClick={ this.props.closeModal }>X</h1>
        <h1 className="playlist-form-title">Create new playlist</h1>
        <form
          className="playlist-form"
          onSubmit={ this.handleSubmit } >
          <div className="playlist-form-form">
            <label className="playlist-form-label">Playlist Name</label>
            <input
              autoFocus
              className="playlist-form-input"
              onChange={ this.handleInput }
              type="text"
              name="playlist-title"
              value={ this.state.title }
              autoComplete="off"
              placeholder="Start typing..."></input>
          </div>
          <div
            className="playlist-form-buttons" >
            <input
              onClick={ this.props.closeModal }
              className="playlist-form-cancel"
              type="button"
              value="cancel" />
            <input
              className="playlist-form-create"
              type="submit"
              value="create" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlaylistForm;
