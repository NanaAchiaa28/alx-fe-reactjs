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
  const profileStyle = {
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "5px",
    width: "200px",
    textAlign: "center",
    margin: "10px auto",
  };

  return (
    <div style={profileStyle}>
      <h3>User Profile</h3>
      <p>Name: Nana Achiaa Agyemang</p>
      <p>Email: example@email.com</p>
    </div>
  );
};

export default UserProfile;
