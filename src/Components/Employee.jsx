import React, { useState } from "react";
import { Link } from "react-router-dom";

const Employee = () => {
  // Sample employee data (replace with your actual data)
  const [employee] = useState([
    { id: 1, name: "John Doe", email: "test@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    // Add more employees as needed
  ]);

  const handleDelete = (id) => {
    // Implement delete functionality as needed
    console.log("Delete employee with id:", id);
  };

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <Link to="/dashboard/add_employee" className="btn btn-success">
        Add Employee
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
            {employee.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>
                  <Link
                    to={`/dashboard/edit_employee/` + e.id}
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

export default Employee;
