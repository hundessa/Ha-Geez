import { Button, Select } from "@mantine/core";
import Student_Header from "../../Student_DashBoard/Student_Landing_Page/Components/Student_Header";
import DataTable from "react-data-table-component";
import { listOfCoursestobApproved } from "../../../../Pages/Home page/Course_Overview/Reviews/Reviews";
import { useNavigate } from "react-router-dom";
import Admin_Side_NavBar from "../Admin_Side_NavBar/Admin_Side_NavBar";
import Admin_Header from "../Admin_Header";

const List_of_Courses_tobe_Approved = () => {
    const navigate = useNavigate();
  const columns = [
    {
      name: "Instructor Name",
      selector: row => row.name
    },
    {
      name: "Course Name",
      selector: row => row.coursename,
      cell: (row) => (
        <span
          style={{
            wordBreak: "20px"
          }}
        >
          {row.coursename}
        </span>
      ),
    },
    {
      name: "Course Uploaded Date",
      selector: row => row.courseUploadedDate
    },
    {
        name: "Status",
        selector: (row) => row.status,
      },
      {
        name: "Actions",
        cell: () => (
          <Button
            // onClick={() => handleButtonClick(row)}
            variant="filled"
            color="#1E5389"
            onClick={() => navigate('/list_of_courses')}
          >
            Open
          </Button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#5A94D0",
        color: "white",
      },
    },
    rows: {
      style: {
        backgroundColor: "#E5F1FC",
      },
    },
  };

  return (
    <>
      <Admin_Header />
<Admin_Side_NavBar/>
      <div className="absolute mt-20">
        <div className="flex ml-32">
          <div className="flex bg-[#E5F1FC] py-2 px-8 rounded-lg">
            <Select
              label="Category"
              placeholder="Please Select"
              data={[
                "Marketing",
                "Business",
                "Development",
                "Finance",
                "Design",
              ]}
              className="w-[200px]"
            />
            <div className="flex ml-28">
            <Select
              label="Status"
              placeholder="Please Select"
              data={["Approved", "Rejected", "Pending"]}
              className="w-[200px]"
            />
          </div>
          </div>
          <Button color="#13569D" className="flex justify-end ml-auto mr-10">
            Back
          </Button>
        </div>
        <div className="w-[1100px] mx-20 rounded-xl mt-6 bg-[#E5F1FC] overflow-auto">
          <DataTable
            columns={columns}
            data={listOfCoursestobApproved}
            fixedHeader
            pagination
            customStyles={customStyles}
            className="shadow-lg rounded-lg wfull"
          ></DataTable>
        </div>
      </div>
    </>
  );
};

export default List_of_Courses_tobe_Approved;
