import React from "react";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Student_Header from "../Student_Landing_Page/Components/Student_Header";
import Student_side_navbar from "../Student_Landing_Page/Components/Student_side_navbar";
import { IoArrowBackSharp } from "react-icons/io5";
import New_Card from "../../../../Pages/Home page/Components/styled-components/New_Card";
import { courses } from "../../../../Pages/Home page/Course_Overview/Reviews/Reviews";
// import '../../../../Pages/Home page/Components/styled-components/ProgressBar.css';

const chunkArray = (array, size) => {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
};
const My_Learning = () => {
  const navigate = useNavigate();

  const chunkedCourses = chunkArray(courses, 4);
  return (
    <div>
      <Student_Header />
      <Student_side_navbar />
      <Button
        variant="transparent"
        color="#13569D"
        size="md"
        className="ml-20 mt-24"
        onClick={() => navigate("/student_landingpage")}
      >
        <IoArrowBackSharp className="size-8" />
      </Button>

      <h2 className="ml-32 font-bold text-2xl">My Learning</h2>

      <div className="flex flex-col mt-10 m-0">
        {chunkedCourses.map((courseRow, rowIndex) => (
          <div key={rowIndex} className="flex justify-center mb-7">
            {courseRow.map((course, index) => (
              <div key={index} className="ml-7 flex">
                <New_Card
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
  );
};

export default My_Learning;
