import Side_Nav_Bar from "../../../Navigation/Side_Nav_Bar";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/* eslint-disable react/prop-types */
const Student_side_navbar = ({setSidebarExpanded}) => {

  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.pathname);

  useEffect(() => {
    setActiveButton(location.pathname);
  }, [location.pathname]);

  const buttons = [
    {
      icon: FaRegUserCircle,
      name: "Profile",
      route: "/student/profile",
      variant: "outline",
      style: {
        active:
          "bg-[#5A94D0] text-white group-hover:px-2 pl-2 ml-[-14px] w-[50px] group-hover:w-[130px]",
        inactive: "bg-transparent text-gray-500 border-0",
      },
    },
    {
      icon: MdLaptopChromebook,
      name: "My Learning",
      route: "/student/learning",
      variant: "outline",
      style: {
        active:
          "bg-[#5A94D0] text-white group-hover:px-2 pl-2 ml-[-14px] w-[50px] group-hover:w-[130px]",
        inactive: "bg-transparent text-gray-500 border-0",
      },
    },
    {
      icon: HiOutlineBookOpen,
      name: "Courses",
      route: "/student/course_list",
      variant: "outline",
      style: {
        active:
          "bg-[#5A94D0] text-white group-hover:px-2 pl-2 ml-[-14px] w-[50px] group-hover:w-[130px]",
        inactive: "bg-transparent text-gray-500 border-0",
      },
    },
  ];

  return (
    <>

    <Side_Nav_Bar 
    setSidebarExpanded={setSidebarExpanded}
    buttons={buttons}
    activeButton={activeButton}
      setActiveButton={setActiveButton}
    />
    </>
  );
};

export default Student_side_navbar;
