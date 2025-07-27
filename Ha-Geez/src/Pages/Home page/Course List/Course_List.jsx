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
      <div className="absolute w-full overflow-x-hidden mt-20">
        <div className="sm:mx-auto mx-3 h-[120px] items-center justify-between bg-[#A2CBF5] flex shadow-lg shadow-black sm:mt-5 w-fit sm:px-16 px-6 rounded-lg">
          <img
            className="w-[100px] h-[80px]"
            src="src/assets/images/Course List/Course List image.jpg"
            alt="Course List"
          />
          <div className="sm:ml-20 ml-4">
            <h1 className="sm:text-2xl text-base font-bold font-playfair">
              HA-GEEZ COURSES
            </h1>
            <p className="sm:text-base text-sm">Explore Inspiring Online Courses</p>
          </div>
        </div>
        <div className="flex sm:justify-end sm:ml-auto sm:mr-10 sm:mt-0 mt-12 mx-6 justifycenter space-x-6">
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
        <div className="flex justify-center">
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
        </div>
        <div className="flex justify-center my-10">
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
