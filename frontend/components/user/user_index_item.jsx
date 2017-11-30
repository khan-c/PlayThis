import React from 'react';
import { withRouter } from 'react-router-dom';

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.history.push(`/user/${this.props.user.id}`);
  }

  render() {
    const { user } = this.props;

    const image = { backgroundImage: `url(${user.image_url})` };

    return(
      <div className="user">
        <div className="user-profile-image-container">
          <div
            onClick={ this.handleClick }
            className="user-avatar"
            style={ image }></div>
        </div>
        <h1
          onClick={ this.handleClick }
          className="user-title">
          { user.username }
        </h1>
      </div>
    );
  }
}

export default withRouter(UserIndexItem);
