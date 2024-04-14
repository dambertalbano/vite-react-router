import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [departments, setDepartments] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/student")
      .then((result) => {
        if (result.data.Status) {
          setStudents(result.data.Result);
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
      .delete('http://localhost:3000/auth/delete_student/' + id)
      .then(result => {
        if(result.data.Status) {
          setStudents(students.filter(student => student.id !== id));
        } else {
          alert(result.data.Error);
        }
      });
  } 

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
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{departments[student.department_id]}</td>
                <td>
                  <Link
                    to={`/dashboard/edit_student/${student.id}`}
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(student.id)}
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


