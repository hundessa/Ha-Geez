import { useState } from "react";
import { Button, Group, Select, TextInput } from "@mantine/core";
import Student_Header from "../../../Student_DashBoard/Student_Landing_Page/Components/Student_Header";
import Instructor_Sidebar from "../../Instructor_landingpage/Components/Instructor_Sidebar";
import Course_Creation_Sidebar from "./Component/Course_Creation_Sidebar";
import { FaRegImage } from "react-icons/fa6";

const Course_Description = () => {

    const [image, setImage] = useState();
    const [showIcon, setShowIcon] = useState(true);

    const handleImageUpload = (event) => {
        const uploadedImage = event.target.files[0];
        const imageUrl = URL.createObjectURL(uploadedImage);
        setImage(imageUrl);
        setShowIcon(false);
      };

  return (
    <>
      <Student_Header />
      <Instructor_Sidebar />
      <Course_Creation_Sidebar />

      <div className="absolute mt-20 ml-[300px]">
        <div className="space-y-10">
          <div className="space-y-2">
            <h1 className="font-semibold">Course Name</h1>
            <TextInput className="w-[700px]" />
          </div>
          <div className="space-y-2">
            <h1 className="font-semibold">Course Description</h1>
            <TextInput className="w-[700px]" />
          </div>
          <div className="space-x-12 flex">
            <div>
              <h1 className="font-semibold">Category</h1>
              <Select
                //   label="Category"
                placeholder="Category"
                data={[
                  "Marketing",
                  "Business",
                  "Development",
                  "Finance",
                  "Design",
                ]}
                className="w-[325px]"
              />
            </div>
            <div>
              <h1 className="font-semibold">Level</h1>
              <Select
                //   label="Level"
                placeholder="Level"
                data={[
                  "Beginner",
                  "Intermidiate",
                  "Advanced",
                ]}
                className="w-[325px]"
              />
            </div>
          </div>
          <div>
          <h1 className="font-semibold">Course Image</h1>
          <div className="flex">
              {showIcon && (
                <FaRegImage
                  // onClick={() => openRef.current?.()}
                  className="size-60 text-gray-500"
                />
              )}
              {image && (
                <img
                  src={image}
                  alt="category image"
                  className="size-[350px] rounded-xl mx-10"
                />
              )}
              <Group justify="center" mt="md">
                <Button
                  component="label"
                  htmlFor="image-upload"
                  className="bg-[#13569D] ml-10"
                >
                  Select file
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                </Button>
              </Group>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course_Description;
