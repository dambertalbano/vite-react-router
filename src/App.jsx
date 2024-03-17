// App.jsx
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

import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/vite-react-router/",
      element: <Start />
    },
    {
      path: "/vite-react-router/adminlogin",
      element: <Login />
    },
    {
      path: "/vite-react-router/employee_login",
      element: <EmployeeLogin />
    },
    {
      path: "/vite-react-router/employee_detail/:id",
      element: <EmployeeDetail />
    },
    {
      path: "/vite-react-router/teacher_login",
      element: <TeacherLogin />
    },
    {
      path: "/vite-react-router/teacher_detail/:id",
      element: <TeacherDetail />
    },
    {
      path: "/vite-react-router/teacher_register",
      element: <TeacherRegister />
    },
    {
      path: "/vite-react-router/employee_register",
      element: <EmployeeRegister />
    },
    {
      path: "/vite-react-router/dashboard",
      element: <Dashboard />,
      children: [
        { path: "/vite-react-router/", element: <Home /> },
        { path: "/vite-react-router/employee", element: <Employee /> },
        { path: "/vite-react-router/teacher", element: <Teacher /> },
        { path: "/vite-react-router/category", element: <Category /> },
        { path: "/vite-react-router/profile", element: <Profile /> },
        { path: "/vite-react-router/add_category", element: <AddCategory /> },
        { path: "/vite-react-router/add_employee", element: <AddEmployee /> },
        { path: "/vite-react-router/edit_employee/:id", element: <EditEmployee /> },
        { path: "/vite-react-router/add_teacher", element: <AddTeacher /> },
        { path: "/vite-react-router/edit_teacher/:id", element: <EditTeacher /> }
      ]
    }
  ]);

  return (
    <RouterProvider router={router}>
      <Routes>
        <Route path="/vite-react-router/" element={<Start />} />
        <Route path="/vite-react-router/adminlogin" element={<Login />} />
        <Route path="/vite-react-router/employee_login" element={<EmployeeLogin />} />
        <Route path="/vite-react-router/employee_detail/:id" element={<EmployeeDetail />} />
        <Route path="/vite-react-router/teacher_login" element={<TeacherLogin />} />
        <Route path="/vite-react-router/teacher_detail/:id" element={<TeacherDetail />} />
        <Route path="/vite-react-router/teacher_register" element={<TeacherRegister />} />
        <Route path="/vite-react-router/employee_register" element={<EmployeeRegister />} />
        <Route path="/vite-react-router/dashboard" element={<Dashboard />}>
          <Route path="/vite-react-router/" element={<Home />} />
          <Route path="/vite-react-router/employee" element={<Employee />} />
          <Route path="/vite-react-router/teacher" element={<Teacher />} />
          <Route path="/vite-react-router/category" element={<Category />} />
          <Route path="/vite-react-router/profile" element={<Profile />} />
          <Route path="/vite-react-router/add_category" element={<AddCategory />} />
          <Route path="/vite-react-router/add_employee" element={<AddEmployee />} />
          <Route path="/vite-react-router/edit_employee/:id" element={<EditEmployee />} />
          <Route path="/vite-react-router/add_teacher" element={<AddTeacher />} />
          <Route path="/vite-react-router/edit_teacher/:id" element={<EditTeacher />} />
        </Route>
      </Routes>
    </RouterProvider>
  );
}

export default App;
