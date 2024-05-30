import { Button } from "@mantine/core";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


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
      document.body.style.backdropFilter = "none";
    };
  }, [openmodal]);

  return (
    <>
      {openmodal && (
        <div className="flex fixed w-[600px] h-[300px] m-auto inset-0 bg-white  justify-center items-center z-1000">
          <div className="">
            <div>
              <Button
                variant="transparent"
                className=" text-red-600 flex justify-end items-end ml-[300px] mr-[-100px]  mb-8 mt-[-100px] focus:text-red-500"
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
        </div>
      )}
    </>
  );
};

export default Enroll_Modal;
