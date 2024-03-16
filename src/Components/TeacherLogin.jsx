import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const TeacherLogin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulated login process instead of Axios call
    const mockUser = {
      email: "",
      password: "",
    };
    if (
      values.email === mockUser.email &&
      values.password === mockUser.password
    ) {
      localStorage.setItem("valid", true);
      navigate("/teacher_detail/1"); // Simulated teacher id
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm">
        <div className="text-warning">{error && error}</div>
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              className="form-control rounded-0"
            />
          </div>
          <button className="btn btn-success w-100 rounded-0 mb-2">
            Log in
          </button>
        </form>
        <div className="d-flex justify-content-center mt-1 mb-1">
          <a href="/teacher_register" className="">
            Register as Teacher
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;


