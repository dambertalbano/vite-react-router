import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  const [category, setCategory] = useState([]);

  // Simulated category data
  const mockCategory = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
  ];

  // Simulate fetching category data
  const fetchCategory = () => {
    setCategory(mockCategory);
  };

  useEffect(() => {
    // Call fetchCategory on component mount
    fetchCategory();
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Department List</h3>
      </div>
      <Link to="/dashboard/add_category" className="btn btn-success">
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
            {category.map((c) => (
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

export default Category;
