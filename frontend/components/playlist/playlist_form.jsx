import React from "react";
import PropTypes from "prop-types";
import IoClose from "react-icons/lib/io/ios-close-empty";

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleInput = e => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = e => {
    const { createPlaylist, history, closeModal } = this.props;
    const { title } = this.state;

    e.preventDefault();
    if (title !== "") {
      const playlist = { ...this.state };
      createPlaylist(playlist).then(newPlaylist =>
        history.replace(`/playlist/${newPlaylist.id}`)
      );
      closeModal();
    }
  };

  render() {
    const { closeModal } = this.props;
    const { title } = this.state;

    return (
      <div className="playlist-form-content">
        <button
          type="button"
          className="playlist-form-exit-x"
          onClick={closeModal}
        >
          <IoClose />
        </button>
        <h1 className="playlist-form-title">Create new playlist</h1>
        <form className="playlist-form" onSubmit={this.handleSubmit}>
          <div className="playlist-form-form">
            <label htmlFor="playlist-name" className="playlist-form-label">
              Playlist Name
              {/* eslint-disable jsx-a11y/no-autofocus */}
              <input
                autoFocus
                id="playlist-name"
                className="playlist-form-input"
                onChange={this.handleInput}
                type="text"
                name="playlist-title"
                value={title}
                autoComplete="off"
                placeholder="Start typing..."
              />
              {/* eslint-enable jsx-a11y/no-autofocus */}
            </label>
          </div>
          <div className="playlist-form-buttons">
            <input
              onClick={closeModal}
              className="playlist-form-cancel"
              type="button"
              value="cancel"
            />
            <input
              className="playlist-form-create"
              type="submit"
              value="create"
            />
          </div>
        </form>
      </div>
    );
  }
}

PlaylistForm.propTypes = {
  createPlaylist: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  closeModal: PropTypes.func.isRequired
};

export default PlaylistForm;
