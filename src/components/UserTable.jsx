import React from "react";
import { Link } from "react-router-dom";

// import EditIcon from "../icons/edit";
// import DeleteIcon from "../icons/delete";

const UserTable = ({users}) => {
  const rows = users.map((user, index) => (
    <tr key={index}>
      <td>{user.id}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
      <td>{user.gender}</td>
      <td>
        {/* <Link to={`/user/edit/${user.id}`}>
          <EditIcon />
        </Link>
        <button onClick={() => showDeleteModal(user.id)}>
          <DeleteIcon />
        </button> */}
      </td>
    </tr>
  ));

  return (
    <>
      <div>
        <Link to="/user/create">Create User</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}

export default UserTable