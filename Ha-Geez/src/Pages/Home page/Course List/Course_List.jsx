import { useMemo, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Course_Card from "../Components/styled-components/Course_Card";
import { courses } from "../../Home page/Course_Overview/Reviews/Reviews";
import { Select } from "@mantine/core";

const ITEMS_PER_PAGE = 12;

const Course_List = () => {
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
    let filteredList = courses;

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
      <Header />
      <div className="absolute">
        <div className="p-2 mx-52 h-[100px] bg-[#A2CBF5] flex border-[3px] border-black mt-5 w-[700px]">
          <img
            className="w-[100px] h-[80px]"
            src="src/assets/images/Course List/Course List image.jpg"
            alt="Course List"
          />
          <div className="ml-20">
            <h1 className="text-2xl font-bold">HA-GEEZ COURSES</h1>
            <p>Explore Inspiring Online Courses</p>
          </div>
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
              "Technology",
            ]}
            className="w-[200px]"
            onChange={handleCategoryFilterChange}
          />
          <Select
            label="Level"
            placeholder="Please Select"
            data={["Beginer", "Advanced", "Intermidiate"]}
            className="w-[200px]"
            onChange={handleLevelFilterChange}
          />
        </div>
        {/* <div className="flex flex-col mt-10">
        {chunkedCourses.map((courseRow, rowIndex) => (
          <div key={rowIndex} className="flex justify-center mb-10 ">
            {courseRow.map((course, index) => (
              <div key={index} className="mx[-40px]">
                <Course_Card
                  image={course.image}
                  category={course.category}
                  title={course.title}
                  description={course.description}
                  instructorName={course.instructorName}
                  level={course.level}
                  price={course.price}
                  rating={course.rating}
                  duration={course.duration}
                />
              </div>
            ))}
          </div>
        ))}
      </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[-20px] mt-10 mx-10 ml-[-10px]">
          {paginatedCourses.map((course, index) => {
            return (
              <div key={index} className="my-4">
                <Course_Card
                  image={course.image}
                  category={course.category}
                  title={course.title}
                  description={course.description}
                  instructorName={course.instructorName}
                  level={course.level}
                  duration={course.duration}
                  price={course.price}
                  rating={course.rating}
                />
              </div>
            );
          })}
        </div>
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
        <Footer />
      </div>
    </>
  );
};

export default Course_List;

