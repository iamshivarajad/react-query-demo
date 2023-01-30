import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useMutation, useQueryClient } from 'react-query'

const UserTable = ({ users }) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(
    (id) => axios.delete(`http://localhost:4000/users/${id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries()
        alert('Delete Successful!')
      },
    }
  )

  const onDelete = async (id) => {
    deleteMutation.mutateAsync(id)
  }

  const rows = users.map((user, index) => (
    <tr key={index}>
      <td>{user.id}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
      <td>{user.gender}</td>
      <td>
        <Link to={`/user/edit/${user.id}`}>
          Edit
        </Link>
        <button onClick={() => onDelete(user.id)}>
          Delete
        </button>
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