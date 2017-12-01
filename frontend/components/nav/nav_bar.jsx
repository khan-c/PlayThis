import React from 'react';
import { NavLink } from 'react-router-dom';
import FaSearch from 'react-icons/lib/fa/search';
import FaSignOut from 'react-icons/lib/fa/sign-out';
import GoGitHub from 'react-icons/lib/go/mark-github';
import FaLinkedIn from 'react-icons/lib/fa/linkedin-square';
import Modal from 'react-modal';
import PlaylistFormContainer from '../playlist/playlist_form_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  scrollToTop() {
    document.getElementById('above-playback').scrollTo(0,0);
  }

  render() {
    const currentUserPage = `/user/${this.props.user.id}`;

    return(
      <div className="nav-bar-container">
        <div className="nav-bar">
          <div className="nav-bar-header">
            <NavLink
              onClick={ this.scrollToTop }
              activeClassName="selected"
              to="/browse">
              <img className="logo" src="https://s3-us-west-1.amazonaws.com/playthismusic/images/logo-white.png" />
            </NavLink>
          </div>
          <div className="nav-bar-links">
            <NavLink
              activeClassName="selected"
              to="/search">
              <div className="nav-bar-search">
                Search
              <div className="nav-bar-mag-glass">
                <FaSearch />
                </div>
              </div>
            </NavLink>
            <NavLink
              onClick={ this.scrollToTop }
              activeClassName="selected"
              to="/browse">
              <div className="nav-bar-home">
                Home
              </div>
            </NavLink>
            <NavLink
              onClick={ this.scrollToTop }
              activeClassName="selected"
              to={ currentUserPage }>
              <div className="nav-bar-current-user-page">
                Your Music
              </div>
            </NavLink>
          </div>
          <div className="nav-bar-new-playlist">
            <p
              className="new-playlist-button"
              onClick={ this.openModal }>
              New Playlist
            </p>
          </div>
          <div className="nav-bar-user-container">
            <NavLink
              onClick={ this.scrollToTop }
              activeClassName="selected"
              className="nav-bar-user-link"
              to={ currentUserPage } >
              <div className="nav-bar-user">
                <img className="avatar" src={ this.props.user.image_url } />
                { this.props.user.username }
              </div>
            </NavLink>
            <button
              className="nav-bar-logout"
              onClick={ this.props.logout }><FaSignOut /></button>
          </div>
          <div id="my-links">
            <a href="https://github.com/khan-c/PlayThis"><GoGitHub /></a>
            <a href="https://www.linkedin.com/in/kylehchen/"><FaLinkedIn /></a>
          </div>
        </div>
        <Modal
          isOpen={ this.state.modalIsOpen }
          onRequestClose={ this.closeModal }
          className={{
            base: 'playlist-form',
            afterOpen: 'playlist-form-open',
            beforeClose: 'playlist-form-before-close'
          }}
          overlayClassName={{
            base: 'playlist-form-overlay',
            afterOpen: 'playlist-form-overlay-open',
            beforeClose: 'playlist-form-overlay-before-close'
          }}
          >
          <PlaylistFormContainer
            closeModal={ this.closeModal }/>
        </Modal>
      </div>
    );
  }
}

export default NavBar;
