import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTeacher = () => {
  const [teacher, setTeacher] = useState({
    name: "",
    email: "",
    password: "",
    category_id: "",
  });
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching category data
    const fetchCategory = () => {
      // Mock category data
      const mockCategory = [
        { id: 1, name: "Category 1" },
        { id: 2, name: "Category 2" },
        { id: 3, name: "Category 3" },
      ];
      setCategory(mockCategory);
    };

    fetchCategory();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate adding teacher without making HTTP request
    const fakeAddTeacher = () => {
      // Check if all fields are filled
      if (
        teacher.name.trim() !== "" &&
        teacher.email.trim() !== "" &&
        teacher.password.trim() !== "" &&
        teacher.category_id.trim() !== ""
      ) {
        // Simulate success by navigating to teacher page
        navigate("/dashboard/teacher");
      } else {
        // Simulate error by showing an alert
        alert("Please fill all fields");
      }
    };

    fakeAddTeacher();
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Teacher</h3>
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
              value={teacher.name}
              onChange={(e) =>
                setTeacher({ ...teacher, name: e.target.value })
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
              value={teacher.email}
              onChange={(e) =>
                setTeacher({ ...teacher, email: e.target.value })
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
              value={teacher.password}
              onChange={(e) =>
                setTeacher({ ...teacher, password: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="form-select"
              value={teacher.category_id}
              onChange={(e) =>
                setTeacher({ ...teacher, category_id: e.target.value })
              }
            >
              <option value="">Select Category</option>
              {category.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Teacher
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeacher;
