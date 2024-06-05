import { Button } from "@mantine/core";
import { useState } from "react";
import { FaRegUserCircle, FaHeadset } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi2";
import {
  MdLogout,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";

const Student_side_navbar = () => {
  const [clicked, setClicked] = useState(false);
  //   const [toggleclicked, setToggleClicked] = useState()
  const onClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav
        className={`bg-[#E7F3FF] absolute pt-6 w-[56px] h-[100vh] pb-4 hover:w-[150px] group hover:ease-out hover:transition-transform hover:duration-[30000s]`}
      >
        <div className="space-y-6 ml-4">
          <Button
            variant="transparent"
            className="flex font-semibold text-gray-500 active:text-black p-0"
          >
            <FaRegUserCircle className="flex items-center my-auto size-6 mr-2" />
            <h1 className={`hidden group-hover:block`}>Profile</h1>
          </Button>
          <Button
            variant="transparent"
            className="flex font-semibold text-gray-500 active:text-black p-0"
          >
            <HiOutlineBookOpen className="flex items-center my-auto size-6 mr-2" />
            <h1 className={`hidden group-hover:block`}>Courses</h1>
          </Button>
          <Button
            variant="transparent"
            className="flex font-semibold text-gray-500 active:text-black p-0"
          >
            <FaRegMessage className="flex items-center my-auto size-6 mr-2 textblack" />
            <h1 className={`hidden group-hover:block`}>Chat</h1>
          </Button>
          <Button
            variant="transparent"
            className="flex font-semibold text-gray-500 active:text-black p-0"
          >
            <FaHeadset className="flex items-center my-auto size-6 mr-2" />
            <h1 className={`hidden group-hover:block`}>Contact us</h1>
          </Button>
          <Button
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
          </Button>
        </div>
          <Button
            variant="transparent"
            className="ml-4 p-0 mt-32 space-x-2 font-bold text-red-500"
          >
            <MdLogout className="flex items-center my-auto size-6 mr-2 active:text-red-500" />
            <h1 className={`hidden group-hover:block`}>Log out</h1>
          </Button>
      </nav>
    </>
  );
};

export default Student_side_navbar;
