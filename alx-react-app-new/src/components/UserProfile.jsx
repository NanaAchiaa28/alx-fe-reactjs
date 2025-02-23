import React from "react";

const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
import React from "react";

const UserProfile = () => {
  return (
    <div>
      <span
        style={{
          color: "blue",
          border: "2px solid blue",
          padding: "10px",
          margin: "10px",
          display: "inline-block",
        }}
      >
        User Profile
      </span>
    </div>
  );
};

export default UserProfile;
