import { Alert, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import Forms from "../../Sign_up/Student_Sign_up/Forms/Forms";
import { useState } from "react";
import axios from "axios";
import { FaArrowLeftLong } from "react-icons/fa6";

const Reset_Password = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleClick = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/reset-password",
        {
          newPassword: values.password,
        },
        { withCredentials: true }
      );

      const { message } = response.data;

      if (message === "Password reset successfully") {
        navigate("/login");
      } else {
        setError(message);
      }
    } catch (error) {
      console.error("Error during API call:", error);
      setError("An error occurred while processing your request");
    }
  };

  const validation = {
    password: (value) =>
      value.length === 0 ? "Password can't be empty" : null,
    confirmpassword: (value, values) =>
      value.length === 0
        ? "Password can't be empty"
        : value !== values.password
        ? "Passwords did not match"
        : null,
  };

  const form = useForm({
    initialValues: {
      password: "",
      confirmpassword: "",
    },
    validate: validation,
  });

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Button
          variant="default"
          color="rgba(0, 0, 0, 1)"
          size="md"
          radius="xl"
          className="max-w-fit border-none"
          onClick={() => navigate("/forgot_password")}
        >
          <FaArrowLeftLong size={28} />
        </Button>
        <div className="flex-1 flex flex-col sm:flex-row items-center justify-center p-4 sm:p-8 gap-8">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-semibold font-serif">
              Reset Your Password
            </h1>
            <p className="mb-8">Set a new password below</p>
            {error && (
              <Alert title="Error" color="red">
                {error}
              </Alert>
            )}
            <form
              onSubmit={form.onSubmit(handleClick)}
              className="w-full space-y-4"
            >
              <Forms
                form={form}
                withAsterisk
                type="password"
                label="Password"
                placeholder="password"
                validation={validation}
                field="password"
              />
              <Forms
                form={form}
                withAsterisk
                type="password"
                label="Confirm Password"
                placeholder="confirm password"
                validation={validation}
                field="confirmpassword"
              />
              <Button
                className="bg-[#09335F] mt-4 w-full rounded-3xl duration-500"
                type="submit"
              >
                Reset
              </Button>
            </form>
          </div>
            <img
              src="src/assets/images/Reset_Password/Reset Password image.png"
              alt=""
              className="hidden sm:block mt-28"
            />
        </div>
      </div>
    </>
  );
};

export default Reset_Password;
