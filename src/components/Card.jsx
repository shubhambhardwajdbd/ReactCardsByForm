import React from "react";

function Card({ user, handleRemove, id }) {
  return (
    <div className="w-full flex-shrink-0 *: max-w-xs min-h-[320px] bg-white rounded-xl flex flex-col items-center p-5 shadow-lg">
      {/* Profile Image */}
      <div className="w-16 h-16 rounded-full bg-zinc-200 overflow-hidden mb-4 flex-shrink-0">
        <img
          src={user.url}
          alt={user.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* User Name */}
      <h2 className="text-lg font-bold text-center text-gray-800">
        {user.name}
      </h2>

      {/* User Email */}
      <h5 className="opacity-70 text-xs font-medium mt-1 text-center">
        {user.email}
      </h5>

      {/* About Section */}
      <p className="mt-3 text-center text-sm font-normal leading-snug tracking-tight text-gray-600 line-clamp-4">
        {user.about}
      </p>

      {/* Remove Button */}
      <button
        onClick={() => handleRemove(id)}
        className="mt-auto px-4 py-2 bg-red-500 text-white text-xs rounded-md font-medium hover:bg-red-600 transition-colors duration-200"
      >
        Remove
      </button>
    </div>
  );
}

export default Card;
