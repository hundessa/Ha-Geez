import Header_Nav_Bar from "../../../Navigation/Header_Nav_Bar";
import { MdNotifications, MdSettings } from "react-icons/md";

const InstructorHeaderNavBar = () => {
  const buttons = [
    {
      icon: MdNotifications,
      label: "Notification",
      route: "/instructor/notification",
      variant: "transparent",
      style: {
        active: "mx-4 cursor-pointer hover:border-b-[3px]",
        inactive: "bg-transparent text-gray-500",
      },
    },
    {
      icon: MdSettings,
      label: "Setting",
      variant: "transparent",
      onclick: () => console.log("Settings clicked"),
    },
  ];

  return (
    <Header_Nav_Bar buttons={buttons} onclick={onclick}/>
  );
};

export default InstructorHeaderNavBar;
