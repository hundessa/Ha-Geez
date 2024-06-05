import { Navigate } from "react-router-dom";
import logo from "../../../../../assets/images/Logo/logo-3.png";
import { Button, TextInput } from "@mantine/core";
import {
  MdOutlineShoppingCart,
  MdNotifications,
} from "react-icons/md";
import student_1 from "../../../../../assets/images/Student_profile/student_1.jpg";

const Student_Header = () => {

  return (
    <>
      <header>
        <nav className="bg-[#09335F] bg-opacity-80 flex">
          <div
            className="flex mr96"
            onClick={() => Navigate("/student_landingpage")}
          >
            <div className="size-14 mr-2 cursor-pointer">
              <img src={logo} alt="logo" />
            </div>
            <div className="flex items-center">
              <h1 className="font-semibold text-white font-serif cursor-pointer">
                Ha-Geez
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center mx-auto w[600px]">
            <TextInput placeholder="search" className="flexcol w-[400px] rounded-[50px]" />
          </div>
          <div className="flex">
            <div className="flex ">
              <div className="flex justify-end items-center ml-auto mr-4 space-x-6">
                <Button variant="transparent" className="flex text-gray-200 p-0 active:text-gray-400">
                  <MdOutlineShoppingCart className="size-8" />
                </Button>
                <Button variant="transparent" className="flex text-gray-200 p-0 active:text-gray-400">
                  <MdNotifications className="size-8" />
                </Button>
                <img
                  src={student_1}
                  alt="profile"
                  className="size-8 rounded-full"
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Student_Header;
