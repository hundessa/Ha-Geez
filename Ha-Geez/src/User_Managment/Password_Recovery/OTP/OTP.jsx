import { Alert, Button } from "@mantine/core";
import "../../Login/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Forms from "../../Sign_up/Student_Sign_up/Forms/Forms";
import { useForm } from "@mantine/form";
import { FaArrowLeftLong } from "react-icons/fa6";

const OTP = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const validation = {
    otp: (value) =>
      value.length === 0
        ? "OTP can't be empty"
        : !/^[0-9]+$/.test(value)
        ? "OTP must contain only numbers"
        : value.length < 6
        ? "OTP must be 6 digits"
        : value.length > 10
        ? "OTP can only contain 6 digits"
        : null,
  };

  const form = useForm({
    initialValues: {
      otp: "",
    },
    validate: validation,
  });

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/verify-otp",
        { otp: form.values.otp },
        { withCredentials: true } // Ensure cookies are included in the request
      );
      console.log("Response:", response);

      const { message } = response.data;

      if (message === "OTP verified") {
        navigate("/reset_password");
      } else if (message === "Invalid OTP") {
        setError("Invalid OTP");
      } else if (message === "Expired OTP") {
        setError("Expired OTP");
      } else if (message === "Session expired. Please try again.") {
        setError("Session expired. Please try again.");
      } else {
        setError("An unexpected error occurred");
      }
    } catch (error) {
      console.error("Error during API call:", error);
      setError("An error occurred while processing your request");
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Button
          variant="white"
          color="rgba(8, 8, 8, 1)"
          size="md"
          className="max-w-fit border-none"
          onClick={() => navigate("/forgot_password")}
        >
          <FaArrowLeftLong size={28} />
        </Button>
        {/* <div className="flex flex-col"> */}

        <div className="flex-1 flex flex-col sm:flex-row items-center justify-center p-4 sm:p-8 gap-8">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-semibold textcenter font-serif">
              Please Enter Your OTP
            </h1>
            <p className="mb-8">
              Input the code sent to your email for verification
            </p>
            {error && (
              <Alert title="Error" color="red">
                {error}
              </Alert>
            )}
            <form onSubmit={form.onSubmit(handleClick)} className="w-ful">
              <Forms
                form={form}
                withAsterisk
                type="text"
                label="OTP"
                placeholder="Enter the six-digit code"
                field="otp"
                className="w-full"
              />
              <Button
                type="submit"
                className="bg-[#09335F] rounded-3xl w-full mt-4 duration-500 py-2"
              >
                Reset Password
              </Button>

              <div className="flex mt-4 items-center">
                <p className="text-sm">Did not receive a code?</p>
                <Button
                  variant="transparent"
                  href="#"
                  className="text-[#09335F] text-sm font-medium duration-300"
                >
                  Resend OTP
                </Button>
              </div>

              {/* <Button
                  type="submit"
                  className="mt-12 ml-14 w-[100px]"
                  variant="filled"
                  color="#09335F"
                  size="md"
                  radius="sm"
                >
                  Next
                </Button> */}
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default OTP;
