import { TextInput, Textarea, Button, Group, Alert, Loader } from "@mantine/core";
import { useState } from "react";
import { FaFileImage } from "react-icons/fa6";
import Admin_Side_NavBar from "../Admin_Side_NavBar/Admin_Side_NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Admin_Header_Nav_Bar from "../Admin_Side_NavBar/Admin_Header_Nav_Bar/Admin_Header_Nav_Bar";
import { storage } from "../../../../config/firebaseConfig"; // Adjust the path as per your project structure
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Category_Creation = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [showIcon, setShowIcon] = useState(true);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState();
  const [uploading, setUploading] = useState(false); // State for upload progress

  const handleImageSelect = (event) => {
    const uploadedImage = event.target.files[0];
    setSelectedImage(uploadedImage);
    const imageUrl = URL.createObjectURL(uploadedImage);
    setImage(imageUrl);
    setShowIcon(false);
  };

  const handleCreate = async () => {
    try {
      if (!selectedImage) {
        setError("Please select an image");
      }
      
      setUploading(true); // Start uploading state
  
      // Upload the image to Firebase Storage
      const storageRef = ref(storage, `categoryImages/${selectedImage.name}`);
      const uploadTask = uploadBytesResumable(storageRef, selectedImage);
  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Progress tracking
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.error("Upload failed:", error);
          setUploading(false);
        },
        async () => {
          // Get the download URL after upload is successful
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
  
          // Now, send the image URL and other details to the backend
          const formData = {
            categoryImage: downloadURL, // Send the Firebase image URL
            categoryName,
            categoryDescription,
          };
  
          const response = await axios.post(
            "http://localhost:4000/category-creation",
            formData, 
          );
  
          const { message } = response.data;
          if (message === "Category created successfully") {
            alert("Category created successfully");
            navigate("/admin/dashboard");
          } else if (message === "Category already exists") {
            setError(message);
          }
  
          setUploading(false); // End uploading state
        }
      );
    } catch (error) {
      console.error("There was an error creating category:", error);
      alert("There was an error creating category. Please try again.");
      setUploading(false);
    }
  
    // Reset form after successful creation
    setCategoryName("");
    setCategoryDescription("");
    setImage(null);
    setShowIcon(true);
  };

  return (
    <>
      <Admin_Header_Nav_Bar />
      <Admin_Side_NavBar />
      <div className="flex justify-center">
        <div className="absolute mt-20 space-y-8 bg-[#DDD] py-4 px-6 rounded-xl">
          {error && (
            <Alert title="Error" color="red">
              {error}
            </Alert>
          )}
          <div className="flex space-x-4">
            <h1 className="flex justify-center items-center font-semibold">
              Category Name:
            </h1>
            <TextInput
              placeholder="Enter category name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
          <div className="flex space-x-4 ">
            <h1 className="flex justify-center items-center font-semibold">
              Category Description:
            </h1>
            <Textarea
              placeholder="Enter category description"
              className="w-[400px] h[100px]"
              styles={{ input: { height: "100px" } }}
              value={categoryDescription}
              onChange={(e) => setCategoryDescription(e.target.value)}
            />
          </div>
          <div className="flex">
            <div>
              <h1 className=" font-semibold">Category Image:</h1>
            </div>
            <div className="flex">
              {showIcon && (
                <FaFileImage className="size-60 text-gray-500" />
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
                  disabled={uploading} // Disable button during upload
                >
                  {uploading ? "Uploading..." : "Select file"}
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageSelect}
                  />
                </Button>
              </Group>
            </div>
          </div>
          {uploading && (
                  <div className="flex justify-center mb-4">
                    <Loader size="lg" className="spinner"/> {/* Show loading spinner */}
                  </div>
                )}
          <div className="flex justify-center mt-10">
            <Button
              className="bg-[#13569D] active:bg-[#13569D] w-[150px]"
              onClick={handleCreate}
              disabled={uploading} // Disable button during upload
            >
              {uploading ? "Creating..." : "Create"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category_Creation;
