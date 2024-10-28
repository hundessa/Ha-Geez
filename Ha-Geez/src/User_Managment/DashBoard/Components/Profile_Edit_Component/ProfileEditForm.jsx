/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Button, Group, TextInput } from "@mantine/core";
import { FaPen, FaUserCircle } from "react-icons/fa";
import { storage } from "../../../../config/firebaseConfig";
import { ref, deleteObject } from "firebase/storage";
import axios from "axios";

const ProfileEditForm = ({ profileData, onSave, allowImageUpload = false }) => {
  const [editedProfile, setEditedProfile] = useState(profileData);
  const [editClicked, setEditClicked] = useState(false);
  const [activeInput, setActiveInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(
    profileData?.profilepicture || null
  );

  useEffect(() => {
    setEditedProfile(profileData);
    setImagePreview(
      profileData?.profilepicture ? profileData.profilepicture : null
    );
  }, [profileData]);
  const handleChange = (event, field) => {
    const { value } = event.target;
    if (editClicked) {
      setEditedProfile((prevProfile) => ({
        ...prevProfile,
        [field]: value,
      }));
    }
  };

  const editButtonHandler = (field) => {
    setActiveInput(field);
    setEditClicked(!editClicked);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (editedProfile.profilepicture) {
        // Delete previous image
        const imageRef = ref(storage, editedProfile.profilepicture);
        deleteObject(imageRef).catch((error) =>
          console.error("Error deleting image:", error)
        );
      }
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageDelete = async () => {
    if (editedProfile.profilepicture) {
      try {
        const imageRef = ref(storage, editedProfile.profilepicture);
        await deleteObject(imageRef);
        setEditedProfile((prevProfile) => ({
          ...prevProfile,
          profilepicture: null, // Set to null for deletion
        }));
        setImagePreview("");
        await axios.post("http://localhost:4000/profile-edit", {
          profilepicture: null,
        });
        alert("Image deleted successfully!");
      } catch (error) {
        console.error("Error deleting image:", error);
        alert("Failed to delete image");
      }
    }
  };

  const handleSave = () => {
    onSave(editedProfile, selectedFile);
    setEditClicked(false);
  };

  return (
    <div className="bg-[#D9D9D9] bg-opacity-[30%] w-[500px] p-6 space-y-6 relative top-16 mx-auto justify-center">
      {allowImageUpload && (
        <div className="flex flex-col items-center">
          {imagePreview ? (
            // If there's an image URL, display it as an image
            <img
              src={imagePreview}
              alt="profile"
              className="w-32 h-32 rounded-full"
            />
          ) : (
            // Otherwise, display the default icon
            <FaUserCircle className="w-32 h-32 rounded-full text-slate-300" />
          )}
          <div className="mt-4 space-x-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="fileInput"
            />
            <Button
              variant="filled"
              size="xs"
              className="bg-[#284767] active:bg-[#4a7bad]"
              onClick={() => document.getElementById("fileInput").click()}
            >
              Change Photo
            </Button>
            <Button
              variant="filled"
              size="xs"
              onClick={handleImageDelete}
              className="bg-red-500 active:bg-red-400"
            >
              Delete Photo
            </Button>
          </div>
        </div>
      )}
      {["email", "firstname", "lastname", "username", "phonenumber"].map(
        (field) => (
          <div className="flex" key={field}>
            <TextInput
              value={editedProfile?.[field]}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              placeholder={field}
              className="w-full"
              disabled={!editClicked || activeInput !== field}
              onChange={(event) => handleChange(event, field)}
            />
            {field !== "email" && ( // Only show edit button for non-email fields
              <Button
                variant="transparent"
                className="ml-[-30px] mt-[25px] p-0 z-10 text-black active:text-black"
                onClick={() => editButtonHandler(field)}
              >
                <FaPen />
              </Button>
            )}
          </div>
        )
      )}
      <Group justify="flex-end" mt="lg">
        <Button
          type="submit"
          variant="filled"
          className="bg-[#284767] active:bg-[#4a7bad]"
          onClick={handleSave}
        >
          Save Changes
        </Button>
      </Group>
    </div>
  );
};

export default ProfileEditForm;
