import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Select } from '@mantine/core';
import { FaEye, FaChalkboardTeacher } from 'react-icons/fa';
import DataTable from 'react-data-table-component';
import Admin_Side_NavBar from '../Admin_Side_NavBar/Admin_Side_NavBar';
import InstructorDetailModal from "./modals/InstructorDetailMoal";
import Admin_Header_Nav_Bar from '../Admin_Side_NavBar/Admin_Header_Nav_Bar/Admin_Header_Nav_Bar';

const List_of_Instructors = () => {
  const [openmodal, setOpenmodal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [filter, setFilter] = useState(null);
  const [instructors, setInstructors] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState(null); // Track selected instructor

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await axios.post('http://localhost:4000/instructors-list', { role: 'Instructor' }, { withCredentials: true });
        console.log('Fetched instructors:', response.data.instructorDetails); // Log the fetched data
        setInstructors(response.data.instructorDetails);
      } catch (error) {
        console.error('Error fetching instructors:', error);
      }
    };

    fetchInstructors();
  }, []);

  const courseFilter = (event) => {
    setFilter(event);
  };

  const handleViewButtonClick = (instructor) => {
    setSelectedInstructor(instructor);
    setOpenmodal(true);
  };

  const handleEnableButton = async (id, role) => {
    console.log("ID:", id, "Role:", role);

  if (!role) {
    console.error("Role is undefined!");
    return;
  }
    try {
    const response = await axios.post("http://localhost:4000/admin/activate-account", {id, role}, {withCredentials: true});
    console.log("Sending request with:", { id, role });
    console.log("Response:", response.data);  
      // Optionally refetch the student list or update the status in state
      const updatedInstructors = instructors.map((instructor) =>
        instructor.id === id
          ? { ...instructor, status: instructor.status === "Active" ? "Inactive" : "Active" }
          : instructor
      );
      setInstructors(updatedInstructors);
  
      console.log(response.data.message);
    } catch (error) {
      console.error("Error during account activation-deactivation");
      
    }
   }

  const columns = [
    {
      name: 'Instructor Name',
      selector: (row) => `${row.firstname} ${row.lastname}`, // Assuming the fetched data has firstname and lastname fields
    },
    {
      name: 'Number of Courses',
      selector: (row) => row.numberofCourses,
      sortable: true,
    },
    {
      name: 'Number of Students',
      selector: (row) => row.numberofStudents,
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      cell: (row) => (
        <span
          style={{
            backgroundColor: row.status === 'Active' ? 'green' : 'red',
            color: 'white',
            padding: '2px 8px',
            borderRadius: '20px',
            fontWeight: 'bold',
          }}
        >
          {row.status}
        </span>
      ),
    },
    {
      name: 'Action',
      cell: (row) => (
        <div className="flex">
          <Button
            onClick={() => handleViewButtonClick(row)}
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
            style={{ color: row.status === 'Active' ? 'red' : 'green' }}
          >
            {row.status === 'Active' ? 'Disable' : 'Enable'}
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
        backgroundColor: '#5A94D0',
        color: 'white',
      },
    },
    rows: {
      style: {
        backgroundColor: '#E5F1FC',
      },
    },
    sortIcon: {
      style: {
        color: 'white',
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
            <FaChalkboardTeacher className="size-20 mr-6" />{' '}
            <h1 className="font-bold text-2xl justify-center items-center my-auto">
              Instructors
            </h1>
          </div>
          <div className="flex justify-end ml-auto mr-10">
            <Select
              label="Status"
              placeholder="Please Select"
              data={['Active', 'Inactive']}
              className="w-[200px]"
              onChange={courseFilter}
            />
          </div>
        </div>
        <div className=" w-[1100px] mx-14 rounded-xl mt-6 bg-[#E5F1FC] overflow-auto">
          <DataTable
            columns={columns}
            data={instructors}
            fixedHeader
            pagination
            customStyles={customStyles}
            className="shadow-lg rounded-lg w-full"
          ></DataTable>
        </div>
        {selectedInstructor && (
          <InstructorDetailModal
            openmodal={openmodal}
            setOpenmodal={setOpenmodal}
            instructor={selectedInstructor} // Pass selected instructor to modal
          />
        )}
      </div>
    </>
  );
};

export default List_of_Instructors;

