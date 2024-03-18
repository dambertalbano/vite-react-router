import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Department = () => {
  const [department, setDepartment] = useState([]);

  // Simulated department data
  const mockDepartment = [
    { id: 1, name: 'Department 1' },
    { id: 2, name: 'Department 2' },
    { id: 3, name: 'Department 3' },
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
      <div className="d-flex justify-content-center">
        <h3>Department List</h3>
      </div>
      <Link to="/dashboard/add_department" className="btn btn-success">
        Add Department
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {department.map((c) => (
              <tr key={c.id}>
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


