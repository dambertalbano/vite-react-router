import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import AddDepartment from './pages/AddDepartment';
import AddStudent from './pages/AddStudent';
import AddTeacher from './pages/AddTeacher';
import Dashboard from './pages/Dashboard';
import Department from './pages/Department';
import EditStudent from './pages/EditStudent';
import EditTeacher from './pages/EditTeacher';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Start from './pages/Start';
import Student from './pages/Student';
import StudentDetail from './pages/StudentDetail';
import StudentLogin from './pages/StudentLogin';
import StudentRegister from './pages/StudentRegister';
import Teacher from './pages/Teacher';
import TeacherDetail from './pages/TeacherDetail';
import TeacherLogin from './pages/TeacherLogin';
import TeacherRegister from './pages/TeacherRegister';

const basename = '/vite-react-router/';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/admin_login" element={<Login />} />
        <Route path="/student_login" element={<StudentLogin />} />
        <Route path="/student_detail/:id" element={<StudentDetail />} />
        <Route path="/teacher_login" element={<TeacherLogin />} />
        <Route path="/teacher_detail/:id" element={<TeacherDetail />} />
        <Route path="/teacher_register" element={<TeacherRegister />} />
        <Route path="/student_register" element={<StudentRegister />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="student" element={<Student />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="department" element={<Department />} />
          <Route path="profile" element={<Profile />} />
          <Route path="add_department" element={<AddDepartment />} />
          <Route path="add_student" element={<AddStudent />} />
          <Route path="add_teacher" element={<AddTeacher />} />
          <Route path="edit_student" element={<EditStudent />} />
          <Route path="edit_teacher" element={<EditTeacher />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

export default App;