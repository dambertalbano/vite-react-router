import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    password: "",
    department_id: "",
  });
  const [department, setDepartment] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching department data
    const fetchDepartment = () => {
      // Mock department data
      const mockDepartment = [
        { id: 1, name: "BSHM" },
        { id: 2, name: "BSCS" },
        { id: 3, name: "BSBA" },
        { id: 4, name: "BEED" },
        { id: 5, name: "BSTM" },
      ];
      setDepartment(mockDepartment);
    };

    fetchDepartment();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate adding student without making HTTP request
    const fakeAddStudent = () => {
      // Check if all fields are filled
      if (
        student.name.trim() !== "" &&
        student.email.trim() !== "" &&
        student.password.trim() !== "" &&
        student.department_id.trim() !== ""
      ) {
        // Simulate success by navigating to student page
        navigate("/dashboard/student");
      } else {
        // Simulate error by showing an alert
        alert("Please fill all fields");
      }
    };

    fakeAddStudent();
  };

  return (
    <div className="d-flex justify-content-center align-items-center studentForm">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center addStudenttitle">Add Student</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label-stud">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-3 form-control1"
              id="inputName"
              placeholder="Enter Name"
              onChange={(e) => setStudent({ ...student, name: e.target.value })}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label-stud">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-3 form-control1"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) => setStudent({ ...student, email: e.target.value })}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label-stud">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-3 form-control1"
              id="inputPassword4"
              placeholder="Enter Password"
              onChange={(e) =>
                setStudent({ ...student, password: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="department" className="form-label-stud">
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
            <button type="submit" className="btn btn-dark w-100">
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
