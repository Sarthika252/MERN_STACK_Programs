import React, { useState } from "react";
import styles from "./RegistrationForm.module.css"; // CSS Module

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Student Registered: " + JSON.stringify(formData, null, 2));
    setFormData({ name: "", email: "", age: "", course: "" });
  };

  // Inline style
  const labelStyle = {
    fontWeight: "600",
  display: "block",
  marginBottom: "8px",
  color: "#2c3e50",  // dark blue-gray
  fontSize: "1rem",
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div>
        <label style={labelStyle}>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          className={styles.inputField}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label style={labelStyle}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          className={styles.inputField}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label style={labelStyle}>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          className={styles.inputField}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label style={labelStyle}>Course</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          className={styles.inputField}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className={styles.button}>
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
