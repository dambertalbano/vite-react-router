    import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

    const EditAdmin = () => {
        const {id} = useParams()
        const [admin, setAdmin] = useState({
            email: ""
        });

        const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3000/auth/admin/'+id)
            .then(result => {
                setAdmin({
                    ...admin,
                    email: result.data.Result[0].email
                })
            }).catch(err => console.log(err))
        }, [])

        const handleSubmit = (a) => {
            a.preventDefault()
            axios.put('http://localhost:3000/auth/edit_admin/'+id, admin)
            .then(result => {
                if(result.data.Status) {
                    navigate('/dashboard/admin')
                } else {
                    alert(result.data.Error)
                }
            }).catch(err => console.log(err))
        }

    return (
        <div className="d-flex justify-content-center align-items-center mt-3">
        <div className="p-3 rounded w-50 border">
            <h3 className="text-center">Edit Admin</h3>
            <form className="row g-1" onSubmit={handleSubmit}>
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
                value={admin.email}
                onChange={(a) =>
                    setAdmin({ ...admin, email: a.target.value })
                }
                />
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-dark w-100 mt-4">
                Edit Admin
                </button>
            </div>
            </form>
        </div>
        </div>
    );
    };

    export default EditAdmin;


