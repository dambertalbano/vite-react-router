import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditTeacher = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState({
    name: "",
    email: "",
    department_id: "",
  });
  const [department, setDepartment] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Mock department data
    const mockDepartmentData = [
      { id: 1, name: "BSHM" },
      { id: 2, name: "BSCS" },
      { id: 3, name: "BSBA" },
      { id: 3, name: "BEED" },
      { id: 3, name: "BSTM" },
    ];
    setDepartment(mockDepartmentData);

    // Mock teacher data
    const mockTeacherData = {
      id: id,
      name: "John Doe",
      email: "johndoe@example.com",
      department_id: 1,
    };
    setTeacher(mockTeacherData);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock a successful response
    setTimeout(() => {
      navigate("/dashboard/teacher");
    }, 1000);
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-75 mt-5">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center editTchrTitle">Edit Teacher</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label editTchrLabel">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-3 form-control1"
              id="inputName"
              placeholder="Enter Name"
              value={teacher.name}
              onChange={(e) => setTeacher({ ...teacher, name: e.target.value })}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label editTchrLabel">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-3 form-control1"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              value={teacher.email}
              onChange={(e) => setTeacher({ ...teacher, email: e.target.value })}
            />
          </div>
          <div className="col-12">
            <label htmlFor="department" className="form-label editTchrLabel">
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
              {department.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-dark w-100 mt-4">
              Edit Teacher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTeacher;
