import "./App.css";
import "@mantine/core/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Home_Page from "./Pages/Home page/Home_Page";
import Student_Signup from "./User_Managment/Sign_up/Student_Sign_up/Student_Signup";
import Instructor_SignUp from "./User_Managment/Sign_up/Instructor_Sign_up/Instructor_SignUp";
import Contact_Us from "./Pages/Home page/Contact_Us/Contact_Us";
import Course_Overview from "./Pages/Home page/Course_Overview/Course_Overview";
import Student_LandinPage from './User_Managment/DashBoard/Student_DashBoard/Student_Landing_Page/Student_LandinPage';
import Login from "./User_Managment/Login/Login";
import Forgot_Password from "./User_Managment/Password_Recovery/Forgot_password/Forgot_Password";
import OTP from "./User_Managment/Password_Recovery/OTP/OTP";
import Reset_Password from "./User_Managment/Password_Recovery/Reset_password/Reset_Password";
import Student_Learning from './User_Managment/DashBoard/Student_DashBoard/Student_Learning_Page/Student_Learning';
import Course_List from "./Pages/Home page/Course List/Course_List";
import Cart from "./User_Managment/DashBoard/Student_DashBoard/Student_Landing_Page/Cart";
import Student_profile_page from "./User_Managment/DashBoard/Student_DashBoard/Student_Profile_page/Student_profile_page";
import Course_List_for_student from "./Pages/Home page/Course List/Course_List_for_student";
import My_Learning from "./User_Managment/DashBoard/Student_DashBoard/Student_MyLearning_Page/My_Learning";
import List_of_Applicants from "./User_Managment/DashBoard/Admin_DashBoard/List_of_Applicants/List_of_Applicants";
import List_of_Students from "./User_Managment/DashBoard/Admin_DashBoard/List_of_Students/List_of_Students";
import Category_Creation from "./User_Managment/DashBoard/Admin_DashBoard/Category_Creation/Category_Creation";
import List_of_Courses_tobe_Approved from "./User_Managment/DashBoard/Admin_DashBoard/List_of_Courses_tobe_Approved/List_of_Courses_tobe_Approved";
import List_of_Courses from "./User_Managment/DashBoard/Admin_DashBoard/List_of_Courses/List_of_Courses";
import List_of_Categories from "./User_Managment/DashBoard/Admin_DashBoard/List_of_Categories/List_of_Categories";
import List_of_Instructors from "./User_Managment/DashBoard/Admin_DashBoard/List_of_Instructors/List_of_Instructors";
import Change_Password from "./User_Managment/Password_Recovery/Change_password/Change_Password";
import Instructor_Landing_Page from "./User_Managment/DashBoard/Instructor_DashBoard/Instructor_landingpage/Instructor_Landing_Page";
import Instructor_Course_List from "./User_Managment/DashBoard/Instructor_DashBoard/Instructor_Course_List/Instructor_Course_List";
import Instructor_Student_List from "./User_Managment/DashBoard/Instructor_DashBoard/Instructor_Student_List/Instructor_Student_List";
import Admin_Profile from "./User_Managment/DashBoard/Admin_DashBoard/Admin_Profile/Admin_Profile";
import Course_Content from "./User_Managment/DashBoard/Instructor_DashBoard/Instructor_Course_Creation/Instructor_Course_Creation/Course_Content";
import Instructor_CourseCreation from "./User_Managment/DashBoard/Instructor_DashBoard/Instructor_Course_Creation/Instructor_CourseCreation";
import Course_Description from "./User_Managment/DashBoard/Instructor_DashBoard/Instructor_Course_Creation/Instructor_Course_Creation/Course_Description";
import Admin_Dashboard from "./User_Managment/DashBoard/Admin_DashBoard/Admin_Dashboard/Admin_Dashboard";

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
          <Route path="/change_password" element={<Change_Password/>} />
          <Route path="/course_list" element ={<Course_List/>}/>
          <Route path="/student/landingpage" element={<Student_LandinPage/>}/>
          <Route path="/student/profile" element={<Student_profile_page/>}/>
          <Route path="/student/learning" element={<Student_Learning/>}/>
          <Route path="/student/cart" element ={<Cart/>}/>
          <Route path="/student/course_list" element={<Course_List_for_student/>}/>
          <Route path="/student/my_learning" element={<My_Learning/>}/>
          <Route path="/admin/dashboard" element={<Admin_Dashboard/>} />
          <Route path="/admin/applicants_list" element={<List_of_Applicants/>}/>
          <Route path="/admin/list_of_students" element={<List_of_Students/>}/>
          <Route path="/admin/category_creation" element={<Category_Creation/>} />
          <Route path="/admin/list_of_courses_tobe_approved" element={<List_of_Courses_tobe_Approved/>} />
          <Route path="/admin/list_of_courses" element={<List_of_Courses/>} />
          <Route path="/admin/list_of_categories" element={<List_of_Categories/>} />
          <Route path="/admin/list_of_instructors" element={<List_of_Instructors/>} />
          <Route path="/admin/profile" element={<Admin_Profile/>} />
          <Route path="/instructor/landingpage" element={<Instructor_Landing_Page/>}/>
          <Route path="/instructor/course_list" element={<Instructor_Course_List/>}/>
          <Route path="/instructor/student_list" element={<Instructor_Student_List/>}/>
          <Route path="/instructor/course_creation" element={<Instructor_CourseCreation/>}/>
          <Route path="/instructor/course_creation/course_content" element={<Course_Content/>} />
          <Route path="/instructor/course_creation/course_detail" element={<Course_Description/>} />
        </Routes>
      </Router>
    </MantineProvider>
   
  );
}

export default App;
