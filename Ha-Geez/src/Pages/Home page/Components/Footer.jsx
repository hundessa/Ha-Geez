import { FaInstagramSquare, FaTelegram, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="pb-8 bg-[#09335F] bg-opacity-90 relative">
        <div className="flex mb-12">
          <div className="flex my-auto justify-center items-center">
            <div className="font-bold ml-10">
              <h1 className="mt-16 text-slate-50">Contact</h1>
              <h1 className="mt-6 text-slate-300 mx-auto justify-center">Tel: +2519878787</h1>
              <div className="flex mt-4">
              <div className="absolute text-slate-300">
                <FaInstagramSquare className="size-6 rounded-2xl hover:text-slate-100 hover:size-6xl cursor-pointer absolute  hover:size-[28px]" />
                <FaTelegram className="size-6 hover:text-slate-100 hover:text-lg cursor-pointer absolute left-14 hover:size-[28px]" />
                <FaYoutube className="size-[26px] hover:text-slate-100 hover:text-lg cursor-pointer absolute left-28 hover:size-[28px]" />
              </div>
              </div>
            </div>
          </div>
          <div className="absolute right-10 top-50%] top-24 space-y-10 mr-32 text-slate-300 font-semibold cursor-pointer first:hover:text[20px]">
            <NavLink to="/" className="hover:text-slate-200 hover:text-[17px] absolute">
              Home
            </NavLink>
            <NavLink
              to="/course_list"
              className="hover:text-slate-50 hover:text-[17px] absolute"
            >
              Courses
            </NavLink>
          </div>
        </div>
        <hr className="flex bg-gray-300 mx-auto h-[4px] drop-shadow-sm w-[1240px] rounded-b-3xl shadow-md shadow-black" />
        <div className="flex justify-center items-center font-extralight mt-8 text-slate-400">
          <h1>&copy; 2024 Ha-Geez Ethiopia. All rights reserved </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
