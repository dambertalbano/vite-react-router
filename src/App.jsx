import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddCategory from "./Components/AddCategory";
import AddStudent from "./Components/AddStudent";
import AddTeacher from "./Components/AddTeacher";
import Category from "./Components/Category";
import Dashboard from "./Components/Dashboard";
import EditStudent from "./Components/EditStudent";
import EditTeacher from "./Components/EditTeacher";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Start from "./Components/Start";
import Student from "./Components/Student";
import StudentDetail from "./Components/StudentDetail";
import StudentLogin from "./Components/StudentLogin";
import StudentRegister from "./Components/StudentRegister";
import Teacher from "./Components/Teacher";
import TeacherDetail from "./Components/TeacherDetail";
import TeacherLogin from "./Components/TeacherLogin";
import TeacherRegister from "./Components/TeacherRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/adminlogin" element={<Login />}></Route>
        <Route path="/student_login" element={<StudentLogin />}></Route>
        <Route path="/student_detail/:id" element={<StudentDetail />}></Route>
        <Route path="/teacher_login" element={<TeacherLogin />}></Route>
        <Route path="/teacher_detail/:id" element={<TeacherDetail />}></Route>
        <Route path="/teacher_register" element={<TeacherRegister />}></Route>
        <Route path="/student_register" element={<StudentRegister />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/dashboard/student" element={<Student />}></Route>
          <Route path="/dashboard/teacher" element={<Teacher />}></Route>
          <Route path="/dashboard/category" element={<Category />}></Route>
          <Route path="/dashboard/profile" element={<Profile />}></Route>
          <Route
            path="/dashboard/add_category"
            element={<AddCategory />}
          ></Route>
          <Route
            path="/dashboard/add_student"
            element={<AddStudent />}
          ></Route>
          <Route
            path="/dashboard/edit_student/:id"
            element={<EditStudent />}
          ></Route>
          <Route path="/dashboard/add_teacher" element={<AddTeacher />}></Route>
          <Route
            path="/dashboard/edit_teacher/:id"
            element={<EditTeacher />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


