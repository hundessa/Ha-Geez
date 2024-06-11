import React from 'react'
import Student_Header from "./Components/Student_Header";
import Student_side_navbar from "./Components/Student_side_navbar";
import { Button } from '@mantine/core';

const Admin_Dashboard = () => {
  return (
    <div>
           <Student_Header />
           <Student_side_navbar />

<Button variant="filled" color="#13569D">Pending</Button>
<Button variant="filled" color="#8795A5">Approved</Button>
<Button variant="filled" color="#8795A5">Rejected</Button>
    </div>
  )
}

export default Admin_Dashboard
