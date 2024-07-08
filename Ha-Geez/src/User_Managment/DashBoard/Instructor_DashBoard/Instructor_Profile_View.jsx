import React from "react";
import Admin_Header from "../Admin_DashBoard/Admin_Header";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import Side_Nav_Bar from "../Navigation/Side_Nav_Bar";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import image from "../../../assets/images/Instructor_Profile_View/prince-akachi-4Yv84VgQkRM-unsplash.jpg";
import Instructor_Sidebar from "./Instructor_landingpage/Components/Instructor_Sidebar";
import Instructor_Header from "./Instructor_landingpage/Components/Instructor_Header";

const Instructor_Profile_View = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Instructor_Header />
      <Instructor_Sidebar />
      <Button
        variant="transparent"
        color="#13569D"
        size="md"
        className="ml-20 mt-20"
        onClick={() => navigate("/instructor_landingpage")}
      >
        <IoArrowBackSharp className="size-8" />
      </Button>

      <div className="flex ">

        <div>
          <h1 className="font-bold text-3xl ml-36">Hundessa Serbessa</h1>
        <h3 className="ml-36 text-xl"> Software Developer</h3>

        <h2 className="font-bold text-xl ml-56 mt-14">Profile</h2>
        <div className="ml-56 rounded-md w-[600px] bg-[#D9D9D9] p-6">
          <p className="">
            Hello, my name is Hundessa, I have a bachelor's degree in Software
            Engineering and a Master's degree in Project management.
          </p>

          <p className="mt-7">
            As an Ethiopian who lived abroad, I realized how powerful
            programming language is to address and express our thoughts and
            insights to the surrounding society which will pave the way to the
            ultimate goal of software development which is to solve people’s
            problems.
          </p>

          <h2 className="mt-5 font-bold">Contact</h2>

          <p className="ml-2 flex items-center mt-3">
            <FaPhoneAlt />
            <span className="ml-2">+251909090909</span>
          </p>
          <p className="ml-2 flex items-center mt-3">
            <IoMdMailUnread />
            <span className="ml-2">hundessa.tria@gmail.com</span>
          </p>

          <span className="flex mt-3 space-x-4">
            <SiMinutemailer />
            <FaFacebook />
            <FaInstagram />
            <FaLinkedinIn />
          </span>
        </div>
        
        </div>
        <div className="w-[300px] ml-20 mt-20">
<img src={image} alt="" />
</div>
      </div>
    </div>
  );
};

export default Instructor_Profile_View;
