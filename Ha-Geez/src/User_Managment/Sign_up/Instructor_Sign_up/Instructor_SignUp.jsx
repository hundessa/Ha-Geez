import { Button } from "@mantine/core";
import Forms from "../Student_Sign_up/Forms/Forms";
import { useNavigate } from "react-router-dom";

const Instructor_SignUp = () => {
  const navigate = useNavigate();

  const backButton = () => {
    navigate('/')
  }


  return (
    <>
      <div className="fle h-screen justify-center items-center">
        <div className="h[1400px] flex flex-col justify-center items-center">
          <div className="mt-10">
            <h1 className="text-[#09335F] font-semibold text-[24px]">
            Please fill up this form if you want to become an instructor of Ha-Ge’ez
            </h1>
          </div>
            <Button
              variant="default"
              className="border-none font-bold text-lg flex justify-end items-end ml-auto mr-24" onClick={backButton}
            >
              Back
            </Button>
              <div className="border-[1px] p-16 w-[500px] bg-white bg-opacity-30 rounded-[20px]">
                <Forms />
              </div>
        </div>
      </div>
    </>
  );
};

export default Instructor_SignUp