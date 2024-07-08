import React from "react";
import Instructor_Header from "../Instructor_landingpage/Components/Instructor_Header";
import Instructor_Sidebar from "../Instructor_landingpage/Components/Instructor_Sidebar";
import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import StarRating from "../../../../Pages/Home page/Components/styled-components/StarRating";
import { HiOutlineBookOpen, HiOutlineLightBulb } from "react-icons/hi";
import { FaUserGraduate, FaRegClock } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import course_1 from "../../../../assets/images/Category/business1.jpg";
import course_2 from "../../../../assets/images/Category/design.jpg";
import course_3 from "../../../../assets/images/Category/development.jpg";
import course_4 from "../../../../assets/images/Category/finance.jpg";

const data = [
  {
    name: "Introduction to Web Development",
    image: course_1,
    category: "Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.",
    rating: 3.5,
    numberofStudents: "32",
    numberofLessons: "23",
    quiz: "10",
    duration: "10",
    level: "Beginner",
    id: 1,
  },
  {
    name: "Introduction to Web Development",
    image: course_2,
    category: "Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.",
    rating: 4,
    numberofStudents: "37",
    numberofLessons: "34",
    quiz: "10",
    duration: "10",
    level: "Beginner",
    id: 2,
  },
  {
    name: "Introduction to Web Development",
    image: course_3,
    category: "Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.",
    rating: 4,
    numberofStudents: "53",
    numberofLessons: "43",
    quiz: "10",
    duration: "10",
    level: "Intermediate",
    id: 3,
  },
  {
    name: "Introduction to Web Development",
    image: course_4,
    category: "Design",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.",
    rating: 4,
    numberofStudents: "32",
    numberofLessons: "21",
    quiz: "10",
    duration: "10",
    level: "Advanced",
    id: 4,
  },
  {
    name: "Introduction to Web Development",
    image: course_1,
    category: "Marketing",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.",
    rating: 4,
    numberofStudents: "32",
    numberofLessons: "23",
    quiz: "10",
    duration: "10",
    level: "Beginner",
    id: 5,
  },
  {
    name: "Introduction to Web Development",
    image: course_2,
    category: "Marketing",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.",
    rating: 4,
    numberofStudents: "37",
    numberofLessons: "34",
    quiz: "10",
    duration: "10",
    level: "Beginner",
  },
  {
    name: "Introduction to Web Development",
    image: course_3,
    category: "Marketing",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.",
    rating: 4,
    numberofStudents: "53",
    numberofLessons: "43",
    quiz: "10",
    duration: "10",
    level: "Intermediate",
  },
  {
    name: "Introduction to Web Development",
    image: course_4,
    category: "Marketing",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.",
    rating: 4,
    numberofStudents: "32",
    numberofLessons: "21",
    quiz: "10",
    duration: "10",
    level: "Advanced",
  },
  {
    name: "Introduction to Web Development",
    image: course_1,
    category: "Marketing",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.",
    rating: 4,
    numberofStudents: "32",
    numberofLessons: "23",
    quiz: "10",
    duration: "10",
    level: "Beginner",
  },
  {
    name: "Introduction to Web Development",
    image: course_2,
    category: "Business",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.",
    rating: 4,
    numberofStudents: "37",
    numberofLessons: "34",
    quiz: "10",
    duration: "10",
    level: "Beginner",
  },
  {
    name: "Introduction to Web Development",
    image: course_3,
    category: "Business",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.",
    rating: 4,
    numberofStudents: "53",
    numberofLessons: "43",
    quiz: "10",
    duration: "10",
    level: "Intermediate",
  },
  {
    name: "Introduction to Web Development",
    image: course_4,
    category: "Business",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.",
    rating: 4,
    numberofStudents: "32",
    numberofLessons: "21",
    quiz: "10",
    duration: "10",
    level: "Advanced",
  },
  {
    name: "Introduction to Web Development",
    image: course_1,
    category: "Finance",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.",
    rating: 4,
    numberofStudents: "32",
    numberofLessons: "23",
    quiz: "10",
    duration: "10",
    level: "Beginner",
  },
  {
    name: "Introduction to Web Development",
    image: course_2,
    category: "Finance",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.",
    rating: 4,
    numberofStudents: "37",
    numberofLessons: "34",
    quiz: "10",
    duration: "10",
    level: "Beginner",
  },
  {
    name: "Introduction to Web Development",
    image: course_3,
    category: "Finance",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.",
    rating: 4,
    numberofStudents: "53",
    numberofLessons: "43",
    quiz: "10",
    duration: "10",
    level: "Intermediate",
  },
  {
    name: "Introduction to Web Development",
    image: course_4,
    category: "Development",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.",
    rating: 4,
    numberofStudents: "32",
    numberofLessons: "21",
    quiz: "10",
    duration: "10",
    level: "Advanced",
  },
  {
    name: "Introduction to Web Development",
    image: course_1,
    category: "Development",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.",
    rating: 4,
    numberofStudents: "32",
    numberofLessons: "23",
    quiz: "10",
    duration: "10",
    level: "Beginner",
  },
  {
    name: "Introduction to Web Development",
    image: course_2,
    category: "Development",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.",
    rating: 4,
    numberofStudents: "37",
    numberofLessons: "34",
    quiz: "10",
    duration: "10",
    level: "Beginner",
  },
  {
    name: "Introduction to Web Development",
    image: course_3,
    category: "Development",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.",
    rating: 4,
    numberofStudents: "53",
    numberofLessons: "43",
    quiz: "10",
    duration: "10",
    level: "Intermediate",
  },
  {
    name: "Introduction to Web Development",
    image: course_4,
    category: "Development",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta suscipit, sapiente tempore.",
    rating: 4,
    numberofStudents: "32",
    numberofLessons: "21",
    quiz: "10",
    duration: "10",
    level: "Advanced",
  },
];
const Instructor_course_edit = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Instructor_Header />
      <Instructor_Sidebar />
      <Button variant="filled" color="#13569D" className="mt-20 ml-[1050px]">
        Edit Course
      </Button>

      <div className="mt-5 ml-14 ">
        {data.map((d) => (
          <div className=" border-2 mt-10">
            <img className="w-[200px] h-[100px]" src={d.image} />
            <h2 className="font-bold">{d.name}</h2>
            <p className="text-sm mt-1">{d.rating}</p>
            <p>{d.numberofStudents}</p>
            <p>{d.numberofLessons}</p>
            <p>{d.category}</p>
            <p>{d.description}</p>
            <p>{d.duration}</p>
          </div>
        ))}
      </div>

      {/* {courses.map((course, index) => (
          <div
            key={index}
            className="pt-4 pl-4 bg-[#5A94D0] bg-opacity-5 shadow-xl mt-4 rounded-2xl max-w-[450px]"
          >
            <div className="flex space-x-6">
              <div>
                <img
                onClick={() => navigate("/instructor_course_edit")}
                  src={course.image}
                  alt=""
                  className="w-32 h-36 mr-6 rounded-2xl"
                />
              </div>
              <div className="space-y-2">
                <h1 className={`font-semibold`}  onClick={() => navigate("/instructor_course_edit")}>{course.name}</h1>
                <div className="ml-10 space-y-1">
                  <h1 className="flex">
                    <HiOutlineBookOpen
                      size="20x"
                      className="mr-2 size-[20px]"
                    />
                    {course.numberofLessons} Lessons
                  </h1>
                  <h1 className="flex">
                    <HiOutlineLightBulb
                      size="20x"
                      className="mr-2 size-[20px]"
                    />
                    {course.quiz} quizzes
                  </h1>
                  <h1 className="flex text-sm">
                    <FaUserGraduate size="20x" className="mr-2 size-[20px]" />
                    {course.numberofStudents} students
                  </h1>
                  <h1 className="flex">
                    <FaRegClock size="20x" className="mr-2 size-[20px]" />
                    {course.duration} hr
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex space-x-6 mt-2">
              <h1 className="font-semibold text-lg flex justify-center my-2">
                {course.level}
              </h1>
              <h1 className="my-2">
                <StarRating rating={course.rating} />
              </h1>
            </div>
          </div>
        ))} */}
    </div>
  );
};

export default Instructor_course_edit;
