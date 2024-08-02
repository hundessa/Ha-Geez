import Admin_Header from "./Admin_Header";
import Admin_Side_NavBar from "./Admin_Side_NavBar/Admin_Side_NavBar";
import { Button } from '@mantine/core';


const Applicant_Details = () => {
  return (
    <div>
      <Admin_Header />
        <Admin_Side_NavBar />

    <div className="button-group">
      <Button variant="filled" style={{ backgroundColor: '#13569D' }}>
        Pending
      </Button>
      <Button variant="filled" style={{ backgroundColor: '#8795A5' }}>
        Approved
      </Button>
      <Button variant="filled" style={{ backgroundColor: '#8795A5' }}>
        Rejected
      </Button>
    </div>

    <div className="ml-20 mt-32">
      <div className="bg-[#D9D9D9] w-[600px] rounded-[10px] flex flex-col items-center justify-center p-4">
        <div className="rounded-full bg-blue-500 w-[100px] h-[100px] flex items-center justify-center mb-4">
          <h1 className="text-white">A</h1>
        </div>
        <div>
          <div className="flex ml-32">
            <p>Name:</p>
            <p className="ml-28">Mr. Abebe Bekele</p>
          </div>

          <div className="flex mt-4 ml-32">
            <p>Email:</p>
            <p className="ml-32">name@gmail.com</p>
          </div>

          <div className="flex mt-4 ml-32">
            <p>Phone Number:</p>
            <p className="ml-16">0909090909</p>
          </div>

          <div className="flex mt-4 ml-32">
            <p>Level of Education:</p>
            <p className="ml-10">Degree</p>
          </div>

          <div className="flex mt-4 ml-32">
            <p>Certificate:</p>
            <Button className="ml-20">View</Button>
          </div>

          <div className="flex mt-4 ml-32">
            <p>Years of Experience:</p>
            <p className="ml-8">2 years</p>
          </div>

          <div className="flex mt-4 ml-32">
            <p>Field of Study:</p>
            <p className="ml-20">Software Engineering</p>
          </div>

          <p className="mt-4 ml-2">Applied on 21 Jan 2024</p>
        </div>
      </div>
      <div className="ml-40 mt-7">
        <Button className="mx-2" variant="filled" style={{ backgroundColor: '#139D20' }}>
          Approve
        </Button>
        <Button className="mx-2" variant="filled" style={{ backgroundColor: '#AE2A2A' }}>
          Reject
        </Button>
        <Button className="mx-2">
          Close
        </Button>
      </div>
    </div>
  </div>
    // </div>
  );
};

export default Applicant_Details;
