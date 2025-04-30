import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Admin/Login.js"
import Register from './Admin/Register';
import Reset from './Admin/Reset';
import AdminDashboard from './Admin/AdminDashboard';
import AddTeacher from './Admin/AddTeacher';
import TeacherList from './Admin/TeacherList';
import ApproveStudents from './Admin/ApproveStudents';
import SLogin from "./Student/SLogin.js";
import SRegister from './Student/SRegister';
import SReset from './Student/SReset';
import SDashboard from './Student/SDashboard';
import SProfile from './Student/SProfile';
import SearchTeacher from './Student/SearchTeacher';
import BookAppointment from './Student/BookAppointment';
import SendMessage from './Student/SendMessage';
import TLogin from "./Teacher/TLogin.js";
import TRegister from './Teacher/TRegister';
import TReset from './Teacher/TReset';
import TDashboard from './Teacher/TDashboard';
import Page from './Admin/Page';
import Welcome from './WelcomePage';
import Teacher from './Teacher/Teacher';
import TeacherSchedule from './Teacher/TeacherSchedule';
import TeacherAppointments from './Teacher/TeacherAppointments';
import TeacherMessages from './Teacher/TeacherMessages';
import TeacherAllAppointments from './Teacher/TeacherAllAppointments';
import TeacherProfile from './Teacher/TeacherProfile';
import Student  from "./Student/Student";
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/admin/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
          <Route exact path="/admin/add-teacher" element={<AddTeacher />} />
          <Route exact path="/admin/teacher-list" element={<TeacherList />} />
          <Route exact path="/admin/approve-students" element={<ApproveStudents />} />
          <Route exact path="/tlogin" element={<TLogin />} />
          <Route exact path="/tregister" element={<TRegister />} />
          <Route exact path="/treset" element={<TReset />} />
          <Route exact path="/tdashboard" element={<TDashboard />} />
          <Route exact path="/slogin" element={<SLogin />} />
          <Route exact path="/sregister" element={<SRegister />} />
          <Route exact path="/sreset" element={<SReset />} />
          <Route exact path="/sdashboard" element={<SDashboard />} />
          <Route exact path="/sprofile" element={<SProfile />} />
          <Route exact path="/search-teacher" element={<SearchTeacher />} />
          <Route exact path="/book-appointment" element={<BookAppointment />} />
          <Route exact path="/send-message" element={<SendMessage />} />
          <Route exact path="/page" element={<Page />} />
          <Route exact path="/teacher" element={<Teacher />} />
          <Route exact path="/teacher/schedule" element={<TeacherSchedule />} />
          <Route exact path="/teacher/appointments" element={<TeacherAppointments />} />
          <Route exact path="/teacher/profile" element={<TeacherProfile />} />
          <Route exact path="/teacher/messages" element={<TeacherMessages />} />
          <Route exact path="/teacher/all-appointments" element={<TeacherAllAppointments />} />
          <Route exact path="/student" element={<Student />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
