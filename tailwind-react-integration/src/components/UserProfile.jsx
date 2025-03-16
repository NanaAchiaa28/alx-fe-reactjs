import React from "react";

const UserProfile = () => {
  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Profile Image with hover effect */}
      <img
        src="your-image-url.jpg"
        alt="User"
        className="w-24 h-24 rounded-full mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
      />

      {/* User Name with text emphasis on hover */}
      <h2 className="mt-4 text-xl font-semibold text-gray-900 text-center hover:text-blue-500 transition-colors duration-300">
        John Doe
      </h2>

      {/* User Role */}
      <p className="text-gray-600 text-center">Software Engineer</p>

      {/* Social Links */}
      <div className="mt-4 flex justify-center space-x-4">
        <a
          href="#"
          className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
        >
          <i className="fab fa-twitter text-xl"></i>
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
        >
          <i className="fab fa-linkedin text-xl"></i>
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
        >
          <i className="fab fa-github text-xl"></i>
        </a>
      </div>

      {/* Call to Action Button */}
      <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
        Follow
      </button>
    </div>
  );
};

export default UserProfile;
