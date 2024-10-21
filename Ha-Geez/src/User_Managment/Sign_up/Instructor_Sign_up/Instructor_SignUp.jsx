import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Group, Select, Loader } from "@mantine/core"; // Import Loader from Mantine
import { useForm } from "@mantine/form";
import Forms from "../Student_Sign_up/Forms/Forms";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../config/firebaseConfig";

const Instructor_SignUp = () => {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [phonenumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [levelofeducation, setLevelofEducation] = useState();
  const [fieldofstudy, setFieldofStudy] = useState();
  const [yearsofexperience, setYearsofExperience] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false); // State for loading spinner

  const backButton = () => {
    navigate("/");
  };

  const validation = {
    firstname: (value) =>
      value.length === 0
        ? "First name can't be empty"
        : !/^[A-Za-z]+$/.test(value)
        ? "First name must contain only alphabets"
        : value.length < 4
        ? "Name must have at least 4 letters"
        : null,
    lastname: (value) =>
      value.length === 0
        ? "Last name can't be empty"
        : !/^[A-Za-z]+$/.test(value)
        ? "Last name must contain only alphabets"
        : value.length < 4
        ? "Name must have at least 4 letters"
        : null,
    username: (value) =>
      value.length === 0
        ? "User name can't be empty"
        : !/^[A-Za-z]+$/.test(value)
        ? "User name must contain only alphabets"
        : value.length < 4
        ? "Name must have at least 4 letters"
        : null,
    email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    password: (value) =>
      value.length === 0 ? "Password can't be empty" : null,
    confirmpassword: (value, values) =>
      value.length === 0
        ? "Password can't be empty"
        : value !== values.password
        ? "Passwords did not match"
        : null,
  };

  const form = useForm({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      phonenumber: "",
      password: "",
      confirmpassword: "",
    },
    validate: validation,
  });

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSignup = async (values) => {
    try {
      setUploading(true); // Set loading state to true before starting upload

      const storageRef = ref(storage, `instructorFiles/${selectedFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, selectedFile);

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
          setUploading(false); // Set loading state to false on error
        },
        async () => {
          // Get the download URL after upload is successful
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          const formData = {
            ...values,
            professionalcertificate: downloadURL,
          };

          const response = await axios.post(
            "http://localhost:4000/instructor-registration",
            formData
          );
          const { message } = response.data;
          if (message === "User already exists") {
            alert("Already have an account");
            navigate("/instructor_signup");
          } else if (message === "Account Created") {
            alert("Signup successful!");
            navigate("/login");
          }
        }
      );
    } catch (error) {
      console.error("There was an error signing up:", error);
      alert("There was an error signing up. Please try again.");
      setUploading(false);
    } 

    // Clear the form fields
    setFirstName("");
    setLastName("");
    setUserName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
    setLevelofEducation("");
    setFieldofStudy("");
  };

  return (
    <>
      <div className="fle h-screen justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="mt-10">
            <h1 className="text-[#09335F] font-semibold text-[24px]">
              Please fill up this form if you want to become an instructor of
              Ha-Ge’ez
            </h1>
          </div>
          <Button
            variant="default"
            className="border-none font-bold text-lg flex justify-end items-end ml-auto mr-24"
            onClick={backButton}
          >
            Back
          </Button>
          <div className="border-[1px] p-16 w-[500px] bg-white bg-opacity-30 rounded-[20px]">
            <form onSubmit={form.onSubmit(handleSignup)} className="space-y-4">
              <Forms
                form={form}
                withAsterisk
                type="text"
                label="First Name"
                placeholder="first name"
                validation={validation}
                field="firstname"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Forms
                form={form}
                withAsterisk
                type="text"
                label="Last Name"
                placeholder="last name"
                validation={validation}
                field="lastname"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
              <Forms
                form={form}
                withAsterisk
                type="text"
                label="User Name"
                placeholder="user name"
                validation={validation}
                field="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <Forms
                form={form}
                withAsterisk
                type="text"
                label="Email"
                placeholder="email"
                validation={validation}
                field="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Forms
                form={form}
                withAsterisk
                type="text"
                label="Phone Number"
                placeholder="phone number"
                validation={validation}
                field="phonenumber"
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                />
              <Select
                form={form}
                withAsterisk
                data={["Degree", "Masters", "PHD"]}
                type="text"
                label="Level Of Education"
                placeholder="level of education"
                validation={validation}
                field="levelofeducation"
                value={levelofeducation}
                onChange={(value) =>
                  form.setFieldValue("levelofeducation", value)
                }
              />
              <Forms
                form={form}
                withAsterisk
                type="text"
                label="Field of Study"
                placeholder="field of study"
                validation={validation}
                field="fieldofstudy"
                value={fieldofstudy}
                onChange={(e) => setFieldofStudy(e.target.value)}
              />
              <div className="space-y-2">
                <label htmlFor="fileUpload" className="block">
                  Upload Professional Certificate (If any):
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  name="fileUpload"
                  onChange={handleFileSelect}
                  className="block w-full p-2 border rounded"
                  />
                {selectedFile && (
                  <p className="text-gray-500">{selectedFile.name}</p>
                )}
              </div>
              <Forms
                form={form}
                withAsterisk
                type="text"
                label="Years of Experience"
                placeholder="years of experience"
                validation={validation}
                field="yearsofexperience"
                value={yearsofexperience}
                onChange={(e) => setYearsofExperience(e.target.value)}
              />
              <Forms
                form={form}
                withAsterisk
                type="password"
                label="Password"
                placeholder="password"
                validation={validation}
                field="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              <Forms
                form={form}
                withAsterisk
                type="password"
                label="Confirm Password"
                placeholder="confirm password"
                validation={validation}
                field="confirmpassword"
              />
                {uploading && (
                  <div className="flex justify-center mb-4">
                    <Loader size="lg" className="spinner"/> {/* Show loading spinner */}
                  </div>
                )}
              <Group justify="flex-end" mt="xl">
                <Button
                  type="submit"
                  className="bg-[#09335F] rounded-3xl w-full mt-2"
                  disabled={uploading} // Disable button while uploading
                >
                  Sign Up
                </Button>
              </Group>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructor_SignUp;
