import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import "./App.css";
import "@mantine/core/styles.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home_Page from "./Pages/Home page/Home_Page";
import Student_Signup from "./User_Managment/Sign_up/Student_Sign_up/Student_Signup";
import Instructor_SignUp from "./User_Managment/Sign_up/Instructor_Sign_up/Instructor_SignUp";
import Contact_Us from "./Pages/Home page/Contact_Us/Contact_Us";
import Course_Overview from "./Pages/Home page/Course_Overview/Course_Overview";
import Student_LandinPage from './User_Managment/DashBoard/Student_DashBoard/Student_Landing_Page/Student_LandinPage';

function App() {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route index path="/" element={<Home_Page/>} />
          <Route path="/student_signup" element={<Student_Signup/>}/>
          <Route path="/instructor_signup" element={<Instructor_SignUp/>}/>
          <Route path="/contact_us" element={<Contact_Us/>}/>
          <Route path="/course_overview" element={<Course_Overview/>}/>
          <Route path="/student_landingpage" element={<Student_LandinPage/>}/>
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
