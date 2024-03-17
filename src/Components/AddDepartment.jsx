import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddDepartment = () => {
    const [department, setDepartment] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate adding department without making HTTP request
        const fakeAddDepartment = () => {
            // Check if department is not empty
            if (department.trim() !== '') {
                // Simulate success by navigating to department page
                navigate('/dashboard/department');
            } else {
                // Simulate error by showing an alert
                alert('Please enter a department name');
            }
        };

        fakeAddDepartment();
    };

    return (
        <div className='d-flex justify-content-center align-items-center h-75'>
            <div className='p-3 rounded w-25 border'>
                <h2>Add Department</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="department"><strong>Department:</strong></label>
                        <input
                            type="text"
                            name='department'
                            placeholder='Enter Department'
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className='form-control rounded-0'
                        />
                    </div>
                    <button className='btn btn-success w-100 rounded-0 mb-2'>Add Department</button>
                </form>
            </div>
        </div>
    );
};

export default AddDepartment;


