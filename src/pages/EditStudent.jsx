import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
    const { id } = useParams()
    const [student, setStudent] = useState({
        name: "",
        email: "",
        department_id: "",
    });
    const [department] = useState([
        { id: 1, name: "BSHM" },
        { id: 2, name: "BSCS" },
        { id: 3, name: "BSBA" },
        { id: 3, name: "BEED" },
        { id: 3, name: "BSTM" },
    ]);
    const navigate = useNavigate()

    useEffect(() => {
        // Simulate fetching student details
        const fetchStudentDetail = () => {
            // Simulated student data
            const fakeStudent = { id: 1, name: "John Doe", email: "john@example.com", department_id: 1 };
            if (id === '1') {
                setStudent(fakeStudent);
            }
        };

        fetchStudentDetail();
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate editing student
        console.log("Edited student:", student);
        navigate('/dashboard/student');
    };

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
    );
};

export default EditStudent;



