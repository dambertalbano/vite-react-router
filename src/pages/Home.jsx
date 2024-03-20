import React, { useEffect, useState } from "react";

const Home = () => {
  const [adminTotal, setAdminTotal] = useState(0);
  const [studentTotal, setStudentTotal] = useState(0);
  const [teacherTotal, setTeacherTotal] = useState(0);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    // Simulating fetching admin count
    const adminCount = () => {
      // Mock admin count
      const mockAdminCount = 10;
      setAdminTotal(mockAdminCount);
    };

    // Simulating fetching student count
    const studentCount = () => {
      // Mock student count
      const mockStudentCount = 20;
      setStudentTotal(mockStudentCount);
    };

    // Simulating fetching teacher count
    const teacherCount = () => {
      // Mock teacher count
      const mockTeacherCount = 15;
      setTeacherTotal(mockTeacherCount);
    };

    // Simulating fetching admin records
    const adminRecords = () => {
      // Mock admin records
      const mockAdmins = [
        { id: 1, email: "baguan.rhodalyn@example.com" },
        { id: 2, email: "albano.dambert@example.com" },
        { id: 3, email: "jesus@example.com" },
      ];
      setAdmins(mockAdmins);
    };

    adminCount();
    studentCount();
    teacherCount();
    adminRecords();
  }, []);

  return (
    <div>
      <div className="p-3 d-flex justify-content-around mt-3">
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Admin</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>{adminTotal}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Student</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>{studentTotal}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Teacher</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>{teacherTotal}</h5>
          </div>
        </div>
      </div>
      <div className="mt-4 px-5 pt-3">
        <h3 className="adminList">List of Admins</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((a) => (
              <tr key={a.id}>
                <td>{a.email}</td>
                <td>
                  <button className="btn btn-custom4 btn-sm me-2">Edit</button>
                  <button className="btn btn-custom5 btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
