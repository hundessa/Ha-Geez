import { useMemo, useState } from "react";
import { Button, Select } from "@mantine/core";
import Student_Header from "../../Student_DashBoard/Student_Landing_Page/Components/Student_Header";
import DataTable from "react-data-table-component";
import { listOfCourses } from "../../../../Pages/Home page/Course_Overview/Reviews/Reviews";
import { FaEye } from "react-icons/fa";
import { PiBookOpenText } from "react-icons/pi";
import Admin_Side_NavBar from "../Admin_Side_NavBar/Admin_Side_NavBar";

const List_of_Courses = () => {

  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const handleCategoryFilter = (event) => {
    setCategoryFilter(event);
  };

  const handleStatusFilter = (event) => {
    setStatusFilter(event);
  };

  const filteredData = useMemo(() => {
    return listOfCourses.filter((course) => {
      return (
        (categoryFilter ? course.category === categoryFilter : true) &&
        (statusFilter ? course.status === statusFilter : true)
      );
    });
  }, [categoryFilter, statusFilter]);


    const handleButtonClick = (row) => {
      console.log("Button clicked for row:", row);
    };
  
    const columns = [
      {
        name: "Course Name",
        selector: (row) => row.name,
      },
      {
        name: "Instructor Name",
        selector: (row) => row.instructorName,
        sortable: true
      },
      {
        name: "Number Students",
        selector: (row) => row.numberofStudents,
        sortable: true
      },
      {
        name: "Status",
        selector: (row) => row.status,
        cell: (row) => (
          <span
            style={{
              backgroundColor: row.status === "Active" ? "green" : "red",
              color: "white",
              padding: "2px 8px",
              borderRadius: "20px",
              fontWeight: "bold",
            }}
          >
            {row.status}
          </span>
        ),
      },
      {
        name: "Action",
        cell: (row) => (
          <div className="flex">
            <Button
                onClick={(row) => handleButtonClick(row)}
              variant="transparent"
              color="#1E5389"
              className="p-0"
            >
              <FaEye />
            </Button>
            <Button
                onClick={(row) => handleButtonClick(row)}
              variant="transparent"
              className="p-0 ml-4"
              style={
                { color:  row.status === "Active" ? "red" : "green",}
               }
            >
              {row.status === "Active" ? "Disable" : "Enable"}
            </Button>
          </div>
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
    <Student_Header />
<Admin_Side_NavBar/>
<div className="absolute mt-20 ml-10">
  <div className="flex justify-center mx-auto w-[900px] bg-[#E5F1FC] pl-4 py-2 rounded-xl">
    <div className="flex">
      <PiBookOpenText className="size-20 mr-6" />
      <h1 className="font-bold text-2xl justify-center items-center my-auto">
        Courses
      </h1>
    </div>
    <div className="flex justify-end ml-auto mr-10 space-x-6">
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
              onChange={handleCategoryFilter}
            />
            <Select
              label="Status"
              placeholder="Please Select"
              data={[
                "Active",
                "Inactive",
              ]}
              className="w-[200px]"
              onChange={handleStatusFilter}
            />
    </div>
  </div>
  <div className=" w-[1100px] mx-14 rounded-xl mt-6 bg-[#E5F1FC] overflow-auto">
    <DataTable
      columns={columns}
      data={filteredData}
      fixedHeader
      pagination
      customStyles={customStyles}
      className="shadow-lg rounded-lg w-full"
    ></DataTable>
  </div>
</div>
    </>
  )
}

export default List_of_Courses