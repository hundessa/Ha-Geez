/* eslint-disable react/prop-types */
import StarRating from "../../../../../Pages/Home page/Components/styled-components/StarRating";
import { HiOutlineBookOpen, HiOutlineLightBulb } from "react-icons/hi";
import { FaUserGraduate, FaRegClock } from "react-icons/fa";

const Instructor_Course_Card = ({courses}) => {
  return (
    <>
      <div className="mr-[40px] ml-[90px] grid grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="pt-4 pl-4 bg-[#5A94D0] bg-opacity-5 shadow-xl mt-4 rounded-2xl max-w-[450px]"
          >
            <div className="flex space-x-6">
              <div>
                <img
                  src={course.image}
                  alt=""
                  className="w-32 h-36 mr-6 rounded-2xl"
                />
              </div>
              <div className="space-y-2">
                <h1
                  className={`font-semibold`}
                >
                  {course.name}
                </h1>
                {/* <h1 className="max-w-[300px] text-justify text-xs">
                {course.description}
                </h1> */}
                <div className="ml-10 space-y-1">

                <h1 className="flex">
                  <HiOutlineBookOpen size="20x" className="mr-2 size-[20px]" />
                  {course.numberofLessons} Lessons
                </h1>
                <h1 className="flex">
                  <HiOutlineLightBulb size="20x" className="mr-2 size-[20px]" />
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
        ))}
      </div>
    </>
  );
};

export default Instructor_Course_Card;
