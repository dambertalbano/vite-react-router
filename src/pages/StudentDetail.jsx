import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const StudentDetail = () => {
    const [student, setStudent] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Simulated data instead of Axios call
        const mockStudent = {
            id: id,
            name: 'John Doe',
            email: 'john.doe@example.com',
            category: 'BSCS'
        };
        setStudent(mockStudent);
    }, [id]);

    const handleLogout = () => {
        // Simulated logout action
        localStorage.removeItem('valid');
        navigate('/');
    };

    return (
        <div>
            <div className="p-2 d-flex justify-content-center shadow">
                <h4>Attendance Management System</h4>
            </div>
            <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
                <div className='d-flex align-items-center flex-column mt-5'>
                    <h3>Name: {student.name}</h3>
                    <h3>Email: {student.email}</h3>
                    <h3>Category: {student.category}</h3>
                </div>
                <div>
                    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default StudentDetail;




