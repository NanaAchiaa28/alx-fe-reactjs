import React from "react";
import { useUser } from "../UserContext";

const UserProfile = () => {
  const { user, setUser } = useUser();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase Age
      </button>
    </div>
  );
};

export default UserProfile;
