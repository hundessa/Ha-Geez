import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Side_Nav_Bar = ({ setSidebarExpanded, buttons, activeButton, setActiveButton }) => {
  const navigate = useNavigate();
  const handleClick = (route) => {
    setActiveButton(route);
    navigate(route);
  };
  return (
    <>
      <nav
        className={`bg-[#E7F3FF] pt-6 w-[56px] h-[100vh] pb-4 hover:w-[150px] group transition-all duration-300 fixed  mt-14 z-[10001]`}
        onMouseEnter={() => setSidebarExpanded(true)}
        onMouseLeave={() => setSidebarExpanded(false)}
      >
        <div className="space-y-6 ml-4">
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant}
              className=
              {`flex items-center font-semibold p-0 active:text-black text-gray-500 ${
                activeButton === button.route ? button.style.active : button.style.inactive
              }`}
              onClick={() => handleClick(button.route)}
                // onClick={() => navigate(button.route)}
            >
              {button.icon && (
                <button.icon className="flex items-center my-auto size-6 mr-4" />
              )}
              <h1 className={`hidden group-hover:inline-block whitespace-nowrap grouphover:block text-[14px]`}>
                {button.name}
              </h1>
            </Button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Side_Nav_Bar;
