import React from "react";
import users from "../data/users";
import UserRow from "./UserRow";

function UserTable() {
  return (
    <div className="user-table">
      <div className="table-header">
        <h2>Active Users</h2>
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserRow key={index} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
