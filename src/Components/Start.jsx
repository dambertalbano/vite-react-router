import React from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  // Simulated response data
  const mockUserData = {
    Status: true,
    role: "admin", // Change this to test different roles
    id: "1", // Change this id for different users
  };

  // Simulating the server request
  const simulateServerRequest = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockUserData);
      }, 1000); // Simulate server delay
    });
  };

  const handleLogin = (role) => {
    if (role === "admin") {
      navigate("/adminlogin");
    } else if (role === "student") {
      navigate("/student_login/" );
    } else if (role === "teacher") {
      navigate("/teacher_login/");
    } else {
      // Handle other roles or unexpected data
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm">
        <h2 className="text-center">Login As</h2>
        <div className="d-flex justify-content-center mt-1 mb-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              handleLogin("student");
            }}
          >
            Student
          </button>
        </div>
        <div className="d-flex justify-content-center mt-1 mb-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              handleLogin("teacher");
            }}
          >
            Teacher
          </button>
        </div>
        <div className="d-flex justify-content-center mt-1 mb-1">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              handleLogin("admin");
            }}
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;


