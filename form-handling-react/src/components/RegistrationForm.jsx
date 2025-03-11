import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}  // Ensure this is present
          onChange={handleChange}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}  // Ensure this is present
          onChange={handleChange}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}  // Ensure this is present
          onChange={handleChange}
        />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
