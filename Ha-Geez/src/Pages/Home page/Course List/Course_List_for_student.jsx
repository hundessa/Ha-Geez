import { useState } from "react";
import Student_Header from "../../../User_Managment/DashBoard/Student_DashBoard/Student_Landing_Page/Components/Student_Header";
import Student_side_navbar from "../../../User_Managment/DashBoard/Student_DashBoard/Student_Landing_Page/Components/Student_side_navbar";
import Course_Card from "../Components/styled-components/Course_Card";
import { courses } from "../../Home page/Course_Overview/Reviews/Reviews";

const chunkArray = (array, size) => {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
};

const Course_List_for_student = () => {
  const [filter, setFilter] = useState("All");
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const chunkedCourses = chunkArray(courses, 4);
  return (
    <>
      <Student_Header />
      <Student_side_navbar />
      <div className="absolute mt-20">
        <div className="p-2 mx-52 h-[100px] bg-[#A2CBF5] flex border-[3px]  border-black mt-5 w-[700px]">
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

        <div className="mx-52 mt-5">
          <label htmlFor="sort" className="mr-3">
            Sort By:
          </label>
          <select
            id="sort"
            value={filter}
            onChange={handleFilterChange}
            className="border p-1"
          >
            <option value="All">All</option>
            <option value="technology">(A-Z) ascending</option>
            <option value="design">(Z-A) descending</option>
          </select>
        </div>

        <div className="flex flex-col mt-10 m-0">
          {chunkedCourses.map((courseRow, rowIndex) => (
            <div key={rowIndex} className="flex justify-center mb-7">
              {courseRow.map((course, index) => (
                <div key={index} className="ml-20 flex">
                  <Course_Card
                    image={course.image}
                    title={course.title}
                    description={course.description}
                    instructorName={course.instructorName}
                    level={course.level}
                    duration={course.duration}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Course_List_for_student;
