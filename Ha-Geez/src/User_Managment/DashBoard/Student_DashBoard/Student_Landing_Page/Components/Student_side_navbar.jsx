import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
// import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi2";
import {
  MdLaptopChromebook 
} from "react-icons/md";

/* eslint-disable react/prop-types */
const Student_side_navbar = ({ setSidebarExpanded }) => {
  // const [clicked, setClicked] = useState(false);
  const navigate = useNavigate()
  // const onClick = () => {
  //   setClicked(!clicked);
  // };

  return (
    <>
      <nav
        className={`bg-[#E7F3FF] pt-6 w-[56px] h-[100vh] pb-4 hover:w-[150px] group transition-all duration-300 fixed mt-14 z-[10001]`}
        onMouseEnter={() => setSidebarExpanded(true)}
      onMouseLeave={() => setSidebarExpanded(false)}
      >
        <div className="space-y-6 ml-4">
          <Button
            variant="transparent"
            className="flex font-semibold text-gray-500 active:text-black p-0"
            onClick= {() => navigate("/student_profile")}
          >
            <FaRegUserCircle className="flex items-center my-auto size-6 mr-2" />
            <h1 className={`hidden group-hover:block`}>Profile</h1>
          </Button>
          <Button
            variant="transparent"
            className="flex font-semibold text-gray-500 active:text-black p-0"
            onClick={() => navigate("/my_learning")}
          >
            <MdLaptopChromebook className="flex items-center my-auto size-6 mr-2" />
            <h1 className={`hidden group-hover:block`}>My Learning</h1>
          </Button>
          <Button
            variant="transparent"
            className="flex font-semibold text-gray-500 active:text-black p-0"
             onClick= {() => navigate("/course_list_for_student")}
          >
            <HiOutlineBookOpen  className="flex items-center my-auto size-6 mr-2 textblack" />
            <h1 className={`hidden group-hover:block`} >Courses</h1>
           
          </Button>
          {/* <Button
            variant="transparent"
            className="flex font-semibold text-gray-500 active:text-black p-0"
          >
            <FaHeadset className="flex items-center my-auto size-6 mr-2" />
            <h1 className={`hidden group-hover:block`}>Contact us</h1>
          </Button> */}
          {/* <Button
            variant="transparent"
            onClick={onClick}
            className={`flex justify-center items-center text-gray-500 active:text-black p-0 ml-[-4px] ${
              clicked ? "block" : "hidden"
            }`}
          >
            <MdOutlineDarkMode className="size-8 cursor-pointer mr-2" />
            <h1
              onClick={onclick}
              className={`hidden group-hover:block ${
                clicked
                  ? "block group-hover:block"
                  : "hidden group-hover:hidden"
              }`}
            >
              Dark mode
            </h1>
          </Button>
          <Button
            variant="transparent"
            onClick={onClick}
            className={`flex justify-center items-center text-gray-500 active:text-black p-0 ml-[-4px] ${
              clicked ? "hidden" : "block"
            }`}
          >
            <MdOutlineLightMode className="size-8 cursor-pointer mr-2" />
            <h1
              onClick={onclick}
              className={`hidden  ${
                clicked
                  ? "hidden group-hover:hidden"
                  : "block group-hover:block"
              }`}
            >
              Light mode
            </h1>
          </Button> */}
        </div>
          {/* <Button
            variant="transparent"
            className="ml-4 p-0 mt-32 space-x-2 font-bold text-red-500"
            onClick={() => navigate("/")}
          >
            <MdLogout className="flex items-center my-auto size-6 mr-2 active:text-red-500" />
            <h1 className={`hidden group-hover:block`}>Log out</h1>
          </Button> */}
      </nav>
    </>
  );
};

export default Student_side_navbar;
