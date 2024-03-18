import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
            { id: 1, name: 'Department 1' },
            { id: 2, name: 'Department 2' },
            { id: 3, name: 'Department 3' },
        ];
        setDepartment(mockDepartmentData);

        // Mock teacher data
        const mockTeacherData = {
            id: id,
            name: 'John Doe',
            email: 'johndoe@example.com',
            department_id: 1,
        };
        setTeacher(mockTeacherData);
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock a successful response
        setTimeout(() => {
            navigate('/dashboard/teacher');
        }, 1000);
    };

    return (
        <div className="d-flex justify-content-center align-items-center mt-3">
            <div className="p-3 rounded w-50 border">
                <h3 className="text-center">Edit Teacher</h3>
                <form className="row g-1" onSubmit={handleSubmit}>
                    <div className="col-12">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control rounded-0"
                            id="inputName"
                            placeholder="Enter Name"
                            value={teacher.name}
                            onChange={(e) => setTeacher({ ...teacher, name: e.target.value })}
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control rounded-0"
                            id="inputEmail4"
                            placeholder="Enter Email"
                            autoComplete="off"
                            value={teacher.email}
                            onChange={(e) => setTeacher({ ...teacher, email: e.target.value })}
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="department" className="form-label">Department</label>
                        <select
                            name="department"
                            id="department"
                            className="form-select"
                            onChange={(e) => setTeacher({ ...teacher, department_id: e.target.value })}
                        >
                            {department.map((c) => (
                                <option key={c.id} value={c.id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary w-100">Edit Teacher</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTeacher;


