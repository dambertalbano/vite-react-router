import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
    const {id} = useParams()
    const [employee, setStudent] = useState({
        name: "",
        email: "",
        department_id: "",
      });
      const [department, setDepartment] = useState([])
      const navigate = useNavigate()

      useEffect(()=> {
        axios.get('http://localhost:3000/auth/department')
        .then(result => {
            if(result.data.Status) {
                setDepartment(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))

        axios.get('http://localhost:3000/auth/student/'+id)
        .then(result => {
            setEmployee({
                ...employee,
                name: result.data.Result[0].name,
                email: result.data.Result[0].email,
                department_id: result.data.Result[0].department_id,
            })
        }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit_student/'+id, employee)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/student')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
    return (
      <div className="d-flex justify-content-center align-items-center h-75 mt-3">
        <div className="p-3 rounded w-50 border">
          <h3 className="text-center editStudTitle">Edit Student</h3>
          <form className="row g-1" onSubmit={handleSubmit}>
            <div className="col-12">
              <label htmlFor="inputName" className="form-label editStudLabel">
                Name
              </label>
              <input
                type="text"
                className="form-control rounded-3 form-control1"
                id="inputName"
                placeholder="Enter Name"
                value={student.name}
                onChange={(e) => setStudent({ ...student, name: e.target.value })}
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputEmail4" className="form-label editStudLabel">
                Email
              </label>
              <input
                type="email"
                className="form-control rounded-3 form-control1"
                id="inputEmail4"
                placeholder="Enter Email"
                autoComplete="off"
                value={student.email}
                onChange={(e) => setStudent({ ...student, email: e.target.value })}
              />
            </div>
            <div className="col-12">
              <label htmlFor="department" className="form-label editStudLabel">
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
              <button type="submit" className="btn btn-dark w-100 mt-4">
                Edit Student
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default EditStudent;
  

