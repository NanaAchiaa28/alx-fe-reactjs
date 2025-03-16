import React from "react";

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-4 md:p-8 bg-gray-100 rounded-lg shadow-lg max-w-xs md:max-w-sm mx-auto">
      {/* Profile Image */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto"
      />

      {/* User Name */}
      <h2 className="text-lg sm:text-xl md:text-xl font-semibold mt-4">
        John Doe
      </h2>

      {/* User Bio */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center mt-2">
        Frontend Developer | React Enthusiast | UI/UX Designer
      </p>

      {/* Social Links */}
      <div className="flex space-x-4 mt-4">
        <a href="#" className="text-blue-500 hover:text-blue-700 text-lg">
          Twitter
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 text-lg">
          LinkedIn
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 text-lg">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default UserProfile;
