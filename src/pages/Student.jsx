import React, { useState } from "react";
import { Link } from "react-router-dom";

const Student = () => {
  // Sample student data (replace with your actual data)
  const [student] = useState([
    { id: 1, name: "John Doe", email: "test@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    // Add more students as needed
  ]);

  const handleDelete = (id) => {
    // Implement delete functionality as needed
    console.log("Delete student with id:", id);
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
            {student.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>
                  <Link
                    to={`/dashboard/edit_student/` + e.id}
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-sm"
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



