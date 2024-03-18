import React, { useState } from "react";
import { Link } from "react-router-dom";

const Teacher = () => {
  const [teacher, setTeacher] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
  ]);

  const handleDelete = (id) => {
    setTeacher((prevTeacher) => prevTeacher.filter((t) => t.id !== id));
  };

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center addtchr">
        <h3>Teacher List</h3>
      </div>
      <Link to="/dashboard/add_teacher" className="btn btn-custom3">
        Add Teacher
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
            {teacher.map((e) => (
              <tr>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>
                  <Link
                    to={`/dashboard/edit_teacher/` + e.id}
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

export default Teacher;
