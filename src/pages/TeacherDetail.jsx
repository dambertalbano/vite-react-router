import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TeacherDetail = () => {
  const [teacher, setTeacher] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulated data instead of Axios call
    const mockTeacher = {
      id: id,
      name: "John Doe",
      email: "john.doe@gmail.com",
      department: "BSCS",
    };
    setTeacher(mockTeacher);
  }, [id]);

  const getStatus = () => {
    // Check if teacher is logged in
    return teacher.loggedIn ? "Inactive" : "Active";
  };

  const handleLogout = () => {
    // Simulated logout action
    localStorage.removeItem("valid");
    navigate("/");
  };

  return (
    <div className="vh-100 detailPage">
      <div className="p-3 d-flex justify-content-center shadow bg-light p-2 text-black bg-opacity-75">
        <h4 className="deetzTitle">SCC Attendance Management System</h4>
      </div>
      <div className="d-flex justify-content-center align-items-center h-65 mt-xl-5">
        <div className="p-5 pb-5 rounded w-50 h-50 border bg-light p-2 text-black bg-opacity-75 detail">
          <div className="d-flex align-items-center flex-column mt-2">
            <h3>
              <span className="bold-label">Name:</span> {teacher.name}
            </h3>
            <h3>
              <span className="bold-label">Email:</span> {teacher.email}
            </h3>
            <h3>
              <span className="bold-label">Department:</span>{" "}
              {teacher.department}
            </h3>
            <h3>
              <span className="bold-label">Status:</span> {getStatus()}
            </h3>

            <button className="btn btn-dark mt-xl-5" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetail;
