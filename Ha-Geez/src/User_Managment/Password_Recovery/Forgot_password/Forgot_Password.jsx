import { Alert, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Forms from "../../Sign_up/Student_Sign_up/Forms/Forms";
import { useForm } from "@mantine/form";
import { FaArrowLeftLong } from "react-icons/fa6";

const Forgot_Password = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const validation = {
    email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    password: (value) =>
      value.length === 0 ? "Password can't be empty" : null,
  };

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validation,
  });

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      const forgotPasswordResponse = await axios.post(
        "http://localhost:4000/forgot-password",
        { email: form.values.email }
      );
      console.log("forgot-password response:", forgotPasswordResponse);

      const { message: forgotPasswordMessage } = forgotPasswordResponse.data;

      if (forgotPasswordMessage === "Email not found") {
        setError("Email not found");
        return;
      }

      if (forgotPasswordMessage === "Account found") {
        const sendOTPResponse = await axios.post(
          "http://localhost:4000/send-otp",
          { email: form.values.email },
          { withCredentials: true }
        );
        console.log("send-otp response:", sendOTPResponse);

        const { message: sendOTPMessage } = sendOTPResponse.data;

        if (sendOTPMessage === "OTP sent to email") {
          alert("OTP sent to your email");
          navigate("/otp"); // Use navigate for redirection
        } else {
          setError("Failed to send OTP. Please try again.");
        }
      }
    } catch (err) {
      console.log("Error during API call:", err);
      setError("An error occurred while processing your request");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <Button
        variant="default"
        color="rgba(0, 0, 0, 1)"
        size="md"
        radius="xl"
        className="max-w-fit border-none"
        onClick={() => navigate("/login")}
      >
        <FaArrowLeftLong size={28} />
      </Button>
      <div className="flex-1 flex flex-col sm:flex-row items-center justify-center p-4 sm:p-8 gap-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-semibold mb-8 text-center font-serif">
            Forgot Your Password?
          </h1>
          {error && (
            <Alert title="Error" color="red">
              {error}
            </Alert>
          )}
          <form
            onSubmit={form.onSubmit(handleClick)}
            className="w-full space-y-6"
          >
            <Forms
              form={form}
              withAsterisk
              type="text"
              label="Email"
              placeholder="email"
              field="email"
              className="w-full"
            />
            <Button
              type="submit"
              className="bg-[#09335F] rounded-3xl w-full mt-4 duration-500 py-2 hover:opacity-90"
              // gradient={{
              //   from: "rgba(78, 135, 194, 1)",
              //   to: "rgba(24, 53, 84, 1)",
              //   deg: 94,
              // }}
            >
              Reset Password
            </Button>
          </form>
          <div className="flex justify-center">
            <Button
              variant="default"
              className="mt-8 outline-none border-none"
              onClick={() => navigate("/login")}
            >
              <FaArrowLeftLong size={28} />
              <h1 className="ml-4">Back to login</h1>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot_Password;
