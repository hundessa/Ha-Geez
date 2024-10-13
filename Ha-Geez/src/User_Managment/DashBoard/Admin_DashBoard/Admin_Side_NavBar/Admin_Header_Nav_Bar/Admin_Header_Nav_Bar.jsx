import Header_Nav_Bar from "../../../Navigation/Header_Nav_Bar";
import {
    MdNotifications,
    // MdOutlineDarkMode,
    // MdOutlineLightMode,
    // MdLogout,
    MdSettings,
  } from "react-icons/md";

const Admin_Header_Nav_Bar = () => {
  


  const buttons = [
    {
      icon: MdNotifications,
      label: "Notification",
      route: "/admin/notification",
      variant: "transparent",
      style: {
        active: "mx-4 cursor-pointer hover:border-b-[3px]",
        inactive: "bg-transparent text-gray-500",
      },
    },
    {
        icon: MdSettings,
        label: "Setting",
        // route: "/admin/list_of_instructors",
        variant: "transparent",
        onclick: "settingsMenu"
      },
  ];


  return (
    <>
    <Header_Nav_Bar 
    buttons={buttons}
    onclick={onclick}
    />
    </>
  )
}

export default Admin_Header_Nav_Bar