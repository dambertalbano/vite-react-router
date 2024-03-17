// App.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddCategory from "./Components/AddCategory";
import AddEmployee from "./Components/AddEmployee";
import AddTeacher from "./Components/AddTeacher";
import Category from "./Components/Category";
import Dashboard from "./Components/Dashboard";
import EditEmployee from "./Components/EditEmployee";
import EditTeacher from "./Components/EditTeacher";
import Employee from "./Components/Employee";
import EmployeeDetail from "./Components/EmployeeDetail";
import EmployeeLogin from "./Components/EmployeeLogin";
import EmployeeRegister from "./Components/EmployeeRegister";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Start from "./Components/Start";
import Teacher from "./Components/Teacher";
import TeacherDetail from "./Components/TeacherDetail";
import TeacherLogin from "./Components/TeacherLogin";
import TeacherRegister from "./Components/TeacherRegister";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/adminlogin" element={<Login />} />
      <Route path="/employee_login" element={<EmployeeLogin />} />
      <Route path="/employee_detail/:id" element={<EmployeeDetail />} />
      <Route path="/teacher_login" element={<TeacherLogin />} />
      <Route path="/teacher_detail/:id" element={<TeacherDetail />} />
      <Route path="/teacher_register" element={<TeacherRegister />} />
      <Route path="/employee_register" element={<EmployeeRegister />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/" element={<Home />} />
        <Route path="employee" element={<Employee />} />
        <Route path="teacher" element={<Teacher />} />
        <Route path="category" element={<Category />} />
        <Route path="profile" element={<Profile />} />
        <Route path="add_category" element={<AddCategory />} />
        <Route path="add_employee" element={<AddEmployee />} />
        <Route path="edit_employee/:id" element={<EditEmployee />} />
        <Route path="add_teacher" element={<AddTeacher />} />
        <Route path="edit_teacher/:id" element={<EditTeacher />} />
      </Route>
    </Routes>
  );
}

export default App;
