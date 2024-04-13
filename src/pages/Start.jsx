import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
useEffect;

const Start = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3000/verify")
      .then((result) => {
        if (result.data.Status) {
          if (result.data.role === "admin") {
            navigate("/dashboard");
          } else if (result.data.role === "student") {
            navigate("/student_detail/" + result.data.id);
          } else if (result.data.role === "teacher") {
            navigate("/teacher_detail/" + result.data.id);
          } else {
            // Handle other roles or unexpected data
          }
        } else {
          // Handle case where Status is falsy
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="loginForm">
        <h2 className="text-center">Sign In as</h2>
        <div className="d-flex justify-content-center mt-1 mb-1">
          <button
            type="button"
            className="btn btn-custom"
            onClick={() => {
              navigate("/teacher_login");
            }}
          >
            Teacher
          </button>
        </div>
        <div className="d-flex justify-content-center mt-1 mb-3">
          <button
            type="button"
            className="btn btn-custom"
            onClick={() => {
              navigate("/student_login");
            }}
          >
            Student
          </button>
        </div>
        <div className="d-flex justify-content-center mt-3 mb-2">
          <button
            type="button"
            className="btn btn-custom"
            onClick={() => {
              navigate("/admin_login");
            }}
          >
            Admin
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Start;
