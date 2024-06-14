import Admin_Side_NavBar from "./Admin_Side_NavBar/Admin_Side_NavBar";
import Student_Header from "./Components/Student_Header";
import { Button } from '@mantine/core';


const Applicant_Details = () => {
  return (
    <div>
        <Student_Header />
        <Admin_Side_NavBar />

        <div>
            <Button></Button>
            <Button></Button>
            <Button></Button>
        </div>
    </div>
  )
}

export default Applicant_Details
