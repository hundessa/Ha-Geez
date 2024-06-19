import { Button, Select } from "@mantine/core";
import { listOfApplicants } from "../../../../Pages/Home page/Course_Overview/Reviews/Reviews";
import Student_Header from "../../Student_DashBoard/Student_Landing_Page/Components/Student_Header";
import DataTable from "react-data-table-component";
import Admin_Side_NavBar from "../Admin_Side_NavBar/Admin_Side_NavBar";
import Admin_Header from "../Admin_Header";

const List_of_Applicants = () => {

  const handleButtonClick = (row) => {
    console.log("Button clicked for row:", row);
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Applied When",
      selector: (row) => row.appliedDate,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Actions",
      cell: () => (
        <Button
          onClick={(row) => handleButtonClick(row)}
          variant="filled"
          color="#1E5389"
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
        backgroundColor: '#5A94D0',
        color: 'white',
      },
    },
    rows: {
      style: {
        backgroundColor: '#E5F1FC',
      },
    },
  };

  return (
    <>
      <Admin_Header />
      <Admin_Side_NavBar/>
      <div className="mt-16 absolute">
        <div className="flex">
          <div className="flex ml-28">
            <Select
              label="Status"
              placeholder="Please Select"
              data={["Approved", "Rejected", "Pending"]}
              className="w-[200px]"
            />
          </div>
          <Button className="flex justify-end ml-auto mr-1 bg-[#1E5389] active:bg-[#1E5389]">
            Back
          </Button>
        </div>
          <div className=" w-[1000px] mx-28 rounded-xl mt-6">
            <DataTable
              columns={columns}
              data={listOfApplicants}
              fixedHeader
              pagination
              customStyles={customStyles}
            className="shadow-lg rounded-lg"
            ></DataTable>
          </div>
        </div>
    </>
  );
};

export default List_of_Applicants;
