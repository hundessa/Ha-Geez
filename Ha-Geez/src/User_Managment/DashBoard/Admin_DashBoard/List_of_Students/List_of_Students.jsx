import { Button, Select } from "@mantine/core";
import DataTable from "react-data-table-component";
import { FaEye, FaUserGraduate } from "react-icons/fa";
import Admin_Side_NavBar from "../Admin_Side_NavBar/Admin_Side_NavBar";
import { useMemo, useState, useEffect } from "react";
import axios from "axios";
import Admin_Header_Nav_Bar from "../Admin_Side_NavBar/Admin_Header_Nav_Bar/Admin_Header_Nav_Bar";

const List_of_Students = () => {
  const [students, setStudents] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // Fetch data from the API
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000/students-list",
          { role: "Student" },
          { withCredentials: true }
        );
        console.log("Fetched students:", response.data.studentsDetails); // Log the fetched data
        setStudents(response.data.studentsDetails);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  const handleCategoryFilter = (event) => {
    setCategoryFilter(event);
  };

  const handleStatusFilter = (event) => {
    setStatusFilter(event);
  };


  const filteredData = useMemo(() => {
    return (students || []).filter((student) => {
      return (
        (categoryFilter ? student.category === categoryFilter : true) &&
        (statusFilter ? student.status === statusFilter : true)
      );
    });
  }, [categoryFilter, statusFilter, students]);

  const handleButtonClick = (row) => {
    console.log("Button clicked for row:", row);
  };

  const handleEnableButton = async (id, role) => {
    console.log("ID:", id, "Role:", role);

    if (!role) {
      console.error("Role is undefined!");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:4000/admin/activate-account",
        { id, role },
        { withCredentials: true }
      );
      console.log("Response:", response.data);
      // Optionally refetch the student list or update the status in state
      const updatedStudents = students.map((student) =>
        student.id === id
          ? {
              ...student,
              status: student.status === "Active" ? "Inactive" : "Active",
            }
          : student
      );
      setStudents(updatedStudents);

      console.log(response.data.message);
    } catch (error) {
      console.error("Error during account activation-deactivation");
    }
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => `${row.firstname} ${row.lastname}`,
    },
    {
      name: "Instructor Name",
      selector: (row) => row.instructorName,
    },
    {
      name: "Number of Enrolled Courses",
      selector: (row) => row.numberofCourses,
      sortable: true,
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
            onClick={() => handleEnableButton(row.id, row.role)}
            variant="transparent"
            className="p-0 ml-4"
            style={{ color: row.status === "Active" ? "red" : "green" }}
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
      <Admin_Header_Nav_Bar />
      <Admin_Side_NavBar />
      <div className="absolute mt-20 ml-10">
        <div className="flex justify-center mx-auto w-[900px] bg-[#E5F1FC] pl-4 py-2 rounded-xl">
          <div className="flex">
            <FaUserGraduate className="size-20 mr-6" />{" "}
            <h1 className="font-bold text-2xl justify-center items-center my-auto">
              Students
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
              data={["Active", "Inactive"]}
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
  );
};

export default List_of_Students;
