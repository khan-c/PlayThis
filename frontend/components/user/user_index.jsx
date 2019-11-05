import React from "react";
import PropTypes from "prop-types";
import UserIndexItem from "./user_index_item";

const UserIndex = ({ users }) => {
  const usersList = Object.values(users).map(user => (
    <UserIndexItem key={user.id} user={user} />
  ));

  return <div className="users-list">{usersList}</div>;
};

UserIndex.propTypes = {
  users: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.any)
  ]).isRequired
};

export default UserIndex;
