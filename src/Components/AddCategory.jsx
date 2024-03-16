import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
    const [category, setCategory] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate adding category without making HTTP request
        const fakeAddCategory = () => {
            // Check if category is not empty
            if (category.trim() !== '') {
                // Simulate success by navigating to category page
                navigate('/dashboard/category');
            } else {
                // Simulate error by showing an alert
                alert('Please enter a category name');
            }
        };

        fakeAddCategory();
    };

    return (
        <div className='d-flex justify-content-center align-items-center h-75'>
            <div className='p-3 rounded w-25 border'>
                <h2>Add Department</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="category"><strong>Department:</strong></label>
                        <input
                            type="text"
                            name='category'
                            placeholder='Enter Category'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='form-control rounded-0'
                        />
                    </div>
                    <button className='btn btn-success w-100 rounded-0 mb-2'>Add Department</button>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;
