import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TeacherRegister = () => {
  const [teacher, setTeacher] = useState({
    name: "",
    email: "",
    password: "",
    department_id: "",
  });
  const [department, setDepartment] = useState([]);
  const navigate = useNavigate();

  // Simulated department data
  const mockCategories = [
    { id: 1, name: "BSHM" },
    { id: 2, name: "BSCS" },
    { id: 3, name: "BSBA" },
    { id: 3, name: "BEED" },
    { id: 3, name: "BSTM" },
  ];

  useEffect(() => {
    // Simulating department fetch
    setDepartment(mockCategories);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating form submission
    console.log("Submitted data:", teacher);
    navigate("/teacher_login");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center addTeacherTitle">Register as Teacher</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label for="inputName" className="form-label-teacher">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-3 form-control1"
              id="inputName"
              placeholder="Enter Name"
              onChange={(e) => setTeacher({ ...teacher, name: e.target.value })}
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label-teacher">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-3 form-control1"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) =>
                setTeacher({ ...teacher, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputPassword4" className="form-label-teacher">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-3 form-control1"
              id="inputPassword4"
              placeholder="Enter Password"
              onChange={(e) =>
                setTeacher({ ...teacher, password: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="department" className="form-label-teacher">
              Department
            </label>
            <select
              name="department"
              id="department"
              className="form-select"
              onChange={(e) =>
                setTeacher({ ...teacher, department_id: e.target.value })
              }
            >
              {department.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-dark w-100 mt-4">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherRegister;
