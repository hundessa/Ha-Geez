import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
import { Alert, Button, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import teaching from "../../../assets/images/Sign up/teaching.jpg";
import Forms from "./Forms/Forms";
import Footer from "../../../Pages/Home page/Components/Footer";
// import Header from "../../../Pages/Home page/Components/Header";

const Student_Signup = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [phonenumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();

  const backButton = () => {
    navigate("/");
  };

  const validation = {
    firstname: (value) =>
      value.length === 0
        ? "First name can't be empty"
        : !/^[A-Za-z]+$/.test(value)
        ? "First name must contain only alphabets"
        : value.length < 4
        ? "Name must have at least 4 letters"
        : null,
    lastname: (value) =>
      value.length == 0
        ? "last name can't be empty"
        : !/^[A-Za-z]+$/.test(value)
        ? "Last name must contain only alphabets"
        : value.length < 4
        ? "Name must have at least 4 letters"
        : null,
    username: (value) =>
      value.length == 0
        ? "user name can't be empty"
        : !/^[A-Za-z]+$/.test(value)
        ? "User name must contain only alphabets"
        : value.length < 4
        ? "Name must have at least 4 letters"
        : null,
    email: (value) =>
      value.length == 0
        ? "email can't be empty"
        : /^\S+@\S+$/.test(value)
        ? null
        : "Invalid email",
    phonenumber: (value) =>
      value.length === 0
        ? "Phone number can't be empty"
        : !/^[0-9]+$/.test(value)
        ? "Phone number must contain only numbers"
        : value.length < 10
        ? "Phone number must be at least 10 digits"
        : value.length > 10
        ? "Phone number can only contain 10 digits"
        : null,
    password: (value) =>
      value.length == 0 ? "password  can't be empty" : null,
    confirmpassword: (value, values) =>
      value.length == 0
        ? "password can't be empty"
        : value !== values.password
        ? "Passwords did not match"
        : null,
  };

  const form = useForm({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      phonenumber: "",
      password: "",
      confirmpassword: "",
    },
    validate: validation,
  });

  const handleSignup = async (values) => {
    // e.preventDefault();
    console.log("values: ", values);

    try {
      const response = await axios.post(
        "http://localhost:4000/student-registration",
        {
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email,
          username: values.username,
          phonenumber: values.phonenumber,
          password: values.password,
        }
      );
      const { message } = response.data;

      if (message === "User already exists") {
        setError("Already have an account");
        redirect("/student_signup");
        // navigate("/student_signup")
      } else {
        alert("Signup successful!");
        navigate("/login");
      }
    } catch (error) {
      console.error("There was an error signing up:", error);
      alert("There was an error signing up. Please try again.");
    }

    setFirstName("");
    setLastName("");
    setUserName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
  };

  return (
    <>
      {/* <Header /> */}
      <div className="flex justify-center items-center mb-12">
        <div className="h[1400px] flex flex-col justify-center items-center">
          <div className="mt-6 sm:mt-[-12px]">
            <h1 className="text-[#09335F] font-bold sm:text-[64px] text-[25px]">
              Welcome to Ha&minus;Ge&#39;ez
            </h1>
          </div>
          <Button
            variant="default"
            className="border-none font-bold sm:text-lg flex justify-end items-end ml-auto sm:mr-24"
            onClick={backButton}
          >
            Back
          </Button>

          <div className="bg-[#D9D9D9] bg-opacity-[40%] sm:pl-10 sm:pt-6 mx-10 rounded-[20px]">
            <div className="flex-1 flex sm:flex-row flex-col-reverse">
              <div className="w-full mr-12">
                <img
                  src={teaching}
                  alt="teaching"
                  className="size-[650px] rounded-lg w-full hidden sm:block"
                />
                <div className="flex my-4 ml-3">
                  <h1 className="mt-2 font-semibold">
                    Already have an account?{" "}
                  </h1>
                  <Button
                    variant="transparent"
                    className="pt-[6px] px-0 ml-4 font-bold"
                    onClick={() => navigate("/login")}
                  >
                    Sign In
                  </Button>
                </div>
              </div>
              <div className="border-[1px] p-16 w-full bg-white sm:mb-6 sm:mr-10 rounded-[20px]">
                {error && (
                  <Alert title="Error" color="red">
                    {error}
                  </Alert>
                )}
                <form
                  onSubmit={form.onSubmit(handleSignup)}
                  className="space-y-4"
                >
                  <Forms
                    form={form}
                    withAsterisk
                    type="text"
                    label="First Name"
                    placeholder="first name"
                    validation={validation}
                    field="firstname"
                    value={firstname}
                    // onChange={(e) => form.setFieldValue('firstname', e.target.value)}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <Forms
                    form={form}
                    withAsterisk
                    type="text"
                    label="Last Name"
                    placeholder="last name"
                    validation={validation}
                    field="lastname"
                    value={lastname}
                    // onChange={(e) => form.setFieldValue('lastname', e.target.value)}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <Forms
                    form={form}
                    withAsterisk
                    type="text"
                    label="User Name"
                    placeholder="user name"
                    validation={validation}
                    field="username"
                    value={username}
                    // onChange={(e) => form.setFieldValue('username', e.target.value)}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <Forms
                    form={form}
                    withAsterisk
                    type="text"
                    label="Email"
                    placeholder="email"
                    validation={validation}
                    field="email"
                    value={email}
                    // onChange={(e) => form.setFieldValue('email', e.target.value)}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Forms
                    form={form}
                    withAsterisk
                    type="text"
                    label="Phone Number"
                    placeholder="phone number"
                    validation={validation}
                    field="phonenumber"
                    // componentMask={IMaskInput}
                    // mask="+2519 00-00-00-00"
                    value={phonenumber}
                    // onChange={(e) => setPhoneNumber(e.target.value)}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d{0,10}$/.test(value)) {
                        // Accept only digits
                        setPhoneNumber(value);
                      }
                    }}
                    // onAccept={(value) => setPhoneNumber(value)}
                  />
                  <Forms
                    form={form}
                    withAsterisk
                    type="password"
                    label="Password"
                    placeholder="password"
                    validation={validation}
                    field="password"
                    value={password}
                    // onChange={(e) => form.setFieldValue('password', e.target.value)}
                    onChange={(e) => setPassword(e.target.value)}
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
                  <Group justify="flex-end" mt="xl">
                    <Button
                      type="submit"
                      className="bg-[#09335F] rounded-3xl w-full mt-2"
                    >
                      Sign Up
                    </Button>
                  </Group>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Student_Signup;
