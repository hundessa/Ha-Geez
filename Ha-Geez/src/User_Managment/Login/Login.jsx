import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert, Button } from "@mantine/core";
import Enroll_Modal from "../../Pages/Home page/modals/Enroll_Modal";
import Forms from "../Sign_up/Student_Sign_up/Forms/Forms";
import { useForm } from "@mantine/form";
import Header from "../../Pages/Home page/Components/Header";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

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

  const handleLogin = async (values) => {
    try {
      const response = await axios.post("http://localhost:4000/login", values, {
        withCredentials: true,
      });
      console.log("Login response:", response.data);

      const { message, role } = response.data;

      if (message === "User not found" || message === "Incorrect Password") {
        setError("Invalid Username or Password");
      } else {
        // localStorage.setItem("jwt", token); // Adjust if your response contains the token

        // Redirect based on user role
        switch (role) {
          case "Instructor":
            navigate("/instructor/landingpage");
            window.location.reload();
            break;
          case "Student":
            navigate("/student/landingpage");
            window.location.reload();
            break;
          case "Admin":
            navigate("/admin/dashboard");
            window.location.reload();
            break;
          default:
            break;
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again.");
    }
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col sm:flex-row items-center justify-center p-4 sm:p-8 gap-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-semibold mb-8 text-center font-serif">Login</h1>

          {error && (
            <Alert title="Error" color="red" className="mb-4">
              {error}
            </Alert>
          )}

          <form
            onSubmit={form.onSubmit(handleLogin)}
            className="space-y-4 w-full"
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
            <Forms
              form={form}
              withAsterisk
              type="password"
              label="Password"
              placeholder="password"
              field="password"
              className="w-full"
            />

            <Button
              variant="transparent"
              className="text-[#09335F] font-medium duration-500 p-0"
              onClick={() => navigate("/forgot_password")}
            >
              Forgot Password?
            </Button>

            <Button
              type="submit"
              className="bg-[#09335F] rounded-3xl w-full mt-4 duration-500 py-2"
            >
              Login
            </Button>
          </form>

          <div className="mt-4 text-center sm:hidden">
            <p className="inline">Not a member? </p>
            <button
              className="text-[#09335F] font-bold ml-1"
              onClick={() => setOpenModal(true)}
            >
              Register
            </button>
          </div>
        </div>

        {/* Image Section - Hidden on mobile */}
        <div className="hidden sm:flex flex-col items-center">
          <img
            className="max-w-md"
            src="src/assets/images/Login/Login Image.png"
            alt="Login illustration"
          />
          <div className="mt-4">
            <p className="inline">Not a member? </p>
            <button
              className="text-[#09335F] font-bold ml-1"
              onClick={() => setOpenModal(true)}
            >
              Register
            </button>
          </div>
        </div>
      </div>

      <Enroll_Modal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default Login;