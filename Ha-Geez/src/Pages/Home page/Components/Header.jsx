import logo from "../../../assets/images/Logo/logo-3.png";
import { Button } from "@mantine/core";
import { useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const onClick = () => {
    setClicked(!clicked);
  };

  const navigate = useNavigate();

  return (
    <>
      <header className="bg-[#09335F] bg-opacity-80 flex">
        <div className="flex mr-96"  onClick={() => navigate("/")}>
          <div className="size-14 mr-2 cursor-pointer">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex justify-center items-center">
            <h1 className="font-semibold text-white font-serif cursor-pointer">Ha-Geez</h1>
          </div>
        </div>

        <div className="flex">
          <div className="flex list-none justify-center items-center text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'mx-4 cursor-pointer border-b-[3px]' : 'mx-4 cursor-pointer hover:border-b-[3px]'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about_us"
            className={({ isActive }) =>
              isActive ? 'mx-6 cursor-pointer border-b-[3px]' : 'mx-6 cursor-pointer hover:border-b-[3px]'
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? 'mx-6 cursor-pointer border-b-[3px]' : 'mx-6 cursor-pointer hover:border-b-[3px]'
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/contact_us"
            className={({ isActive }) =>
              isActive ? 'mx-6 cursor-pointer border-b-[3px]' : 'mx-6 cursor-pointer hover:border-b-[3px]'
            }
          >
            Contact Us
          </NavLink>
          </div>
          <div className="flex justify-center items-center ml-28">
          <NavLink
            to="/Login"
            className={({ isActive }) =>
              isActive ? 'mx-6 cursor-pointer border-b-[3px]' : 'mx-6 cursor-pointer hover:border-b-[3px]'
            }
          >
            <Button variant="outline" className="text-white border-white" onClick={navigate("/login")}>
              Login
            </Button>
          </NavLink>
          
          </div>
          <div className="flex justify-center items-center ml-8">
            
              <Button variant="outline" onClick={onClick} className={`border border-white p-1 flex justify-center items-center text-black ${clicked ? "block" : "hidden"}`}><MdOutlineDarkMode className="text-2xl cursor-pointer" /></Button>
              <Button variant="outline" onClick={onClick} className={`border border-white p-1 flex justify-center items-center text-black ${clicked ? "hidden" : "block"}`}><IoSunnyOutline className="text-2xl cursor-pointer"/></Button>
           
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
