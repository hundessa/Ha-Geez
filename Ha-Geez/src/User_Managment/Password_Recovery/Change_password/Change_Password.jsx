import { Button, PasswordInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Change_Password = () => {

    const navigate = useNavigate()
  return (
    <>
    <div className="flex justify-end ml-auto mr-24 mt-8">
        <Button className="m-0 p0" color="#09335F" onClick={() => navigate("/student_landingpage")}>Back</Button>
    </div>
      <div className="flex justify-center items-center my10 bg-[#DDD] bg-opacity-10">
        <div className="flex space-x-16 justify-center items-center my10 mx20 w-[900px] h-[500px] bg-slate-200">
          <div className="flex">
            <h1 className="flex font-semibold text-3xl justify-center items-center">
              Change Password
            </h1>
          </div>
          <div className="w-[300px] space-y-4">
            <PasswordInput
              label="Current Password"
              placeholder="current password"
            />
            <PasswordInput label="New Password" placeholder="new password" />
            <PasswordInput
              label="Confirm Password"
              placeholder="confirm password"
            />
        <Button color="#09335F" className="flex justify-center mx-auto" onClick={() => alert("Password Changed Successfully")}>Save</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Change_Password;
