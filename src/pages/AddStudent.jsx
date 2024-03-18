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
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Student</h3>
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
              value={student.name}
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
              value={student.email}
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
              value={student.password}
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
              value={student.department_id}
              onChange={(e) =>
                setStudent({ ...student, department_id: e.target.value })
              }
            >
              <option value="">Select Department</option>
              {department.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
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

export default AddStudent;




