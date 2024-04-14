import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditStudent = () => {
    const {id} = useParams()
    const [student, setStudent] = useState({
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
            setStudent({
                ...student,
                name: result.data.Result[0].name,
                email: result.data.Result[0].email,
                department_id: result.data.Result[0].department_name,
            })
        }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (a) => {
        a.preventDefault()
        axios.put('http://localhost:3000/auth/edit_student/'+id, student)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/student')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Student</h3>
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
              onChange={(a) =>
                setStudent({ ...student, name: a.target.value })
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
              onChange={(a) =>
                setStudent({ ...student, email: a.target.value })
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
              onChange={(a) => setStudent({...student, department_id: a.target.value})}
            >
              {department.map((c) => {
                return <option key={c.id} value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit Student
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditStudent


