import React from "react";
import { Button } from "@mantine/core";
import "../../Login/Login.css"
import { useNavigate } from "react-router-dom";

const OTP = () => {
    const navigate = useNavigate();
  return (
    <div className="flex">
      <Button variant="white" color="rgba(8, 8, 8, 1)" size="md" onClick={() => navigate("/forgot_password")}>
        Back
      </Button>

      <div className="wrap">
        <h1 className="mt-40 ml-64 font-medium">Please Enter Your OTP</h1>
        <p  className=" ml-64 font-regular">Input the code sent to your email for verification</p>
        <form action="">
          <div className=" w-[400px] h-[300px] mt-10 ml-64">
            <div className="mt-28 ml-16">
              <div className="input-box flex ">
                <input 
                  type="text"
                  placeholder="Enter the six-digit code"
                  required
                  className=" border-b-[4px] border-[#09335F] w-[650px]"
                />
              </div>

              <div className=""> 
              <div className="flex">
                 <p className="text-sm mt-2">Didn't receive a code? </p> 
              <Button variant="transparent" href="#" className="text-[#09335F] text-sm font-medium" >
               Resend OTP
                </Button>
              </div>
              

                
              <Button
                className="mt-12 ml-14 w-[100px]"
                variant="filled"
                color="#09335F"
                size="md"
                radius="sm"
                onClick={() => navigate("/reset_password")}
              >
                Next
              </Button>
              </div>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTP;
