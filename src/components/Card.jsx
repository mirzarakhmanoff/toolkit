import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from "./Modal";
import { deleteUser } from "../redux/user-slice";

const Card = () => {
  const users = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const handleDelete = (index) => {
    dispatch(deleteUser(index));
  };

  const handleEdit = (index) => {
    setModal(true);
  };

  const userDiv = users.map((userItem, index) => (
    <div className="flex justify-start" key={index}>
      <div className="w-64 h-80 mt-4 bg-white shadow-lg rounded-lg p-3 max-w-sm mx-auto flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="w-32 h-32 rounded-full border-4 border-gray-300 mb-4"
        />
        <div className="text-center flex-grow">
          <h2 className="text-2xl font-semibold text-gray-900">
            {`${userItem.fname} ${userItem.lname}`}
          </h2>
          <p className="text-gray-600 mt-1">{userItem.phone}</p>
          <p className="text-gray-600 mt-1">{userItem.gender}</p>
        </div>
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => handleEdit(index)}
            className="text-blue-500 hover:text-blue-700"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => handleDelete(index)}
            className="text-red-500 hover:text-red-700"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="flex justify-start items-center gap-4 flex-wrap">
        {userDiv}
      </div>
      <Modal modal={modal} setModal={setModal} users={users} />
    </div>
  );
};

export default Card;
