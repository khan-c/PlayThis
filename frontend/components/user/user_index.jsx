import React from 'react';
import UserIndexItem from './user_index_item';

class UserIndex extends React.Component {

  render() {
    const users = Object.values(this.props.users).map(user => (
      <UserIndexItem key={ user.id } user={ user } />
    ));

    return(
      <div className="users-list">
        { users }
      </div>
    );
  }
}

export default UserIndex;
