import Side_Nav_Bar from "../../../Navigation/Side_Nav_Bar";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi";

/* eslint-disable react/prop-types */
const Student_side_navbar = ({setSidebarExpanded}) => {

  const buttons = [
    {
      icon: FaRegUserCircle,
      name: "Profile",
      route: "/student_profile",
      variant: "outline",
    },
    {
      icon: MdLaptopChromebook,
      name: "My Learning",
      route: "/student_learning",
      variant: "outline",
    },
    {
      icon: HiOutlineBookOpen,
      name: "Courses",
      route: "/course_list",
      variant: "outline",
    },
  ];

  return (
    <>

    <Side_Nav_Bar 
    setSidebarExpanded={setSidebarExpanded}
    buttons={buttons}
    />
    </>
  );
};

export default Student_side_navbar;
