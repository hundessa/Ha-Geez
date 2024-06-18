import { Button, TextInput } from "@mantine/core"
import Student_Header from "../../Student_DashBoard/Student_Landing_Page/Components/Student_Header"
import Instructor_Sidebar from "../Instructor_landingpage/Components/Instructor_Sidebar"
import Course_Creation_Sidebar from "./Instructor_Course_Creation/Component/Course_Creation_Sidebar"
import { HiPlus } from "react-icons/hi";


const Instructor_Course_Creation = () => {
  return (
    <>
    <Student_Header/>
    <Instructor_Sidebar/>
    <Course_Creation_Sidebar/>

    <div className="absolute mt-20 ml-[300px]">
      <div>
        <h1 className="font-semibold text-2xl flex justifycenter ml-12 mb-6">Intended Learners</h1>
        <h1 className="max-w-[900px] text-justify">The following descriptions will be publicly visible on your Course landing page and will have a direct impact on your course performance. These descriptions will help learners decide if your course is right for them.</h1>
      <div className="my-10">
        <h1 className="font-bold mb-2">What will your students learn in your course ?</h1>
        <TextInput variant="filled" className="mb-2"/>
        <Button variant="light"><HiPlus size="20px"/></Button>
      </div>
      </div>
    </div>
    </>
  )
}

export default Instructor_Course_Creation