// import { TextInput, Textarea, Button, Group, Alert } from "@mantine/core";
// import { useState } from "react";
// import { FaFileImage } from "react-icons/fa6";
// import Student_Header from "../../Student_DashBoard/Student_Landing_Page/Components/Student_Header";
// import Admin_Side_NavBar from "../Admin_Side_NavBar/Admin_Side_NavBar";
// import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// const Category_Creation = () => {
//   // const openRef = useRef(null);
//   // const navigate = useNavigate();
//   const [image, setImage] = useState();
//   const [showIcon, setShowIcon] = useState(true);
//   const [categoryName, setCategoryName] = useState("");
//   const [categoryDescription, setCategoryDescription] = useState("");
//   const [selectedImage, setSelectedImage] = useState();
//   const [error, setError] = useState();

//   // useEffect(() => {
//   //   const request = indexedDB.open("myDatabase", 1);

//   //   request.onerror = (event) => {
//   //     console.error("Database error", event.target.error);
//   //   };

//   //   request.onsuccess = (event) => {
//   //     console.log("Database opened successfully", event);
//   //   };

//   //   request.onupgradeneeded = (event) => {
//   //     const db = event.target.result;
//   //     const objectStore = db.createObjectStore("myObjectStore", {
//   //       keyPath: "id",
//   //       autoIncrement: true,
//   //     });
//   //     objectStore.createIndex("name", "name", { unique: false });
//   //     console.log("Object store and index created");
//   //   };
//   // }, []);

//   const handleImageSelect = (event) => {
// setSelectedImage(event.target.files[0]);
// const uploadedImage = event.target.files[0];
//     const imageUrl = URL.createObjectURL(uploadedImage);
//     setImage(imageUrl);
//     setShowIcon(false);
//   }


//   const handleCreate = async (values) => {
//     try {
//         if (!selectedImage) {
//           return alert("Please select image");
//         }
  
//         const formData = new FormData();
//         formData.append("image", selectedImage);
//         formData.append("categoryName", values.categoryName);
//         formData.append("categoryDescription", values.categoryDescription);


//         const response = await axios.post("http://localhost:4000/category-creation", formData,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//           });
//         const { message } = response.data;
//         if ( message === "Category created successfully"){
//           alert("Category created successfully");
//         }else{
//           setError(message)
//         }
//     }catch(error) {
//       console.error("There was an error creating category:", error);
//       alert("There was an error creating category. Please try again.");
//     }
//   }

//   // const handleCreate = () => {
//   //   const request = indexedDB.open("myDatabase", 1);

//   //   request.onsuccess = (event) => {
//   //     const db = event.target.result;
//   //     const transaction = db.transaction(["myObjectStore"], "readwrite");
//   //     const objectStore = transaction.objectStore("myObjectStore");
//   //     const data = {
//   //       name: categoryName,
//   //       description: categoryDescription,
//   //       image: image,
//   //     };

//   //     const requestAdd = objectStore.add(data);

//   //     requestAdd.onsuccess = () => {
//   //       console.log("Data added to the store");
//   //     };

//   //     requestAdd.onerror = (event) => {
//   //       console.error("Error adding data: ", event.target.error);
//   //     };
//   //   };

//   //   setCategoryDescription("");
//   //   setCategoryName("");
//   //   setImage(null);
//   //   setShowIcon(true);
//   // };


//   return (
//     <>
//       <Student_Header />
//       <Admin_Side_NavBar />
//       <div className="flex justify-center">
//         <div className="absolute mt-20 space-y-8 bg-[#DDD] py-4 px-6 rounded-xl">
//         {error && (
//             <Alert title="Error" color="red">
//               {error}
//             </Alert>
//           )}
//           <div className="flex space-x-4">
//             <h1 className="flex justify-center items-center font-semibold">
//               Category Name:
//             </h1>
//             <TextInput
//               placeholder="Enter category name"
//               value={categoryName}
//               onChange={(e) => setCategoryName(e.target.value)}
//             />
//           </div>
//           <div className="flex space-x-4 ">
//             <h1 className="flex justify-center items-center font-semibold">
//               Category Description:
//             </h1>
//             <Textarea
//               placeholder="Enter category description"
//               className="w-[400px] h[100px]"
//               styles={{ input: { height: "100px" } }}
//               value={categoryDescription}
//               onChange={(e) => setCategoryDescription(e.target.value)}
//             />
//           </div>
//           <div className="flex">
//             <div>
//               <h1 className=" font-semibold">Category Image:</h1>
//             </div>
//             <div className="flex">
//               {showIcon && (
//                 <FaFileImage
//                   // onClick={() => openRef.current?.()}
//                   className="size-60 text-gray-500"
//                 />
//               )}
//               {image && (
//                 <img
//                   src={image}
//                   alt="category image"
//                   className="size-[350px] rounded-xl mx-10"
//                 />
//               )}
//               <Group justify="center" mt="md">
//                 <Button
//                   component="label"
//                   htmlFor="image-upload"
//                   className="bg-[#13569D]"
//                 >
//                   Select file
//                   <input
//                     id="image-upload"
//                     type="file"
//                     accept="image/*"
//                     style={{ display: "none" }}
//                     onChange={handleImageSelect}
//                   />
//                 </Button>
//               </Group>
//             </div>
//           </div>
//           <div className="flex justify-center mt-10">
//             <Button
//               className="bg-[#13569D] active:bg-[#13569D] w-[150px]"
//               onClick={handleCreate}
//             >
//               Create
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Category_Creation;




import { TextInput, Textarea, Button, Group, Alert } from "@mantine/core";
import { useState } from "react";
import { FaFileImage } from "react-icons/fa6";
import Student_Header from "../../Student_DashBoard/Student_Landing_Page/Components/Student_Header";
import Admin_Side_NavBar from "../Admin_Side_NavBar/Admin_Side_NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Category_Creation = () => {
  // const openRef = useRef(null);
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [showIcon, setShowIcon] = useState(true);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null); // Set initial state to null
  const [error, setError] = useState();

  // useEffect(() => {
  //   const request = indexedDB.open("myDatabase", 1);

  //   request.onerror = (event) => {
  //     console.error("Database error", event.target.error);
  //   };

  //   request.onsuccess = (event) => {
  //     console.log("Database opened successfully", event);
  //   };

  //   request.onupgradeneeded = (event) => {
  //     const db = event.target.result;
  //     const objectStore = db.createObjectStore("myObjectStore", {
  //       keyPath: "id",
  //       autoIncrement: true,
  //     });
  //     objectStore.createIndex("name", "name", { unique: false });
  //     console.log("Object store and index created");
  //   };
  // }, []);

  const handleImageSelect = (event) => {
    const uploadedImage = event.target.files[0];
    setSelectedImage(uploadedImage); // Set selected image to the first file
    const imageUrl = URL.createObjectURL(uploadedImage);
    setImage(imageUrl);
    setShowIcon(false);
  };

  const handleCreate = async () => {
    try {
      if (!selectedImage) {
        return alert("Please select an image");
      }

      const formData = new FormData();
      formData.append("image", selectedImage);
      formData.append("categoryName", categoryName);
      formData.append("categoryDescription", categoryDescription);

      const response = await axios.post(
        "http://localhost:4000/category-creation",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const { message } = response.data;
      if (message === "Category created successfully") {
        alert("Category created successfully");
        navigate("/admin_dashboard")
      } else if( message === "Category already exists") {
        setError(message);
      }
    } catch (error) {
      console.error("There was an error creating category:", error);
      alert("There was an error creating category. Please try again.");
    }

    setCategoryName("");
    setCategoryDescription("");
    setImage(null);
    setShowIcon(true);
  };

  // const handleCreate = () => {
  //   const request = indexedDB.open("myDatabase", 1);

  //   request.onsuccess = (event) => {
  //     const db = event.target.result;
  //     const transaction = db.transaction(["myObjectStore"], "readwrite");
  //     const objectStore = transaction.objectStore("myObjectStore");
  //     const data = {
  //       name: categoryName,
  //       description: categoryDescription,
  //       image: image,
  //     };

  //     const requestAdd = objectStore.add(data);

  //     requestAdd.onsuccess = () => {
  //       console.log("Data added to the store");
  //     };

  //     requestAdd.onerror = (event) => {
  //       console.error("Error adding data: ", event.target.error);
  //     };
  //   };

  //   setCategoryDescription("");
  //   setCategoryName("");
  //   setImage(null);
  //   setShowIcon(true);
  // };

  return (
    <>
      <Student_Header />
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
                    onChange={handleImageSelect}
                  />
                </Button>
              </Group>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Button
              className="bg-[#13569D] active:bg-[#13569D] w-[150px]"
              onClick={handleCreate}
            >
              Create
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category_Creation;
