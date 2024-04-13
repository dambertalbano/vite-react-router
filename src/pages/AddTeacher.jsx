import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTeacher = () => {
  const [teacher, setTeacher] = useState({
    name: "",
    email: "",
    password: "",
    department_id: "",
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

  const handleSubmit = (a) => {
    a.preventDefault()
    const formData = new FormData();
    formData.append('name', teacher.name);
    formData.append('email', teacher.email);
    formData.append('password', teacher.password);
    formData.append('department_id', teacher.department_id);

    axios.post('http://localhost:3000/auth/add_teacher', formData)
    .then(result => {
        if(result.data.Status) {
            navigate('/dashboard/teacher')
        } else {
            alert(result.data.Error)
        }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex justify-content-center align-items-center teacherForm">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center addTeachertitle">Add Teacher</h3>
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
              onChange={(a) => setTeacher({ ...teacher, name: a.target.value })}
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
              onChange={(a) => setTeacher({ ...teacher, email: a.target.value })}
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
              onChange={(a) =>
                setTeacher({ ...teacher, password: a.target.value })
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
              onChange={(a) =>
                setTeacher({ ...teacher, department_id: a.target.value })
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
              Add Teacher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeacher;




