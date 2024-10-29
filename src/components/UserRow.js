import React from "react";

function UserRow({ user }) {
  return (
    <tr>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.address}</td>
      <td>{user.mobile}</td>
      <td>{user.email}</td>
      <td>{user.department}</td>
      <td>{user.designation}</td>
      <td>{user.updated}</td>
    </tr>
  );
}

export default UserRow;
