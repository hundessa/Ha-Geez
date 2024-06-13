import React from "react";
import Student_Header from "./Components/Student_Header";
import Student_side_navbar from "./Components/Student_side_navbar";

const Applicant_Details = () => {
  return (
    <div>
      <Student_Header />
      <Student_side_navbar />

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
