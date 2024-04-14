import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [departments, setDepartments] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/teacher")
      .then((result) => {
        if (result.data.Status) {
          setTeachers(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3000/auth/department")
      .then((result) => {
        if (result.data.Status) {
          const departmentsMap = {};
          result.data.Result.forEach((department) => {
            departmentsMap[department.id] = department.name;
          });
          setDepartments(departmentsMap);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete('http://localhost:3000/auth/delete_teacher/' + id)
      .then(result => {
        if(result.data.Status) {
          setTeachers(teachers.filter(teacher => teacher.id !== id));
        } else {
          alert(result.data.Error);
        }
      });
  } 

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Teacher List</h3>
      </div>
      <Link to="/dashboard/add_teacher" className="btn btn-success">
        Add Teacher
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.name}</td>
                <td>{teacher.email}</td>
                <td>{departments[teacher.department_id]}</td>
                <td>
                  <Link
                    to={`/dashboard/edit_teacher/${teacher.id}`}
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(teacher.id)}
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
