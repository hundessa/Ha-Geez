import Student_Header from "../Student_DashBoard/Student_Landing_Page/Components/Student_Header";
import Admin_Side_NavBar from "./Admin_Side_NavBar/Admin_Side_NavBar";
import { Button } from '@mantine/core';

const Admin_Dashboard = () => {
  return (
    <div>
           <Student_Header />
           <Admin_Side_NavBar />

<Button variant="filled" color="#13569D">Pending</Button>
<Button variant="filled" color="#8795A5">Approved</Button>
<Button variant="filled" color="#8795A5">Rejected</Button>
    </div>
  )
}

export default Admin_Dashboard
