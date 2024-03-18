import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const StudentDetail = () => {
  const [student, setStudent] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulated data instead of Axios call
    const mockStudent = {
      id: id,
      name: "John Doe",
      email: "john.doe@gmail.com",
      department: "BSCS",
    };
    setStudent(mockStudent);
  }, [id]);

  const getStatus = () => {
    // Check if student is logged in
    return student.loggedIn ? "Inactive" : "Active";
  };

  const handleLogout = () => {
    // Simulated logout action
    localStorage.removeItem("valid");
    navigate("/");
  };

  return (
    <div>
      <div className="p-3 d-flex justify-content-center shadow">
        <h4 className="deetzTitle">SCC Attendance Management System</h4>
      </div>
      <div className="d-flex justify-content-center align-items-center h-65 mt-xl-5">
        <div className="p-5 pb-5 rounded w-50 h-50 border detail">
          <div className="d-flex align-items-center flex-column mt-5">
            <h3>
              <span className="bold-label">Name:</span> {student.name}
            </h3>
            <h3>
              <span className="bold-label">Email:</span> {student.email}
            </h3>
            <h3>
              <span className="bold-label">Department:</span>{" "}
              {student.department}
            </h3>
            <h3>
              <span className="bold-label">Status:</span> {getStatus()}
            </h3>

            <button className="btn btn-dark mt-xl-5" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
