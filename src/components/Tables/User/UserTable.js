import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneDelete } from "react-icons/ai";
import { getAllUsers } from "../../../Features/user/userSlice";

const UserTable = () => {
    const dispatch = useDispatch();
  const { users } = useSelector((state) => state.fetchUsers);
  console.log(users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);



  return (
    <div className="current-table product-table">
      <h1>All Users Details</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>CNIC</th>
            <th>PhONE</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.cnic}</td>
              <td>{user.phone}</td>
              <td><AiTwotoneDelete fontSize={25} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable