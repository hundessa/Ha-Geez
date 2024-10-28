import Header_Nav_Bar from "../../../Navigation/Header_Nav_Bar";
import { MdNotifications, MdOutlineShoppingCart, MdSettings } from "react-icons/md";

const Student_Header = () => {
  const buttons = [
    {
      icon: MdOutlineShoppingCart,
      label: "Cart",
      route: "/instructor/notification",
      variant: "transparent",
      style: {
        active: "mx-4 cursor-pointer hover:border-b-[3px]",
        inactive: "bg-transparent text-gray-500",
      },
    },
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
    },
  ];

  return (
    <Header_Nav_Bar buttons={buttons} onclick={onclick}/>
  );
};


export default Student_Header;