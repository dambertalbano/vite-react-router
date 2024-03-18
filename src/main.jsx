import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import "./App.css";
import './index.css';
import AddDepartment from "./pages/AddDepartment";
import AddStudent from "./pages/AddStudent";
import AddTeacher from "./pages/AddTeacher";
import Dashboard from "./pages/Dashboard";
import Department from "./pages/Department";
import EditStudent from "./pages/EditStudent";
import EditTeacher from "./pages/EditTeacher";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Student from "./pages/Student";
import StudentDetail from "./pages/StudentDetail";
import StudentLogin from "./pages/StudentLogin";
import StudentRegister from "./pages/StudentRegister";
import Teacher from "./pages/Teacher";
import TeacherDetail from "./pages/TeacherDetail";
import TeacherLogin from "./pages/TeacherLogin";
import TeacherRegister from "./pages/TeacherRegister";

// Specify basename for BrowserRouter
const basename = '/vite-react-router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="adminlogin" element={<Login />} />
          <Route path="/student_login" element={<StudentLogin />} />
          <Route path="student_detail/:id" element={<StudentDetail />} />
          <Route path="teacher_login" element={<TeacherLogin />} />
          <Route path="teacher_detail/:id" element={<TeacherDetail />} />
          <Route path="teacher_register" element={<TeacherRegister />} />
          <Route path="student_register" element={<StudentRegister />} />
          <Route path="dashboard" element={<Dashboard />}>
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
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
  