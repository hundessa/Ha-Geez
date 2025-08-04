import logo from "../../../assets/images/Logo/logo-3.png";
import { useNavigate } from "react-router-dom";
import { Button, Tooltip } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import {
  MdLogout,
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdClose,
} from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";
import { useUser } from "../../../Context/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

/* eslint-disable react/prop-types */
const Header_Nav_Bar = ({ buttons }) => {
  const navigate = useNavigate();

  const [menuVisible, setMenuVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [settingVisible, setSettingVisible] = useState(false);
      const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const settingsRef = useRef(null);
  const { user } = useUser();
  const menuRef = useRef(null);

  //   const settingMenu = () => {
  //     setSettingVisible(!settingVisible);
  //   };

    const menuHandler = () => {
      setMenuOpen((prev) => !prev);
    };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      settingsRef.current &&
      !settingsRef.current.contains(event.target)
    ) {
      setMenuVisible(false);
      setSettingVisible(false);
    }
  };

  const handleChangePasswordButton = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/change_password");
    }
  };
// const handleHomeIcon = () => {
//   switch(user.role) {
//     case "Admin":
//       navigate('/admin/dashboard');
//       break;
//     case "Instructor":
//       navigate("/instructor/landingpage");
//       break;
//     case "Student":
//       navigate("/student/landingpage")
//   }
// }
  
  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:4000/logout",
        {},
        { withCredentials: true }
      );
      Cookies.remove("jwt"); 

      navigate("/login", { replace: true }); 
      window.location.reload();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="w-full bg-[#3A5C7F] flex justify-between items-center fixed elative top-0 left-0 z-[999] px-4 sm:px4 py-3 sm:py4">
        <div
          className="flex items-center cursor-pointer"
          // onClick={handleHomeIcon()}
        >
          <img src={logo} alt="logo" className="h-12 mr-2" />
          <h1 className="font-semibold text-white font-serif text-sm sm:text-lg">
            Ha-Geez
          </h1>
        </div>
        {/* <IoMdMenu
          className="sm:hidden size-8 text-white cursor-pointer ml-auto z-[1000]"
          onClick={menuHandler}
        /> */}
        {menuOpen ? (
          <MdClose // or use another icon like AiOutlineClose
            className="sm:hidden size-8 text-white cursor-pointer ml-auto z-[1000] duration-500"
            onClick={menuHandler}
          />
        ) : (
          <IoMdMenu
            className="sm:hidden size-8 text-white cursor-pointer ml-auto z-[1000] duration-500"
            onClick={menuHandler}
          />
        )}

        {/* <nav className="bg-[#09335F] bg-opacity90 flex fixed w-full"> */}
        {/* <div className="flex mr-96" onClick={handleHomeIcon}>
            <div className="size-14 mr-2 cursor-pointer">
              <img src={logo} alt="logo" />
            </div>
            <div className="flex justify-center items-center">
              <h1 className="font-semibold text-white font-serif cursor-pointer">
                Ha-Geez
              </h1>
            </div>
          </div> */}
        <div className="flex">
          <nav
            ref={menuRef}
            className={`${
              menuOpen ? "translate-x-0" : "translate-x-full"
            } sm:translate-x-0 transform sm:transform-none transition-transform ease-in-out duration-500
            fixed sm:static top-0 right-0 h-full sm:h-auto w-14 sm:w-auto bg-[#5780a8] sm:bg-transparent
            flex flex-col sm:flex-row items-center sm:mt-0 mt-[72px] sm:items-center text-white p-6 sm:p-0 z-50 gap-y-6 sm:gap-x-6 sm:gap-y-0`}
          >
            {/* <div className="flex justify-end ml-auto items-center"> */}
            {buttons.map((button, index) => (
              <div key={index}>
                <Tooltip label={button.label} className="mt-4 sm:block hidden">
                  <Button
                    variant={button.variant}
                    className="flex items-center font-semibold p-0 active:text-black text-slate-300"
                    onClick={button.onclick}
                    ref={button.ref}
                  >
                    {button.icon && (
                      <button.icon className="flex items-center my-auto size-8 sm:mr-4" />
                    )}
                  </Button>
                </Tooltip>
              </div>
            ))}
            {/* </div> */}
            <div
              className="flex items-center sm:mr-4"
              ref={dropdownRef}
              onClick={toggleMenu}
            >
              {user?.profilepicture ? (
                <img
                  src={user.profilepicture}
                  alt="profile"
                  className="size-8 rounded-full cursor-pointer"
                />
              ) : (
                <FaUserCircle className="size-8 rounded-full cursor-pointer text-slate-300" />
              )}
            </div>
          </nav>
        </div>
        <div
          ref={settingsRef}
          className={`fixed right-0 mt-14 bg-[#E7F3FF] w-[150px] flx justify-center mx-auto ${
            settingVisible ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-start mx-2">
            <Button
              variant="transparent"
              onClick={toggleDarkMode}
              className={`flex justifycenter items-center text-gray-500 active:text-black p-0`}
            >
              {isDarkMode ? (
                <>
                  <MdOutlineDarkMode
                    className={`size-[20px] cursor-pointer mr-1 text-[12px]`}
                  />
                  <h1 className={`text-[12px]`}>Dark mode</h1>
                </>
              ) : (
                <>
                  <MdOutlineLightMode
                    className={`size-[20px] cursor-pointer mr-1 text-[12px]`}
                  />
                  <h1 className="text-[12px]">Light mode</h1>
                </>
              )}
            </Button>
          </div>
          <Button
            variant="transparent"
            className="text-gray-500 active:text-black text-[12px] ml-[-4px]"
            onClick={handleChangePasswordButton}
          >
            <FaExchangeAlt className="mr-1" />
            Change Password
          </Button>
        </div>
        <div
          ref={dropdownRef}
          className={`fixed right-0 sm:mt-[140px] mt-[550px] sm:mr-0 mr-14 bg-[#E7F3FF] w-[170px] flex justify-center mx-auto ${
            menuVisible ? "block" : "hidden"
          }`}
        >
          <div className="space-y-4 my-2">
            <div className="text-sm">
              <h1>
                {user?.firstname} {user?.lastname}
              </h1>
              <h1 className="text-xs font-light">{user?.email}</h1>
            </div>

            <div>
              <Button
                variant="transparent"
                className="ml4 p-0 mt32 space-x-2 font-bold text-red-500"
                onClick={handleLogout}
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

export default Header_Nav_Bar;
