import 'bootstrap/dist/css/bootstrap.min.css';
import { A, useRoutes } from 'vite-plugin-react-pages';
import './App.css';
import AddCategory from './Components/AddCategory';
import AddEmployee from './Components/AddEmployee';
import AddTeacher from './Components/AddTeacher';
import Category from './Components/Category';
import Dashboard from './Components/Dashboard';
import EditEmployee from './Components/EditEmployee';
import EditTeacher from './Components/EditTeacher';
import Employee from './Components/Employee';
import EmployeeDetail from './Components/EmployeeDetail';
import EmployeeLogin from './Components/EmployeeLogin';
import EmployeeRegister from './Components/EmployeeRegister';
import Home from './Components/Home';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Start from './Components/Start';
import Teacher from './Components/Teacher';
import TeacherDetail from './Components/TeacherDetail';
import TeacherLogin from './Components/TeacherLogin';
import TeacherRegister from './Components/TeacherRegister';

function App() {
  return (
    <div>
      <A href="/">Home</A>
      <A href="/adminlogin">Admin Login</A>
      <A href="/employee_login">Employee Login</A>
      <A href="/teacher_login">Teacher Login</A>
      <A href="/teacher_register">Teacher Register</A>
      <A href="/employee_register">Employee Register</A>
      <A href="/dashboard">Dashboard</A>
      <A href="/dashboard/employee">Employee</A>
      <A href="/dashboard/teacher">Teacher</A>
      <A href="/dashboard/category">Category</A>
      <A href="/dashboard/profile">Profile</A>
      <A href="/dashboard/add_category">Add Category</A>
      <A href="/dashboard/add_employee">Add Employee</A>
      <A href="/dashboard/add_teacher">Add Teacher</A>

      {useRoutes([
        {
          path: '/',
          component: <Start />,
        },
        {
          path: '/adminlogin',
          component: <Login />,
        },
        {
          path: '/employee_login',
          component: <EmployeeLogin />,
        },
        {
          path: '/employee_detail/:id',
          component: <EmployeeDetail />,
        },
        {
          path: '/teacher_login',
          component: <TeacherLogin />,
        },
        {
          path: '/teacher_detail/:id',
          component: <TeacherDetail />,
        },
        {
          path: '/teacher_register',
          component: <TeacherRegister />,
        },
        {
          path: '/employee_register',
          component: <EmployeeRegister />,
        },
        {
          path: '/dashboard',
          component: <Dashboard />,
          children: [
            { path: '', component: <Home /> },
            { path: '/employee', component: <Employee /> },
            { path: '/teacher', component: <Teacher /> },
            { path: '/category', component: <Category /> },
            { path: '/profile', component: <Profile /> },
            { path: '/add_category', component: <AddCategory /> },
            { path: '/add_employee', component: <AddEmployee /> },
            { path: '/edit_employee/:id', component: <EditEmployee /> },
            { path: '/add_teacher', component: <AddTeacher /> },
            { path: '/edit_teacher/:id', component: <EditTeacher /> },
          ],
        },
      ])}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
