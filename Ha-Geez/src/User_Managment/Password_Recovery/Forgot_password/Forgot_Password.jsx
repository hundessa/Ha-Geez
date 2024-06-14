import React from "react";
import { Button } from "@mantine/core";
import "../../Login/Login.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { TextInput } from "@mantine/core";

const Forgot_Password = () => {
  const navigate = useNavigate();
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { email: "", },

    validate: {
      // password: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div className="flex ">
      <Button variant="white" color="rgba(8, 8, 8, 1)" size="md" onClick={() => navigate("/")}>
        Back
      </Button>
  <div className="ml-20 mt-20">

    <div className="flex">
 <img
          className="w-[300px] h-[400px]"
          src="src/assets/images/Forgot_Password/image.png"
          alt=""
        />
      
      <div className="wrap">
        <h1 className=" mt-24 ml-24 font-bold w-[200px]">
          Forgot Your Password?
        </h1>
        <form onSubmit={form.onSubmit(() => console.log())}>
          <div className=" w-[400px] h-[300px] mt-10 ml-24">
            <div className="mt-10 mr-32 ">
              
                <div className="input-box flex mt-20 ">
                  <TextInput
                    type="text"
                    placeholder="Enter Your E-mail"
                    required
                      variant="unstyled"
                    className="border-b-[4px] border-[#09335F] w-[550px]"
                    {...form.getInputProps("email")}
                  />
                </div>

                <Button
                  className="mt-8 mr-6 w-[250px]"
                  variant="gradient"
                  gradient={{ from: 'rgba(78, 135, 194, 1)', to: 'rgba(24, 53, 84, 1)', deg: 94 }}
                  size="md"
                  radius="md"
                  type="submit" 
                  onClick={() => navigate("/otp")}
                >
                  Reset Password
                </Button>
            </div>
          </div>
        </form>
      </div>
    </div>


  </div>


       
    </div>
  );
};

export default Forgot_Password;
