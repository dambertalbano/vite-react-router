import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Department = () => {
  const [department, setDepartment] = useState([]);

  // Simulated department data
  const mockDepartment = [
    { id: 1, name: "BSHM" },
    { id: 2, name: "BSCS" },
    { id: 3, name: "BSBA" },
    { id: 3, name: "BEED" },
    { id: 3, name: "BSTM" },
  ];

  // Simulate fetching department data
  const fetchDepartment = () => {
    setDepartment(mockDepartment);
  };

  useEffect(() => {
    // Call fetchDepartment on component mount
    fetchDepartment();
  }, []); // Empty dependency array to run once on mount

   return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center addDept">
        <h3>Department List</h3>
      </div>
      <Link to="/dashboard/add_department" className="btn btn-custom3">
        Add Department
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Departments</th>
            </tr>
          </thead>
          <tbody>
            {department.map((c) => (
              <tr>
                <td>{c.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Department;
