import logo from "../../../assets/images/Logo/logo-3.png";
import { Button } from "@mantine/core";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  return (
    <>
      <nav className="bg-[#09335F] bg-opacity-80 flex">
        <div className="flex mr-96">
          <div className="size-14 mr-2">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex justify-center items-center">
            <h1 className="font-semibold text-white font-serif">Ha-Geez</h1>
          </div>
        </div>

        <div className="flex">
          <div className="flex list-none justify-center items-center text-white">
            <li className="mx-6">Home</li>
            <li className="mx-8">About Us</li>
            <li className="mx-8">Courses</li>
            <li className="mx-8">Contact Us</li>
          </div>
          <div className="flex justify-center items-center ml-28">
            <Button variant="outline" className="text-white border-white">
              Login
            </Button>
          </div>
          <div className="flex justify-center items-center ml-8">
            <div className="border p-1 flex justify-center items-center">
              <MdOutlineDarkMode className="text-2xl" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
