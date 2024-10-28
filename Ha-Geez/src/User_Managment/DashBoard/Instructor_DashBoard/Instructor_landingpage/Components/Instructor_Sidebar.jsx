import { useEffect, useState } from "react";
import Side_Nav_Bar from "../../../Navigation/Side_Nav_Bar"
import { useLocation } from "react-router-dom";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FaRegUserCircle, FaUserGraduate } from "react-icons/fa";

/* eslint-disable react/prop-types */
const Instructor_Sidebar = ({setSidebarExpanded}) => {

    const location = useLocation();
    const [activeButton, setActiveButton] = useState(location.pathname);
  
    useEffect(() => {
      setActiveButton(location.pathname);
    }, [location.pathname]);

    const buttons = [
        {
          icon: FaRegUserCircle,
          name: "Profile",
          route: "/instructor/profile",
          variant: "transparent",
          style: {
            active: "bg-[#5A94D0] text-white group-hover:px-2 pl-2 ml-[-14px] w-[50px] group-hover:w-[130px]",
            inactive: "bg-transparent text-gray-500",
          },
        },
          {
            icon: FaUserGraduate,
            name: "Students",
            route: "/instructor/student_list",
            variant: "transparent",
            style: {
            active: "bg-[#5A94D0] text-white group-hover:px-2 pl-2 ml-[-14px] w-[50px] group-hover:w-[130px]",
            inactive: "bg-transparent text-gray-500",
          },
          },
          {
            icon: HiOutlineBookOpen,
            name: "Courses",
            route: "/instructor/course_list",
            variant: "transparent",
            style: {
            active: "bg-[#5A94D0] text-white group-hover:px2 pl-2 ml-[-14px] w-[50px] group-hover:w-[130px]",
            inactive: "bg-transparent text-gray-500",
          },
          }
      ];

  return (
    <>
    <div>
        <Side_Nav_Bar 
        setSidebarExpanded= {setSidebarExpanded}
        buttons={buttons}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        />
    </div>
    </>
  )
}

export default Instructor_Sidebar