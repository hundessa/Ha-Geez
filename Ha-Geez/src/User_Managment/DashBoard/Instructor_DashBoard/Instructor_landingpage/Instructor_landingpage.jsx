import { Button } from "@mantine/core";
// import Student_Header from "../../Student_DashBoard/Student_Landing_Page/Components/Student_Header";
import Instructor_Sidebar from "./Components/Instructor_Sidebar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiBookOpenText } from "react-icons/pi";
// import student_1 from "../../../../assets/images/Student_profile/student_1.jpg";
// import course_1 from "../../../../assets/images/Course List/Course List image.jpg";
import { useState } from "react";
// import StarRating from "../../../../Pages/Home page/Components/styled-components/StarRating";
import { useNavigate } from "react-router-dom";

const Instructor_Landing_Page = () => {
  // eslint-disable-next-line no-unused-vars
  const [progress, setProgress] = useState(20);
  const navigate = useNavigate();

  return (
    <>
      <Student_Header />
      <Instructor_Sidebar />

      <div className="absolute mt-20">
        <div className="flex bg-[#5A94D0] ml-[300px] bg-opacity-10 shadow-lg p-[15px] rounded-xl">
          <div className="mr-4 ">
            <h1 className="text-[32px]">Welcome back, Mr. Kebede</h1>
            <div>
              <h1>
                Your students’ progress is{" "}
                <span className="text-blue-500 font-semibold">going well</span>
              </h1>
            </div>
          </div>
          <div>
            <Button color="#13569D" className="h-[80px] mt-12" onClick={() => navigate("/instructor_course_creation")}>
              <h1 className="text-xl">Create Course</h1>
              <IoIosArrowRoundForward className="size-[100px] mt-8" />
            </Button>
          </div>
        </div>
        <div className="flex">
          <div>
            <div>
              <div className="flex space-x-28 bg-[#5A94D0] bg-opacity-10 shadow-xl w-[450px] p-[20px] rounded-2xl ml-[100px] mt-8">
                <h1 className="flex items-center font-medium text-xl">
                  Students Progress
                </h1>
                <Button size="sm" color="#09355F" onClick={() => navigate("/instructor_student_list")}>
                  View List
                </Button>
              </div>
            </div>
            <div className="ml-[100px] w-[450px] p-[20px] bg-[#5A94D0] bg-opacity-5 shadow-xl mt-4 rounded-2xl space-y-6">
              <div className="flex">
                <img
                  src={student_1}
                  alt="profile"
                  className="size-8 rounded-full mr-8 mt-2"
                />
                <div>
                  <h1>Hundessa</h1>
                  <div className="flex">
                    <progress
                      className="w-[200px] h-3 appearance-none mr-4"
                      value={progress}
                      max="100"
                      style={{
                        //   backgroundColor: "#E7F3FF",
                        borderRadius: "5px",
                        overflow: "hidden",
                      }}
                    />
                    <h1 className="text-right text-sm mt-[-4px]">
                      {progress}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex">
                <img
                  src={student_1}
                  alt="profile"
                  className="size-8 rounded-full mr-8 mt-2"
                />
                <div>
                  <h1>Lidiya</h1>
                  <div className="flex">
                    <progress
                      className="w-[200px] h-3 appearance-none mr-4"
                      value={progress}
                      max="100"
                      style={{
                        //   backgroundColor: "#E7F3FF",
                        borderRadius: "5px",
                        overflow: "hidden",
                      }}
                    />
                    <h1 className="text-right text-sm mt-[-4px]">
                      {progress}%
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex">
                <img
                  src={student_1}
                  alt="profile"
                  className="size-8 rounded-full mr-8 mt-2"
                />
                <div>
                  <h1>Lidiya</h1>
                  <div className="flex">
                    <progress
                      className="w-[200px] h-3 appearance-none mr-4"
                      value={progress}
                      max="100"
                      style={{
                        //   backgroundColor: "#E7F3FF",
                        borderRadius: "5px",
                        overflow: "hidden",
                      }}
                    />
                    <h1 className="text-right text-sm mt-[-4px]">
                      {progress}%
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex">
                <img
                  src={student_1}
                  alt="profile"
                  className="size-8 rounded-full mr-8 mt-2"
                />
                <div>
                  <h1>Lidiya</h1>
                  <div className="flex">
                    <progress
                      className="w-[200px] h-3 appearance-none mr-4"
                      value={progress}
                      max="100"
                      style={{
                        //   backgroundColor: "#E7F3FF",
                        borderRadius: "5px",
                        overflow: "hidden",
                      }}
                    />
                    <h1 className="text-right text-sm mt-[-4px]">
                      {progress}%
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex">
                <img
                  src={student_1}
                  alt="profile"
                  className="size-8 rounded-full mr-8 mt-2"
                />
                <div>
                  <h1>Lidiya</h1>
                  <div className="flex">
                    <progress
                      className="w-[200px] h-3 appearance-none mr-4"
                      value={progress}
                      max="100"
                      style={{
                        //   backgroundColor: "#E7F3FF",
                        borderRadius: "5px",
                        overflow: "hidden",
                      }}
                    />
                    <h1 className="text-right text-sm mt-[-4px]">
                      {progress}%
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex">
                <img
                  src={student_1}
                  alt="profile"
                  className="size-8 rounded-full mr-8 mt-2"
                />
                <div>
                  <h1>Lidiya</h1>
                  <div className="flex">
                    <progress
                      className="w-[200px] h-3 appearance-none mr-4"
                      value={progress}
                      max="100"
                      style={{
                        //   backgroundColor: "#E7F3FF",
                        borderRadius: "5px",
                        overflow: "hidden",
                      }}
                    />
                    <h1 className="text-right text-sm mt-[-4px]">
                      {progress}%
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <div className="flex space-x-28 bg-[#5A94D0] bg-opacity-10 shadow-xl w-[450px] p-[20px] rounded-2xl ml-[100px] mt-8">
              <h1 className="flex items-center font-medium text-xl mr-14">
                Courses
                <PiBookOpenText className="ml-4 size-7" />
              </h1>
              <Button size="sm" color="#09355F" onClick={() => navigate("/instructor_course_list")}>
                View List
              </Button>
            </div>
            <div className="ml-[100px] bg-[#5A94D0] bg-opacity-5 shadow-xl mt-4 rounded-2xl pb-6">
              <div className="flex pt-4 pl-4 border-b-[1px] border-gray-400">
                <img src={course_1} alt="" className="size-20 mr-6" />
                <div className="space-y-1">
                  <h1>Introduction to web</h1>
                  <h1 className="max-w-[300px] text-justify text-xs">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dicta suscipit, sapiente tempore.
                  </h1>
                  <h1 className="text-sm">320 students</h1>
                  <h1>
                    <StarRating rating={3}/>
                  </h1>
                </div>
              </div>
              <div className="flex pt-4 pl-4 border-b-[1px] border-gray-400">
                <img src={course_1} alt="" className="size-20 mr-6" />
                <div className="space-y-1">
                  <h1>Introduction to web</h1>
                  <h1 className="max-w-[300px] text-justify text-xs">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dicta suscipit, sapiente tempore.
                  </h1>
                  <h1 className="text-sm">320 students</h1>
                  <h1>
                    <StarRating rating={3}/>
                  </h1>
                </div>
              </div>
              <div className="flex pt-4 pl-4 border-b-[1px] border-gray-400">
                <img src={course_1} alt="" className="size-20 mr-6" />
                <div className="space-y-1">
                  <h1>Introduction to web</h1>
                  <h1 className="max-w-[300px] text-justify text-xs">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dicta suscipit, sapiente tempore.
                  </h1>
                  <h1 className="text-sm">320 students</h1>
                  <h1>
                    <StarRating rating={3}/>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructor_Landing_Page;