import { useState } from "react";

const RegistrationForm = () => {
  // Step 1: Create state for form inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  // Step 2: Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}   // ✅ Controlled component
          onChange={handleChange}     // ✅ Updates state
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}      // ✅ Controlled component
          onChange={handleChange}     // ✅ Updates state
          required
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}   // ✅ Controlled component
          onChange={handleChange}     // ✅ Updates state
          required
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
