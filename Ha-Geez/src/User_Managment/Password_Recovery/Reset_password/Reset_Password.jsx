import React from "react";
import { Button, } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { PasswordInput, } from "@mantine/core";

const Reset_Password = () => {
  const navigate = useNavigate();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      password: "secret",
      confirmPassword: "sevret",
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  return (
    <div>
      <Button
        variant="white"
        color="rgba(0, 0, 0, 1)"
        size="md"
        radius="xl"
        onClick={() => navigate("/forgot_password")}
      >
        Back
      </Button>

      <div className="mt-24 ml-[500px]">
        <h1 className="font-bold text-2xl">Reset Your Password</h1>
        <p>Set a new password below</p>
      </div>

      <div className=" flex">
        <img
          src="src/assets/images/Reset_Password/Reset Password image.png"
          alt=""
        />

        <div className="mt-28">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <PasswordInput
              type="text"
              placeholder="Enter New Password"
              className="w-[350px]"
     
              key={form.key("password")}
              {...form.getInputProps("password")}
            />
            <PasswordInput
              type="text"
              placeholder="Confirm New Password"
              className="w-[350px] mt-5"
              
              key={form.key("confirmPassword")}
              {...form.getInputProps("confirmPassword")}
            />
          </form>
          <Button
            variant="filled"
            color="#09335F"
            radius="xs"
            className="ml-36 mt-4 w-[100px]"
            type="submit"
            // onClick={() => navigate("/login")}
          >
            {/* {" "}{" "} */}
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Reset_Password;
