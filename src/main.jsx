import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from "react-router-dom";
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

const router = createBrowserRouter ([
  {
    path: "/vite-react-router/",
    element: <App />,
    children: [
      {
        path: "/vite-react-router/adminlogin",
        element: <Login />,
      },
      {
        path: "/vite-react-router/student_login",
        element: <StudentLogin />,
      },
      {
        path: "/vite-react-router/student_detail/:id",
        element: <StudentDetail />,
      },
      {
        path: "/vite-react-router/teacher_login",
        element: <TeacherLogin />,
      },
      {
        path: "/vite-react-router/teacher_detail/:id",
        element: <TeacherDetail />,
      },
      {
        path: "/vite-react-router/teacher_register",
        element: <TeacherRegister />,
      },
      {
        path: "/vite-react-router/student_register",
        element: <StudentRegister />,
      },
      {
        path: "/vite-react-router/dashboard",
        element: <Dashboard />,
      },
    ],
    path:"",
    element: <Home />,
    children: [
      {
        path: "/vite-react-router/dashboard/student",
        element: <Student />,
      },
      {
        path: "/vite-react-router/dashboard/teacher",
        element: <Teacher />,
      },
      {
        path: "/vite-react-router/dashboard/department",
        element: <Department />,
      },
      {
        path: "/vite-react-router/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/vite-react-router/dashboard/add_department",
        element: <AddDepartment />,
      },
      {
        path: "/vite-react-router/dashboard/add_student",
        element: <AddStudent />,
      },
      {
        path: "/vite-react-router/dashboard/add_teacher",
        element: <AddTeacher />,
      },
      {
        path: "/vite-react-router/dashboard/edit_student",
        element: <EditStudent />,
      },
      {
        path: "/vite-react-router/dashboard/edit_teacher",
        element: <EditTeacher />,
      },
    ]
  },
])

export default App;





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)