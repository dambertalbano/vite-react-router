import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    address: "",
    department_id: "",
    image: "",
  });
  const [department, setDepartment] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/department")
      .then((result) => {
        if (result.data.Status) {
          setDepartment(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', student.name);
    formData.append('email', student.email);
    formData.append('password', student.password);
    formData.append('department_id', student.department_id);

    axios.post('http://localhost:3000/auth/add_student', formData)
    .then(result => {
        if(result.data.Status) {
            navigate('/dashboard/student')
        } else {
            alert(result.data.Error)
        }
    })
    .catch(err => console.log(err))
  }

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



