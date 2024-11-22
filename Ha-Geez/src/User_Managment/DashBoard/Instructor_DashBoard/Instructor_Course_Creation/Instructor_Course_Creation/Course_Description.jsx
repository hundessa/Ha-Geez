import { useState } from "react";
import { Alert, Button, Group, Select, TextInput } from "@mantine/core";
import Student_Header from "../../../Student_DashBoard/Student_Landing_Page/Components/Student_Header";
import Instructor_Sidebar from "../../Instructor_landingpage/Components/Instructor_Sidebar";
import Course_Creation_Sidebar from "./Component/Course_Creation_Sidebar";
import { FaRegImage } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../../config/firebaseConfig";
import axios from "axios";

const Course_Description = () => {
  const [image, setImage] = useState();
  const [showIcon, setShowIcon] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState();
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [courseLevel, setCourseLevel] = useState("");
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    setSelectedImage(uploadedImage);
    const imageUrl = URL.createObjectURL(uploadedImage);
    setImage(imageUrl);
    setShowIcon(false);
  };

 const handleNext = async () => {
    try {
      if (!selectedImage) {
        setError("Please select an image")
      }

      setUploading(true);

      const storageRef = ref(storage, `courseImages/${selectedImage.name}`);
      const uploadTask = uploadBytesResumable(storageRef, selectedImage);

      uploadTask.on(
        "state_changed",
        () => {
          (error) => {
            console.error("Upload failed ", error);
            setUploading(false);
          }
          async () => {
            const  downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

            const formData = {
              courseName,
              courseDescription,
              courseCategory,
              courseLevel,
              courseImage: downloadURL,
            }

            const response = await axios.post(
              "http://localhost:4000/course-creation",
              formData
            );

            const { message } = response.data;
            if(message === "Course created successfully") {
              alert("Course created successfuly")
              navigate("/instructor/course_creation");
            }else if(message === "Course already exist") {
              setError(message)
            }
            setUploading(false)
          }
        }
      )

    } catch (error) {
     console.error("There was an error creating course:", error);
     alert("There was an error creating course. Please try again.");
     setUploading(false);
    }

    setCourseName("");
    setCourseDescription("");
    setCourseCategory("");
    setCourseLevel("");
    setImage(null);
    setShowIcon(true);
  }

  return (
    <>
      <Student_Header />
      <Instructor_Sidebar />
      <Course_Creation_Sidebar />

      <div className="absolute mt-20 ml-[300px]">
        {error && (
          <Alert title="Error" color="red">
            {error}
          </Alert>
        )}
        <div>
          <div className="space-y-10">
            <div className="space-y-2">
              <h1 className="font-semibold">Course Name</h1>
              <TextInput
                className="w-[700px]"
                onChange={(e) => setCourseName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <h1 className="font-semibold">Course Description</h1>
              <TextInput
                className="w-[700px]"
                onChange={(e) => setCourseDescription(e.target.value)}
              />
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
                  onChange={(e) => setCourseCategory(e.target.value)}
                />
              </div>
              <div>
                <h1 className="font-semibold">Level</h1>
                <Select
                  //   label="Level"
                  placeholder="Level"
                  data={["Beginner", "Intermidiate", "Advanced"]}
                  className="w-[325px]"
                  onChange={(e) => setCourseLevel(e.target.value)}
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
                    disabled={uploading}
                  >
                    {uploading ? "Uploading..." : "Select file"}
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
        <div className="flex justify-end mt-12">
          <Button
            className="w-[100px]"
            variant="filled"
            color="#09335F"
            onClick={() =>
              navigate("/instructor/course_creation/course_content")
            }
          >
            Next
          </Button>
        </div>
        <div className="flex justify-start ml-6">
          <Button
            className="w-[100px]"
            variant="filled"
            color="#09335F"
            onClick={handleNext}
            disabled={uploading}
          >
            Previous
          </Button>
        </div>
      </div>
    </>
  );
};

export default Course_Description;
