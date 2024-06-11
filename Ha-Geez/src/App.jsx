import "./App.css";
import "@mantine/core/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home_Page from "./Pages/Home page/Home_Page";
import Student_Signup from "./User_Managment/Sign_up/Student_Sign_up/Student_Signup";
import Instructor_SignUp from "./User_Managment/Sign_up/Instructor_Sign_up/Instructor_SignUp";
import Contact_Us from "./Pages/Home page/Contact_Us/Contact_Us";
import Course_Overview from "./Pages/Home page/Course_Overview/Course_Overview";
import Student_LandinPage from './User_Managment/DashBoard/Student_DashBoard/Student_Landing_Page/Student_LandinPage';
import { MantineProvider } from "@mantine/core";
import Login from "./User_Managment/Login/Login";
import Forgot_Password from "./User_Managment/Password_Recovery/Forgot_password/Forgot_Password";
import OTP from "./User_Managment/Password_Recovery/OTP/OTP";
import Reset_Password from "./User_Managment/Password_Recovery/Reset_password/Reset_Password";
import Student_profile_page from './User_Managment/DashBoard/Student_DashBoard/Student_Profile_page/Student_profile_page';
import Student_Learning from './User_Managment/DashBoard/Student_DashBoard/Student_Learning_Page/Student_Learning';
import Course_List from "./Pages/Home page/Course List/Course_List";
import Cart from "./User_Managment/DashBoard/Student_DashBoard/Student_Landing_Page/Cart";


function App() {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home_Page />} />
          <Route path="/student_signup" element={<Student_Signup />} />
          <Route path="/instructor_signup" element={<Instructor_SignUp />} />
          <Route path="/contact_us" element={<Contact_Us />} />
          <Route path="/course_overview" element={<Course_Overview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot_password" element={<Forgot_Password />} />
          <Route path="/otp" element={<OTP/>}/>
          <Route path="/reset_password" element={<Reset_Password/>}/>
          <Route path="/student_landingpage" element={<Student_LandinPage/>}/>
          <Route path="/student_profile" element={<Student_profile_page/>}/>
          <Route path="/student_learning" element={<Student_Learning/>}/>
          <Route path="/course_list" element ={<Course_List/>}/>
          <Route path="/cart" element ={<Cart/>}/>
          
        </Routes>
      </Router>
    </MantineProvider>
   
  );
}

export default App;
