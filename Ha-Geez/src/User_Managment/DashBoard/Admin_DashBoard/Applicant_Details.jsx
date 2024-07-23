import Admin_Side_NavBar from "./Admin_Side_NavBar/Admin_Side_NavBar";
import Student_Header from "./Components/Student_Header";
import { Button } from '@mantine/core';


const Applicant_Details = () => {
  return (
    <div>
      <Student_Header />
        <Admin_Side_NavBar />

      <div>
        <Button>Pending</Button>
        <Button>Approved</Button>
        <Button>Rejected</Button>

        <div>
          <div className="rounded-full bg-blue-500">A</div>
          <p>Name: </p>
          <p>Mr. Abebe Bekele</p>
          <p>Email</p>
          <p>name@gmail.com</p>
          <p>Phone Number</p>
          <p>0909090909</p>
          <p>Level of Education</p>
          <p>Degree</p>
          <p>Certificate</p>
          <Button>View</Button>
          <p>Years of Experience</p>
          <p>2years</p>
          <p>Field of Study</p>
          <p>Software Engineering</p>
          <p>Applied on 21 Jan 2024</p>

          <Button>Approve</Button>
          <Button>Reject</Button>
          <Button>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default Applicant_Details;
