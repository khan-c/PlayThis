import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class UserIndexItem extends React.Component {
  handleClick = () => {
    const { history, user } = this.props;

    history.push(`/user/${user.id}`);
    document.getElementById("above-playback").scrollTo(0, 0);
  };

  render() {
    const { user } = this.props;

    // const image = { backgroundImage: `url(${user.image_url})` };

    return (
      <div className="user">
        <div className="user-profile-image-container">
          <input
            type="image"
            onClick={this.handleClick}
            className="user-avatar"
            src={user.image_url}
            alt={user.username}
          />
        </div>
        <button type="button" onClick={this.handleClick} className="user-title">
          {user.username}
        </button>
      </div>
    );
  }
}

UserIndexItem.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withRouter(UserIndexItem);
