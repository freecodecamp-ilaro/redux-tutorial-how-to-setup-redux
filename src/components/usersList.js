import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "./user";
import { fetchUsers } from "../store/users";

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <table>
      <div>{isLoading ? "Loading" : null}</div>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Phone</td>
        </tr>
      </thead>
      {!isLoading ? (
        <tbody>
          {users.map((user) => (
            <User user={user} />
          ))}
        </tbody>
      ) : (
        <div>Loading...</div>
      )}
    </table>
  );
};

export default UsersList;
