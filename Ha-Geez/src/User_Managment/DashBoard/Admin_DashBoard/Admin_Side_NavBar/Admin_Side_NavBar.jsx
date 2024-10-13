import { FaRegUserCircle, FaChalkboardTeacher, FaUserGraduate, FaRegListAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdApproval } from "react-icons/md";
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
      route: "/admin/profile",
      variant: "transparent",
      style: {
        active: "bg-[#5A94D0] text-white group-hover:px-2 pl-2 ml-[-14px] w-[50px] group-hover:w-[130px]",
        inactive: "bg-transparent text-gray-500",
      },
    },
    {
        icon: FaChalkboardTeacher,
        name: "Instructors",
        route: "/admin/list_of_instructors",
        variant: "transparent",
        style: {
        active: "bg-[#5A94D0] text-white group-hover:px-2 pl-2 ml-[-14px] w-[50px] group-hover:w-[130px]",
        inactive: "bg-transparent text-gray-500",
      },
      },
      {
        icon: FaUserGraduate,
        name: "Students",
        route: "/admin/list_of_students",
        variant: "transparent",
        style: {
        active: "bg-[#5A94D0] text-white group-hover:px-2 pl-2 ml-[-14px] w-[50px] group-hover:w-[130px]",
        inactive: "bg-transparent text-gray-500",
      },
      },
      {
        icon: FaRegListAlt,
        name: "Categories",
        route: "/admin/list_of_categories",
        variant: "transparent",
        style: {
            active: "bg-[#5A94D0] text-white group-hover:px-2 pl-2 ml-[-14px] w-[50px] group-hover:w-[130px]",
            inactive: "bg-transparent text-gray-500",
          },
      },
      {
        icon: HiOutlineBookOpen,
        name: "Courses",
        route: "/admin/list_of_courses",
        variant: "transparent",
        style: {
        active: "bg-[#5A94D0] text-white group-hover:px2 pl-2 ml-[-14px] w-[50px] group-hover:w-[130px]",
        inactive: "bg-transparent text-gray-500",
      },
      },
      {
        icon: FaPeopleGroup,
        name: "Applicants",
        route: "/admin/applicants_list",
        variant: "transparent",
        style: {
        active: "bg-[#5A94D0] text-white group-hover:px2 pl-2 ml-[-14px] w-[50px] group-hover:w-[130px]",
        inactive: "bg-transparent text-gray-500",
      },
      },
      {
        icon: MdApproval,
        name: "Course Approval",
        route: "/admin/list_of_courses_tobe_approved",
        variant: "transparent",
        style: {
        active: "bg-[#5A94D0] text-white group-hover:px2 pl-2 ml-[-14px] group-hover:w-[130px] flex flex-col items-center",
        inactive: "bg-transparent text-gray-500 max-w[100px]",
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
