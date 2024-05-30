import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home_Page from "./Pages/Home page/Home_Page";
import Student_Signup from "./User_Managment/Sign_up/Student_Sign_up/Student_Signup";
import Instructor_SignUp from "./User_Managment/Sign_up/Instructor_Sign_up/Instructor_SignUp";
import Contact_Us from "./Pages/Home page/Contact_Us/Contact_Us";

function App() {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home_Page/>} />
          <Route path="/student_signup" element={<Student_Signup/>}/>
          <Route path="/instructor_signup" element={<Instructor_SignUp/>}/>
          <Route path="/contact_us" element={<Contact_Us/>}/>
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
