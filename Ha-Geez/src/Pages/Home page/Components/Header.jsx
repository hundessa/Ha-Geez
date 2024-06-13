import logo from "../../../assets/images/Logo/logo-3.png";
import { Button } from "@mantine/core";
import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const onClick = () => {
    setClicked(!clicked);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  useEffect(() => {
    if (location.pathname !== '/') {
      if (location.pathname === '/about_us') {
        setActiveLink('about_us');
      } else if (location.pathname === '/courses') {
        setActiveLink('courses');
      } else if (location.pathname === '/contact_us') {
        setActiveLink('contact_us');
      } else {
        setActiveLink('');
      }
    }
  }, [location.pathname]);

  return (
    <>
      <header 
      className={`duration-1000 ease-in-out transition-all ${navbar ? "bg-[#09335F] bg-opacity-90 w-full z-10 flex fixed transition-all duration-300 ease-in" : "bg-[#09335F] bg-opacity-80 flex"}`}
      >
        <div className="flex mr-96" onClick={() => navigate("/")}>
          <div className="size-14 mr-2 cursor-pointer">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex justify-center items-center">
            <h1 className="font-semibold text-white font-serif cursor-pointer">
              Ha-Geez
            </h1>
          </div>
        </div>

        <div className="flex">
          <div className="flex justify-center items-center text-white">
            <NavLink
              to="/"
              // className={({ isActive }) =>
              //   isActive
              //     ? "mx-4 cursor-pointer border-b-[3px]"
              //     : "mx-4 cursor-pointer hover:border-b-[3px]"
              // }
              className={`mx-4 cursor-pointer hover:border-b-[3px] ${activeLink === 'home' ? 'border-b-[3px]' : ''}`}
              onClick={() => setActiveLink('home')}
            >
              Home
            </NavLink>
            
            <ScrollLink
              to="about-us-section"
              smooth={true}
              duration={500}
              
              className="mx-6 cursor-pointer hover:border-b-[3px]"
              activeClass="border-b-[3px]"
              // className={`mx-6 cursor-pointer hover:border-b-[3px] ${activeLink === 'about_us' ? 'border-b-[3px]' : ''}`}
              // onClick={() => setActiveLink('about_us')}
            >            
              About Us
            </ScrollLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? "mx-6 cursor-pointer border-b-[3px]"
                  : "mx-6 cursor-pointer hover:border-b-[3px]"
              }
            >
              Courses
            </NavLink>
            <NavLink
              to="/contact_us"
              className={({ isActive }) =>
                isActive
                  ? "mx-6 cursor-pointer border-b-[3px]"
                  : "mx-6 cursor-pointer hover:border-b-[3px]"
              }
            >
              Contact Us
            </NavLink>
          </div>
          <div className="flex justify-center items-center ml-28">
            <Button
              variant="outline"
              className="text-white border-white"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </div>
          <div className="flex justify-center items-center ml-8">
            <Button
              variant="outline"
              onClick={onClick}
              className={`border border-white p-1 flex justify-center items-center text-black ${
                clicked ? "block" : "hidden"
              }`}
            >
              <MdOutlineDarkMode className="text-2xl cursor-pointer" />
            </Button>
            <Button
              variant="outline"
              onClick={onClick}
              className={`border border-white p-1 flex justify-center items-center text-black ${
                clicked ? "hidden" : "block"
              }`}
            >
              <MdOutlineWbSunny className="text-2xl cursor-pointer" />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
