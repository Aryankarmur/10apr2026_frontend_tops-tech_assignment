import { useState } from "react";

function Task1() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>

      {submittedData && (
        <>
          <h3>Submitted Data</h3>

          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </>
      )}
    </div>
  );
}

export default Task1;