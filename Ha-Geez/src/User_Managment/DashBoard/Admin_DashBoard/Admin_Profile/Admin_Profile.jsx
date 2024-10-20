import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { profile } from "../../../../Pages/Home page/Course_Overview/Reviews/Reviews";
import Admin_Side_NavBar from "../Admin_Side_NavBar/Admin_Side_NavBar";
import { Button, Group, TextInput } from "@mantine/core";
import { FaArrowLeft, FaPen } from "react-icons/fa";
import Admin_Header_Nav_Bar from "../Admin_Side_NavBar/Admin_Header_Nav_Bar/Admin_Header_Nav_Bar";

const Admin_Profile = () => {
  const [clicked, setClicked] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile[1]); // Initialize with first profile
  const [editClicked, setEditClicked] = useState(false);
  const [activeInput, setActiveInput] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleChange = (event, field) => {
    const { value } = event.target;
    if (editClicked) {
      setEditedProfile((prevProfile) => ({
        ...prevProfile,
        [field]: value,
      }));
    }
  };

  const editbuttonhandler = (field) => {
    setActiveInput(field);
    setEditClicked(!editClicked);
  };

  return (
    <>
      <Admin_Header_Nav_Bar />
      <Admin_Side_NavBar />

      <div className="absolute mt-16">
        <div>
          <Button
            variant="transparent"
            className="text-black focus:text-black ml-"
            onClick={() => navigate("/admin/dashboard")}
          >
            <FaArrowLeft size="25px" />
          </Button>
        </div>
        <div className="ml-40 flex">
          <div className="size32 ">
            <img
              src={editedProfile.image}
              alt="profile"
              className="size-32 rounded-full"
            />
            <div className="mt-4 space-x-4 ml-[-40px]">
              <Button
                variant="filled"
                size="xs"
                className="bg-[#284767] active:bg-[#4a7bad]"
              >
                Change Photo
              </Button>
              <Button
                variant="filled"
                size="xs"
                onClick={handleClick}
                className={`bg-red-500 active:bg-red-400 `}
              >
                Delete Photo
              </Button>
            </div>
          </div>
          <div className="bg-[#D9D9D9] bg-opacity-[30%] w-[500px] ml-28 mt-[-30px]">
            <div className="px-28 py-20 space-y-6">
              <TextInput
                value={editedProfile.email}
                label="Email"
                placeholder="Email"
                className="w-full"
                disabled
              />
              <div className="flex">
                <TextInput
                  value={editedProfile.firstname}
                  label="First Name"
                  placeholder="First Name"
                  className="w-full"
                  disabled={!editClicked || activeInput !== "firstname"}
                  onChange={(event) => handleChange(event, "firstname")}
                />
                <Button
                  variant="transparent"
                  className="ml-[-30px] mt-[25px] p-0 z-10 text-black active:text-black"
                  onClick={() => editbuttonhandler("firstname")}
                >
                  <FaPen />
                </Button>
              </div>
              <div className="flex">
                <TextInput
                  value={editedProfile.lastname}
                  label="Last Name"
                  placeholder="Last Name"
                  className="w-full"
                  disabled={!editClicked || activeInput !== "lastname"}
                  onChange={(event) => handleChange(event, "lastname")}
                />
                <Button
                  variant="transparent"
                  className="ml-[-30px] mt-[25px] p-0 z-10 text-black active:text-black"
                  onClick={() => editbuttonhandler("lastname")}
                >
                  <FaPen />
                </Button>
              </div>
              <div className="flex">
                <TextInput
                  value={editedProfile.username}
                  label="User Name"
                  placeholder="User Name"
                  className="w-full"
                  disabled={!editClicked || activeInput !== "username"}
                  onChange={(event) => handleChange(event, "username")}
                />
                <Button
                  variant="transparent"
                  className="ml-[-30px] mt-[25px] p-0 z-10 text-black active:text-black"
                  onClick={() => editbuttonhandler("username")}
                >
                  <FaPen />
                </Button>
              </div>
              <div className="flex">
                <TextInput
                  value={editedProfile.phonenumber}
                  label="Phone Number"
                  placeholder="Phone Number"
                  className="w-full"
                  disabled={!editClicked || activeInput !== "phonenumber"}
                  onChange={(event) => handleChange(event, "phonenumber")}
                />
                <Button
                  variant="transparent"
                  className="ml-[-30px] mt-[25px] p-0 z-10 text-black active:text-black"
                  onClick={() => editbuttonhandler("phonenumber")}
                >
                  <FaPen />
                </Button>
              </div>
              <Group justify="flex-end" mt="lg">
                <Button
                  type="submit"
                  className="bg-[#09335F] rounded-xl active:bg-[#456c95]"
                >
                  Save
                </Button>
              </Group>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin_Profile;
