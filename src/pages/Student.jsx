import React, { useState } from "react";
import { Link } from "react-router-dom";

const Student = () => {
  const [student, setStudent] = useState([
    { id: 1, name: "Yasuo Cancer", email: "cancer.yasuo@example.com" },
    { id: 2, name: "Garen Demacia", email: "garen.demacia@example.com" },
    { id: 3, name: "Darius Noxus", email: "darius.noxus@example.com" },
  ]);

  const handleDelete = (id) => {
    setStudent((prevStudent) => prevStudent.filter((t) => t.id !== id));
  };

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3 className="addstud">Student List</h3>
      </div>
      <Link to="/dashboard/add_student" className="btn btn-custom3">
        Add Student
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {student.map((e) => (
              <tr>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>
                  <Link
                    to={`/dashboard/edit_student/` + e.id}
                    className="btn btn-custom4 btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-custom5 btn-sm"
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;
