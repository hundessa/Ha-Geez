import { useMemo, useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { Select } from "@mantine/core";
import Student_Header from "../../Student_DashBoard/Student_Landing_Page/Components/Student_Header";
import Instructor_Sidebar from "../Instructor_landingpage/Components/Instructor_Sidebar";
import { instructorCoursesList } from "../../../../Pages/Home page/Course_Overview/Reviews/Reviews";
import Instructor_Course_Card from "./Component/Instructor_Course_Card";
import Instructor_Header from "../Instructor_landingpage/Components/Instructor_Header";

const ITEMS_PER_PAGE = 9;

const Instructor_Course_List = () => {
  
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [levelFilter, setLevelFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryFilterChange = (value) => {
    setCategoryFilter(value);
    setCurrentPage(1); // Reset to first page when category filter changes
  };

  const handleLevelFilterChange = (value) => {
    setLevelFilter(value);
    setCurrentPage(1); // Reset to first page when level filter changes
  };

  const filteredCourses = useMemo(() => {
    let filteredList = instructorCoursesList;

    if (categoryFilter) {
      filteredList = filteredList.filter(
        (course) => course.category === categoryFilter
      );
    }

    if (levelFilter) {
      filteredList = filteredList.filter(
        (course) => course.level === levelFilter
      );
    }

    return filteredList;
  }, [categoryFilter, levelFilter]);

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
  
    <>
      <Instructor_Header />
      <Instructor_Sidebar />

      <div className="absolute mt-20">
        <div className="flex justify-center mx-auto w-[900px] bg-[#E5F1FC] pl-4 py-2 rounded-xl ml-[200px]">
          <div className="flex">
            <FaUserGraduate className="size-20 mr-6" />
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
              onChange={(value) => handleCategoryFilterChange(value)}
            />
            <Select
              label="Level"
              placeholder="Please Select"
              data={[
                "Beginer",
                "Intermidiate",
                "Advanced",
              ]}
              className="w-[200px]"
              onChange={(value) => handleLevelFilterChange(value)}
            />
          </div>
        </div>
        <Instructor_Course_Card courses={paginatedCourses}/>
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Instructor_Course_List;
