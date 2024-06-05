import ReactDOM from "react-dom"
import { Button } from "@mantine/core";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

/* eslint-disable react/prop-types */
const Enroll_Modal = ({ openmodal, setOpenmodal }) => {

    const navigate = useNavigate();

  const StudentSignup = () => {
    navigate('/student_signup');
    setOpenmodal(false);
  }
  const InstructortSignup = () => {
    navigate('/instructor_signup');
    setOpenmodal(false);
  }

  useEffect(() => {
    if (openmodal) {
      document.body.style.overflow = "hidden";
      document.body.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
      document.body.style.backdropBlur = "blur(100px)";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.backgroundColor = "";
      document.body.style.backdropBlur = "none";
    }
    
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.backgroundColor = "";
      document.body.style.backdropBlur = "none";
    };
  }, [openmodal]);

  if (!openmodal) return null;

  return ReactDOM.createPortal(
        // <div className="flex fixed w-[600px] h-[300px] m-auto inset-0 bg-white  justify-center items-center z-1000">
        <div
        className="flex items-center justify-center z-[1000] fixed top-0 left-0 w-[100%] h-[100%] bg-[rgba(0, 0, 0, 0.5)]"
        // onClick={setOpenmodal(true)}
      >
         {/* <div className=""> */}
         <div
        className="bg-white flex justify-center items-center p-[20px] border-[5px] z-[1001] h-[300px] w-[600px]"
      >
            <div>
              <Button
                variant="transparent"
                className=" text-red-600 flex justify-end items-end ml-[500px] mr-[-600px]  mb-8 mt-[-130px] focus:text-red-500"
                onClick={() => setOpenmodal(false)}
              >
                <IoClose size={30} />
              </Button>
            </div>

            <div className="flex-col justifycenter itemscenter mx-auto">
              <Button
                variant="outline"
                className="block font-bold text-2xl text-black mb-8"
                onClick={StudentSignup}
              >
                Sign up as a Student
              </Button>
              <Button
                variant="outline"
                className="font-bold text-2xl text-black"
                onClick={InstructortSignup}
              >
                Sign up as a Instructor
              </Button>
            </div>
          </div>
        </div>,
    document.body
  );
};

export default Enroll_Modal;
