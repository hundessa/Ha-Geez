import { Button } from "@mantine/core";
import teaching from "../../../assets/images/Sign up/teaching.jpg";
import Forms from "./Forms/Forms";
import { useNavigate } from 'react-router-dom';


const Student_Signup = () => {

  const navigate = useNavigate();

  const backButton = () => {
    navigate('/')
  }


  return (
    <>
      <div className="fle h-screen justify-center items-center">
        <div className="h[1400px] flex flex-col justify-center items-center">
          <div className="mb10">
            <h1 className="text-[#09335F] font-bold text-[64px]">
              Welcome to Ha&minus;Ge&#39;ez
            </h1>
          </div>
            <Button
              variant="default"
              className="border-none font-bold text-lg flex justify-end items-end ml-auto mr-24" onClick={backButton}
            >
              Back
            </Button>

          <div className="bg-[#D9D9D9] bg-opacity-[40%] pl-40 pt-10 mx-10 rounded-[20px]">
            <div className="flex ml-[-100px]">
              <div className="w-full mr-12">
                <img
                  src={teaching}
                  alt="teaching"
                  className="size-[650px] rounded-lg"
                />
                <div className="flex mt-4">
                  <h1 className="mt-2 font-semibold">
                    Already have an account ?{" "}
                  </h1>
                  <Button variant="transparent" className="pt-[6px] px-0 ml-4 font-bold" onClick={() => navigate("/login")}>
                    Sign In
                  </Button>
                </div>
              </div>
              <div className="border-[1px] p-16 w-full bg-white mb-10 mr-10 rounded-[20px]">
                <Forms />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student_Signup;
