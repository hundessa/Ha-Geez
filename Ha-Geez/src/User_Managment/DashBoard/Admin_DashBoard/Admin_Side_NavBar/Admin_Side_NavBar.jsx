import { FaRegUserCircle, FaChalkboardTeacher, FaUserGraduate, FaRegListAlt } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi";
import Side_Nav_Bar from "../../Navigation/Side_Nav_Bar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


/* eslint-disable react/prop-types */
const Admin_Side_NavBar = ({setSidebarExpanded}) => {
    const location = useLocation();
    const [activeButton, setActiveButton] = useState(location.pathname);
  
    useEffect(() => {
      setActiveButton(location.pathname);
    }, [location.pathname]);

  const buttons = [
    {
      icon: FaRegUserCircle,
      name: "Profile",
      route: "/admin_profile",
      variant: "transparent",
      style: {
        active: "bg-[#5A94D0] text-white group-hover:px-2 pl-2 ml-[-14px] w-[50px] group-hover:w-[130px]",
        inactive: "bg-transparent text-gray-500",
      },
    },
    {
        icon: FaChalkboardTeacher,
        name: "Instructors",
        route: "/list_of_instructors",
        variant: "transparent",
        style: {
        active: "bg-[#5A94D0] text-white group-hover:px-2 pl-2 ml-[-14px] w-[50px] group-hover:w-[130px]",
        inactive: "bg-transparent text-gray-500",
      },
      },
      {
        icon: FaUserGraduate,
        name: "Students",
        route: "/list_of_students",
        variant: "transparent",
        style: {
        active: "bg-[#5A94D0] text-white group-hover:px-2 pl-2 ml-[-14px] w-[50px] group-hover:w-[130px]",
        inactive: "bg-transparent text-gray-500",
      },
      },
      {
        icon: FaRegListAlt,
        name: "Categories",
        route: "/list_of_categories",
        variant: "transparent",
        style: {
            active: "bg-[#5A94D0] text-white group-hover:px-2 pl-2 ml-[-14px] w-[50px] group-hover:w-[130px]",
            inactive: "bg-transparent text-gray-500",
          },
      },
      {
        icon: HiOutlineBookOpen,
        name: "Courses",
        route: "/list_of_courses",
        variant: "transparent",
        style: {
        active: "bg-[#5A94D0] text-white group-hover:px2 pl-2 ml-[-14px] w-[50px] group-hover:w-[130px]",
        inactive: "bg-transparent text-gray-500",
      },
      },
  ];
  return (
    <>
      <Side_Nav_Bar 
      setSidebarExpanded= {setSidebarExpanded}
      buttons={buttons}
      activeButton={activeButton}
      setActiveButton={setActiveButton}
      />
    </>
  );
};

export default Admin_Side_NavBar;
