// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Alert, Button, PasswordInput } from "@mantine/core";
// import axios from "axios";

// const Change_Password = () => {
//   const navigate = useNavigate();
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [role, setRole] = useState(""); 
//   const [email, setEmail] = useState("");


//   // Set role state on component mount
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user && user.role && user.email) {
//       setRole(user.role);
//       setEmail(user.email);
//     } else {
//       setError("User is not logged in");
//     }
//   }, []);

//   const handleChangePassword = async () => {

//     if (newPassword !== confirmPassword) {
//       setError("New password and confirm password do not match");
//       return;
//     }

//     try {

//       // Retrieve email from localStorage
//     // const user = JSON.parse(localStorage.getItem("user"));

//     // if (!user || !user.email) {
//     //   setError("User is not logged in");
//     //   return;
//     // }

//       const values = {
//         email,
//         currentPassword,
//         newPassword,
//       };

//       const response = await axios.post(
//         "http://localhost:4000/change-password",
//         values
//       );

//       const { message, role } = response.data;
//       if (message === "Current password doesn't match") {
//         setError("Current password doesn't match");
//       } else if (message === "Password changed successfully") {
//         alert("Password Changed Successfully");
//         setRole(role);
//         if (role === "Student") {
//           window.location.href = "/student_landingpage";
//         } else if (role === "Instructor") {
//           window.location.href = "/instructor_landingpage";
//         }
//       }
//     } catch (err) {
//       console.log(err);
//       setError("An error occurred while changing the password");
//     }
//   };

//   const handleBackButton = () => {
//     if( role === "Student" ){
//       navigate("/student_landingpage")
//     }else if ( role === "Instructor" ){
//       navigate("/student_landingpage")
//     } 

//   }

//   return (
//     <>
//       <div className="flex justify-end ml-auto mr-24 mt-8">
//         <Button
//           className="m-0 p0"
//           color="#09335F"
//           onClick={handleBackButton}
//         >
//           Back
//         </Button>
//       </div>
//       <div className="flex justify-center items-center my10 bg-[#DDD] bg-opacity-10">
//         <div className="flex space-x-16 justify-center items-center my10 mx20 w-[900px] h-[500px] bg-slate-200">
//           <div className="flex">
//             <h1 className="flex font-semibold text-3xl justify-center items-center">
//               Change Password
//             </h1>
//           </div>
//           {error && (
//             <Alert title="Error" color="red">
//               {error}
//             </Alert>
//           )}
//           <div className="w-[300px] space-y-4">
//             <PasswordInput
//               label="Current Password"
//               placeholder="current password"
//               value={currentPassword}
//               onChange={(e) => setCurrentPassword(e.target.value)}
//               onFocus={() => setError(null)} // Clear error on input focus
//             />
//             <PasswordInput
//               label="New Password"
//               placeholder="new password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               onFocus={() => setError(null)} // Clear error on input focus
//             />
//             <PasswordInput
//               label="Confirm Password"
//               placeholder="confirm password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               onFocus={() => setError(null)} // Clear error on input focus
//             />
//             <Button
//               color="#09335F"
//               className="flex justify-center mx-auto"
//               onClick={handleChangePassword}
//             >
//               Save
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Change_Password;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, PasswordInput } from "@mantine/core";
import axios from "axios";

const Change_Password = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [role, setRole] = useState(""); 
  const [email, setEmail] = useState("");

  // Set role state on component mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.role && user.email) {
      setRole(user.role);
      setEmail(user.email);
    } else {
      setError("User is not logged in");
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Handle change password action
  const handleChangePassword = async () => {
    setError(null); // Clear any previous errors

    if (!email || !currentPassword || !newPassword || !confirmPassword) {
      setError("Please fill out all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match");
      return;
    }

    try {
      const values = {
        email,
        currentPassword,
        newPassword,
      };

      const response = await axios.post(
        "http://localhost:4000/change-password",
        values
      );

      const { message, role } = response.data;
      if (message === "Current password doesn't match") {
        setError("Current password doesn't match");
      } else if (message === "Password changed successfully") {
        alert("Password Changed Successfully");
        setRole(role);
        if (role === "Student") {
          navigate("/student/landingpage");
        } else if (role === "Instructor") {
          navigate("/instructor/landingpage");
        }
      }
    } catch (err) {
      console.error("An error occurred while changing the password:", err);
      setError("An error occurred while changing the password");
    }
    setConfirmPassword("");
    setNewPassword("");
    setCurrentPassword("");
  };

  const handleBackButton = () => {
    if (role === "Student") {
      navigate("/student/landingpage");
    } else if (role === "Instructor") {
      navigate("/instructor/landingpage");
    }
  };

  // Render password change form if user logged in
  return (
    <>
      <div className="flex justify-end ml-auto mr-24 mt-8">
        <Button
          className="m-0 p0"
          color="#09335F"
          onClick={handleBackButton}
        >
          Back
        </Button>
      </div>
      <div className="flex justify-center items-center my10 bg-[#DDD] bg-opacity-10">
        <div className="flex space-x-16 justify-center items-center my10 mx20 w-[900px] h-[500px] bg-slate-200">
          <div className="flex">
            <h1 className="flex font-semibold text-3xl justify-center items-center">
              Change Password
            </h1>
          </div>
          {error && (
            <Alert title="Error" color="red">
              {error}
            </Alert>
          )}
          <div className="w-[300px] space-y-4">
            <PasswordInput
              label="Current Password"
              placeholder="current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              onFocus={() => setError(null)} // Clear error on input focus
            />
            <PasswordInput
              label="New Password"
              placeholder="new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              onFocus={() => setError(null)} // Clear error on input focus
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={() => setError(null)} // Clear error on input focus
            />
            <Button
              color="#09335F"
              className="flex justify-center mx-auto"
              onClick={handleChangePassword}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Change_Password;

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Alert, Button, PasswordInput } from "@mantine/core";
// import axios from "axios";

// const Change_Password = () => {
//   const navigate = useNavigate();
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [role, setRole] = useState(""); 
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user && user.role && user.email) {
//       setRole(user.role);
//       setEmail(user.email);
//     } else {
//       setError("User is not logged in");
//     }
//   }, []);

//   const handleChangePassword = async () => {
//     setError(null);

//     if (!email || !currentPassword || !newPassword || !confirmPassword) {
//       setError("Please fill out all fields");
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       setError("New password and confirm password do not match");
//       return;
//     }

//     try {
//       const values = {
//         email,
//         currentPassword,
//         newPassword,
//       };

//       const response = await axios.post(
//         "http://localhost:4000/change-password",
//         values
//       );

//       const { message, role } = response.data;
//       if (message === "Current password doesn't match") {
//         setError("Current password doesn't match");
//       } else if (message === "Password changed successfully") {
//         alert("Password Changed Successfully");
//         if (role === "Student") {
//           navigate("/student_landingpage");
//         } else if (role === "Instructor") {
//           navigate("/instructor_landingpage");
//         }
//       }
//     } catch (err) {
//       console.error("An error occurred while changing the password:", err);
//       setError("An error occurred while changing the password");
//     }
//     setConfirmPassword("");
//     setNewPassword("");
//     setCurrentPassword("");
//   };

//   const handleBackButton = () => {
//     if (role === "Student") {
//       navigate("/student_landingpage");
//     } else if (role === "Instructor") {
//       navigate("/instructor_landingpage");
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-end ml-auto mr-24 mt-8">
//         <Button
//           className="m-0 p-0"
//           color="blue"
//           onClick={handleBackButton}
//         >
//           Back
//         </Button>
//       </div>
//       <div className="flex justify-center items-center my-10 bg-[#DDD] bg-opacity-10">
//         <div className="flex space-x-16 justify-center items-center my-10 mx-20 w-[900px] h-[500px] bg-slate-200">
//           <div className="flex">
//             <h1 className="flex font-semibold text-3xl justify-center items-center">
//               Change Password
//             </h1>
//           </div>
//           {error && (
//             <Alert title="Error" color="red">
//               {error}
//             </Alert>
//           )}
//           <div className="w-[300px] space-y-4">
//             <PasswordInput
//               label="Current Password"
//               placeholder="current password"
//               value={currentPassword}
//               onChange={(e) => setCurrentPassword(e.target.value)}
//               onFocus={() => setError(null)}
//             />
//             <PasswordInput
//               label="New Password"
//               placeholder="new password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               onFocus={() => setError(null)}
//             />
//             <PasswordInput
//               label="Confirm Password"
//               placeholder="confirm password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               onFocus={() => setError(null)}
//             />
//             <Button
//               color="blue"
//               className="flex justify-center mx-auto"
//               onClick={handleChangePassword}
//             >
//               Save
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Change_Password;
