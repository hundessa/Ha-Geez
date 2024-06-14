import { TextInput, Textarea, Button, Group } from "@mantine/core";
import { useState } from "react";
import { FaFileImage } from "react-icons/fa6";
import Student_Header from "../../Student_DashBoard/Student_Landing_Page/Components/Student_Header";
import Admin_Side_NavBar from "../Admin_Side_NavBar/Admin_Side_NavBar";
import { useNavigate } from "react-router-dom";

const Category_Creation = () => {
  // const openRef = useRef(null);
  const navigate = useNavigate();
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
      <Admin_Side_NavBar/>
      <div className="flex justify-center">
        <div className="absolute mt-20 space-y-8 bg-[#DDD] py-4 px-6 rounded-xl">
          <div className="flex space-x-4">
            <h1 className="flex justify-center items-center font-semibold">
              Category Name:
            </h1>
            <TextInput placeholder="Enter category name" />
          </div>
          <div className="flex space-x-4 ">
            <h1 className="flex justify-center items-center font-semibold">
              Category Description:
            </h1>
            <Textarea
              placeholder="Enter category description"
              className="w-[400px] h[100px]"
              styles={{ input: { height: '100px' } }}
            />
          </div>
          <div className="flex">
            <div>
              <h1 className=" font-semibold">Category Image:</h1>
            </div>
            <div className="flex">
              {showIcon && (
                <FaFileImage
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
                  className="bg-[#13569D]"
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
          <div className="flex justify-center mt-10">
            <Button className="bg-[#13569D] active:bg-[#13569D] w-[150px]" onClick={() => navigate("/list_of_courses_tobe_approved")}>
              Create
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category_Creation;
