import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import "./App.css"; // Global stylesheet

function App() {
  return (
    <div className="app-container">
      <h1 className="title">Student Registration</h1>
      <RegistrationForm />
    </div>
  );
}

export default App;

