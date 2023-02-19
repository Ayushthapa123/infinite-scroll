import React from "react";

const Users = ({ user }) => {
  return (
    <div className="card-detail">
      &lt;
      <img src={user.picture.large} />
      <h3>
        {user.name.first}
        {user.name.last}
      </h3>
    </div>
  );
};

export default Users;
