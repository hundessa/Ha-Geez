import DataTable from "react-data-table-component";
import Student_Header from "../../Student_DashBoard/Student_Landing_Page/Components/Student_Header"
import Instructor_Sidebar from "../Instructor_landingpage/Components/Instructor_Sidebar"
import { Select } from "@mantine/core";
import { listOfStudentInstructor } from "../../../../Pages/Home page/Course_Overview/Reviews/Reviews";
import { FaUserGraduate } from "react-icons/fa";
import { useMemo, useState } from "react";

const Instructor_Student_List = () => {
const [filter, setFilter] = useState()
    const studentFilter = (event) =>{
setFilter(event)
console.log(filter);
    }
    const filteredData = useMemo(() => {
        if (!filter) return listOfStudentInstructor;
        return listOfStudentInstructor.filter(student => student.courseName === filter);
      }, [filter]);

  // eslint-disable-next-line no-unused-vars
  const [progress, setProgress] = useState();
    
      const columns = [
        {
          name: "Student Name",
          selector: (row) => row.name,
        },
        {
          name: "Progress",
          selector: (row) => row.progress,
          cell: (row) => (
            <div className="flex">
                    <progress
                      className="w-[200px] h-3 appearance-none mr-4"
                      value={row.progress}
                      max="100"
                      style={{
                          backgroundColor: "#fff",
                        borderRadius: "5px",
                        overflow: "hidden",
                      }}
                    />
                    <h1 className="text-right text-sm mt-[-4px]">
                      {row.progress}%
                    </h1>
                  </div>
          )
        },
        {
            name: "Course Name",
            selector: (row) => row.courseName,
// {
//     filter ? selector: (row) => row.filter
// }
        }
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
    <Student_Header/>
    <Instructor_Sidebar/>

    <div className="absolute mt-20 ml-10">
  <div className="flex justify-center mx-auto w-[900px] bg-[#E5F1FC] pl-4 py-2 rounded-xl">
    <div className="flex">
      <FaUserGraduate className="size-20 mr-6" />
      <h1 className="font-bold text-2xl justify-center items-center my-auto">
        Students
      </h1>
    </div>
    <div className="flex justify-end ml-auto mr-10">
      <Select
        label="Course Name"
        placeholder="Please Select"
        data={[
          "The Complete Python Bootcamp From Zero to Hero in Python",
          "Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2024]",
          "100 Days of Code: The Complete Python Pro Bootcamp",
          "The Data Science Course: Complete Data Science Bootcamp 2024",
          "Python for Data Science and Machine Learning Bootcamp",
        ]}
        className="w-[200px]"
        onChange={studentFilter}
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

export default Instructor_Student_List