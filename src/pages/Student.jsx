import React, { useState } from "react";
import { Link } from "react-router-dom";


const Student = () => {
  const [student, setStudent] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
  ]);

  const handleDelete = (id) => {
    setStudent((prevStudent) => prevStudent.filter((t) => t.id !== id));
  };

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Student List</h3>
      </div>
      <Link to="/dashboard/add_student" className="btn btn-success">
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
            {student.map((t) => (
              <tr key={t.id}>
                <td>{t.name}</td>
                <td>{t.email}</td>
                <td>
                  <Link
                    to={`/dashboard/edit_student/${t.id}`}
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(t.id)}
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


