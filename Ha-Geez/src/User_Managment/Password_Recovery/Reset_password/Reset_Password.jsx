import React from "react";
import { Button, TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";


const Reset_Password = () => {
  const navigate = useNavigate();
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

   <img src="src/assets/images/Reset_Password/Reset Password image.png" alt="" />

   <div className="mt-28">
    <form action="">
    <TextInput type="text" placeholder="Enter New Password"  className="w-[350px]"/>
    <TextInput type="text" placeholder="Confirm New Password" className="w-[350px] mt-5"/>
</form>
<Button variant="filled" color="#09335F" radius="xs" className="ml-36 mt-4 w-[100px]" onClick={() => navigate("/login")} > Reset </Button>
   </div>



</div>
     

    </div>
  );
};

export default Reset_Password;
