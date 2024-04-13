import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TeacherRegister = () => {
  const [teacher, setTeacher] = useState({
    name: "",
    email: "",
    password: "",
    department_id: "",
  });
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/department")
      .then((response) => {
        const { data } = response;
        if (data.Status) {
          setDepartments(data.Result);
        } else {
          alert(data.Error);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (a) => {
    a.preventDefault();
    axios
      .post("http://localhost:3000/auth/add_teacher", teacher)
      .then((response) => {
        const { data } = response;
        if (data.Status) {
          navigate("/teacher_login");
        } else {
          alert(data.Error);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (a) => {
    const { name, value } = a.target;
    setTeacher({ ...teacher, [name]: value });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="loginForm">
        <h3 className="title">Register As Teacher</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-3"
              id="inputName"
              name="name"
              placeholder="Enter Name"
              value={teacher.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-3"
              id="inputEmail4"
              name="email"
              placeholder="Enter Email"
              autoComplete="off"
              value={teacher.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-3"
              id="inputPassword4"
              name="password"
              placeholder="Enter Password"
              value={teacher.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor="department" className="form-label">
              Department
            </label>
            <select
              name="department_id"
              id="department"
              className="form-select"
              value={teacher.department_id}
              onChange={handleInputChange}
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-custom1  ">
              Add Teacher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherRegister;
