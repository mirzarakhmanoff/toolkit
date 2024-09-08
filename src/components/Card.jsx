import React from "react";

const Card = () => {
  return (
    <div className="flex my-5   justify-start">
      <div className=" w-64 my-10 bg-white shadow-lg rounded-lg p-3 max-w-sm mx-auto flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="w-32 h-32 rounded-full border-4 border-gray-300 mb-4"
        />
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">John Doe</h2>
          <p className="text-gray-600 mt-1">Email: john.doe@example.com</p>
          <p className="text-gray-600 mt-1">Phone: (123) 456-7890</p>
          <p className="text-gray-600 mt-1">Location: New York, USA</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
