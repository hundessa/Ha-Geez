import logo from "../../../assets/images/Logo/logo-3.png";
import { IoMdMenu } from "react-icons/io";
import { Button } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const onClick = () => {
    setClicked(!clicked);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const menuHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     // Special handling for home page with hash
  //     if (location.hash === "#about-us-section") {
  //       setActiveLink("about");
  //     } else {
  //       setActiveLink("home");
  //     }
  //   } else if (location.pathname === "/course_list") {
  //     setActiveLink("courses");
  //   } else if (location.pathname === "/contact_us") {
  //     setActiveLink("contact_us");
  //   } else {
  //     setActiveLink("");
  //   }
  // }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.pathname === "/") {
      if (location.hash === "#about-us-section") {
        setActiveLink("about");
        // Scroll to section after a small delay to allow page to render
        setTimeout(() => {
          const element = document.getElementById("about-us-section");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        setActiveLink("home");
      }
    } else if (location.pathname === "/course_list") {
      setActiveLink("courses");
    } else if (location.pathname === "/contact_us") {
      setActiveLink("contact_us");
    } else {
      setActiveLink("");
    }
  }, [location.pathname, location.hash]);

  const handleAboutClick = () => {
    setActiveLink("about");
    setMenuOpen(false);

    if (window.location.pathname !== "/") {
      // Navigate to home with hash, then scroll will happen in useEffect
      navigate("/#about-us-section");
    } else {
      // Already on home page, scroll directly
      const element = document.getElementById("about-us-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      // Update URL hash without reload
      window.history.pushState(null, "", "#about-us-section");
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

  return (
    <>
      <header className="w-full bg-[#3A5C7F] flex justify-between items-center fixed top-0 left-0 z-[999] px-4 sm:px-8 py-3 sm:py-4">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" className="h-12 mr-2" />
          <h1 className="font-semibold text-white font-serif text-sm sm:text-lg">
            Ha-Geez
          </h1>
        </div>

        <IoMdMenu
          className="sm:hidden size-8 text-white cursor-pointer ml-auto"
          onClick={menuHandler}
        />
        <div className="flex">
          <nav
            ref={menuRef}
            className={`${
              menuOpen ? "translate-x-0" : "translate-x-full"
            } sm:translate-x-0 transform sm:transform-none transition-transform duration-300 ease-in-out
        fixed sm:static top-0 right-0 h-full sm:h-auto w-64 sm:w-auto bg-[#5780a8] sm:bg-transparent
        flex flex-col sm:flex-row items-start sm:items-center text-white p-6 sm:p-0 z-50 gap-y-6 sm:gap-x-6 sm:gap-y-0`}
          >
            <NavLink
              to="/"
              className={`sm:mx-4 cursor-pointer hover:border-b-[3px] ${
                activeLink === "home" ? "border-b-[3px]" : ""
              }`}
              onClick={() => setActiveLink("home")}
            >
              Home
            </NavLink>

            <ScrollLink
              to="about-us-section"
              smooth={true}
              duration={500}
              className="sm:mx-4 cursor-pointer hover:border-b-[3px]"
              activeClass="border-b-[3px]"
              // onClick={() => {
              //   setActiveLink("about_us");
              //   // If not on home page, navigate first then scroll
              //   if (window.location.pathname !== "/") {
              //     navigate("/");
              //     // Small timeout to allow page to load before scrolling
              //     setTimeout(() => {
              //       const element = document.getElementById("about-us-section");
              //       if (element) {
              //         element.scrollIntoView({ behavior: "smooth" });
              //       }
              //     }, 100);
              //   }
              // }}
              onClick={handleAboutClick}
            >
              About Us
            </ScrollLink>
            <NavLink
              to="/course_list"
              className={({ isActive }) =>
                isActive
                  ? "sm:mx-4 cursor-pointer border-b-[3px]"
                  : "sm:mx-4 cursor-pointer hover:border-b-[3px]"
              }
            >
              Courses
            </NavLink>
            <NavLink
              to="/contact_us"
              className={({ isActive }) =>
                isActive
                  ? "sm:mx-4 cursor-pointer border-b-[3px]"
                  : "sm:mx-4 cursor-pointer hover:border-b-[3px]"
              }
            >
              Contact Us
            </NavLink>
            <div className="flex sm:items-center items-start sm:mx-4 sm:ml-28">
              <Button
                variant="outline"
                className="text-white border-white duration-300"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </div>
            <div className="flex items-center sm:ml-8 sm:mx-4">
              <Button
                variant="outline"
                onClick={onClick}
                className={`border border-white p-1 flex justify-center items-center text-black duration-300 ${
                  clicked ? "block" : "hidden"
                }`}
              >
                <MdOutlineDarkMode className="text-2xl cursor-pointer" />
              </Button>
              <Button
                variant="outline"
                onClick={onClick}
                className={`border border-white p-1 flex justify-center items-center text-black duration-300 ${
                  clicked ? "hidden" : "block"
                }`}
              >
                <MdOutlineWbSunny className="text-2xl cursor-pointer" />
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
