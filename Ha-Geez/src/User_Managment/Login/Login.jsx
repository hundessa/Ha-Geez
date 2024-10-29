import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Alert, Box, Button, Group } from "@mantine/core";
import Enroll_Modal from "../../Pages/Home page/modals/Enroll_Modal";
import Forms from "../Sign_up/Student_Sign_up/Forms/Forms";
import { useForm } from "@mantine/form";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const validation = {
    email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    password: (value) => (value.length === 0 ? "Password can't be empty" : null),
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
      const response = await axios.post("http://localhost:4000/login", values, { withCredentials: true });
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
            break;
          case "Student":
            navigate("/student/landingpage");
            break;
          case "Admin":
            navigate("/admin/dashboard");
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
    <div className="flex">
      <Button
        variant="white"
        color="rgba(8, 8, 8, 1)"
        size="md"
        className="w-[100px]"
        onClick={() => navigate("/")}
      >
        Back
      </Button>
      <div className="wrap">
        <h1 className="mt-40 ml-64 font-medium">Login</h1>
        <Box sx={{ maxWidth: 300 }} mx="auto">
          {error && <Alert title="Error" color="red">{error}</Alert>}
          <form onSubmit={form.onSubmit(handleLogin)} className="space-y-4">
            <Forms
              form={form}
              withAsterisk
              type="text"
              label="Email"
              placeholder="email"
              field="email"
            />
            <Forms
              form={form}
              withAsterisk
              type="password"
              label="Password"
              placeholder="password"
              field="password"
            />
            <Button
              variant="transparent"
              href="#"
              className="text-[#09335F] font-medium"
              onClick={() => navigate("/forgot_password")}
            >
              Forgot Password?
            </Button>
            <Group justify="flex-end" mt="xl">
              <Button
                type="submit"
                className="bg-[#09335F] rounded-3xl w-full mt-2"
              >
                Login
              </Button>
            </Group>
          </form>
        </Box>
      </div>

      <div className="">
        <img
          className="mt-24"
          src="src/assets/images/Login/Login Image.png"
          alt=""
        />
        <div className="flex ml-32">
          <p>Not a member?</p>
          <a
            href="#"
            className="text-[#09335F] font-bold ml-32"
            onClick={() => setOpenModal(true)}
          >
            Register
          </a>
        </div>
      </div>
      <Enroll_Modal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default Login;
