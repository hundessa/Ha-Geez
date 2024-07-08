import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/Logo/logo-3.png";
import { Button, TextInput } from "@mantine/core";
import {
  MdNotifications,
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdLogout,
} from "react-icons/md";
import student_1 from "../../../assets/images/Student_profile/student_1.jpg";

const Admin_Header = () => {
  const navigate = useNavigate();

  const [menuVisible, setMenuVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <header className="z-[10001] relative">
        <nav className="bg-[#09335F] bg-opacity90 flex fixed w-full">
          <div
            className="flex mr96"
            onClick={() => navigate("/admin_dashboard")}
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
         
          <div className=" ml-[1050px] flex">
            <div className="flex ">
              <div className="flex justify-end items-center ml-auto mr-4 space-x-6">
                
                <Button
                  variant="transparent"
                  className="flex text-gray-200 p-0 active:text-gray-400"
                >
                  <MdNotifications className="size-8" />
                </Button>
                
                <div className={` `} onClick={toggleMenu}>
                  <img
                    src={student_1}
                    alt="profile"
                    className="size-8 rounded-full cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div
          className={`fixed right-0 mt-14 bg-[#E7F3FF] w-[170px] flex justify-center mx-auto ${
            menuVisible ? "block" : "hidden"
          }`}
        >
          <div className="space-y-4 my-2">
          <div className="text-sm">
            <h1>Hundessa Serbessa</h1>
            <h1 className="text-xs font-light">hund@gmail.com</h1>
          </div>
            <Button
              variant="transparent"
              onClick={toggleDarkMode}
              className={`flex justify-center items-center text-gray-500 active:text-black p-0 ml-[-4px] `}
            >
              {isDarkMode ? (
                <>
                  <MdOutlineDarkMode
                    className={`size-6 cursor-pointer mr-2 text-sm`}
                  />
                  <h1 className={`text-sm`}>Dark mode</h1>
                </>
              ) : (
                <>
                  <MdOutlineLightMode
                    className={`size-6 cursor-pointer mr-2 `}
                  />
                  <h1 className="text-sm">Light mode</h1>
                </>
              )}
            </Button>
            <div>
              <Button
                variant="transparent"
                className="ml4 p-0 mt32 space-x-2 font-bold text-red-500"
                onClick={() => navigate("/")}
              >
                <MdLogout className="flex items-center my-auto size-6 mr-2 active:text-red-500" />
                <h1 className={``}>Log out</h1>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Admin_Header;