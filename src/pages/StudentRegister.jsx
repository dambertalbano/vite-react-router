import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const StudentRegister = () => {
  const [student, setStudent] = useState({
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
    console.log("Submitted data:", student);
    navigate("/student_login");
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Student Registration</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              onChange={(e) =>
                setStudent({ ...student, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) =>
                setStudent({ ...student, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="inputPassword4"
              placeholder="Enter Password"
              onChange={(e) =>
                setStudent({ ...student, password: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="department" className="form-label">
              Department
            </label>
            <select
              name="department"
              id="department"
              className="form-select"
              onChange={(e) =>
                setStudent({ ...student, department_id: e.target.value })
              }
            >
              {department.map((c) => {
                return (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
            Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentRegister;



