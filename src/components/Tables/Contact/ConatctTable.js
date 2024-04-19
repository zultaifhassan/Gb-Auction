import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContact } from "../../../Features/contact/contactSlice";
import { AiTwotoneDelete } from "react-icons/ai";
import "./contact.css"

const ConatctTable = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contactMessage);
  console.log(contacts);

  useEffect(() => {
    dispatch(getAllContact());
  }, [dispatch]);

  return (
    <div className="current-table contact-table">
      <h1>Contact Form Details</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.message}</td>
              <td><AiTwotoneDelete fontSize={25} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConatctTable;
