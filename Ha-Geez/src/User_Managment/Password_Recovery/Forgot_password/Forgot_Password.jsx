// import { Alert, Button, Group } from "@mantine/core";
// import "../../Login/Login.css";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "@mantine/form";
// import { useState } from "react";
// import axios from "axios";
// import Forms from "../../Sign_up/Student_Sign_up/Forms/Forms";

// const Forgot_Password = () => {
//   const navigate = useNavigate();
//   // const [email, setEmail] = useState();
//   const [error, setError] = useState();

//   const handleClick = async (values) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:4000/forgot-password",
//         values
//       );
//       const { message } = response.data;
//       if (message === "Email not found") {
//         setError("Email not found");
//       } else if (message === "Account found") {
//         window.location.href = "/otp";
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const validation = {
//     email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
//   };

//   const form = useForm({
//     initialValues: {
//       email: "",
//     },
//     validate: validation,
//   });

//   return (
//     <div className="flex ">
//       <Button
//         variant="white"
//         color="rgba(8, 8, 8, 1)"
//         size="md"
//         onClick={() => navigate("/")}
//       >
//         Back
//       </Button>
//       <div className="ml-20 mt-20">
//         <div className="flex">
//           <img
//             className="w-[300px] h-[400px]"
//             src="src/assets/images/Forgot_Password/image.png"
//             alt=""
//           />

//           <div className="wrap">
//             <h1 className=" mt-24 ml-24 font-bold w-[200px]">
//               Forgot Your Password?
//             </h1>
//             <form onSubmit={form.onSubmit(() => console.log())}>
//               <div className=" w-[400px] h-[300px] mt-10 ml-24">
//                 <div className="mt-10 mr-32 ">
//                   {error && (
//                     <Alert title="Error" color="red">
//                       {error}
//                     </Alert>
//                   )}
//                   <div className="input-box flex mt-20 ">
//                     {/* <TextInput
//                       type="text"
//                       placeholder="Enter Your E-mail"
//                       required
//                       variant="unstyled"
//                       className="border-b-[4px] border-[#09335F] w-[550px]"
//                       {...form.getInputProps("email")}
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     /> */}
//                     <form
//                       onSubmit={form.onSubmit(handleClick)}
//                       className="space-y-4"
//                     >
//                       <Forms
//                         form={form}
//                         withAsterisk
//                         type="text"
//                         label="Email"
//                         placeholder="email"
//                         validation={validation}
//                         field="email"
//                         value={form.values.email}
//                         onChange={(e) =>
//                           form.setFieldValue("email", e.target.value)
//                         }
//                       />
//                       <Group justify="flex-end" mt="xl">
//                         <Button
//                           className="mt-8 mr-6 w-[250px]"
//                           variant="gradient"
//                           gradient={{
//                             from: "rgba(78, 135, 194, 1)",
//                             to: "rgba(24, 53, 84, 1)",
//                             deg: 94,
//                           }}
//                           size="md"
//                           radius="md"
//                           type="submit"
//                         >
//                           Reset Password
//                         </Button>
//                       </Group>
//                     </form>
//                   </div>

//                   {/* <Button
//                     className="mt-8 mr-6 w-[250px]"
//                     variant="gradient"
//                     gradient={{
//                       from: "rgba(78, 135, 194, 1)",
//                       to: "rgba(24, 53, 84, 1)",
//                       deg: 94,
//                     }}
//                     size="md"
//                     radius="md"
//                     type="submit"
//                   >
//                     Reset Password
//                   </Button> */}
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Forgot_Password;




// import { Alert, Button, TextInput } from "@mantine/core";
// import "../../Login/Login.css";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// const Forgot_Password = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");

//   const handleClick = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:4000/forgot-password", { email });
//       const { message } = response.data;

//       if (message === "Email not found") {
//         setError("Email not found");
//       } else if (message === "Account found") {
// window.location.href = "/otp"
//       }
//     } catch (err) {
//       console.log(err);
//       setError("An error occurred while processing your request");
//     }
//   };

//   const handleChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleBack = () => {
//     navigate("/");
//   };

//   return (
//     <div className="flex">
//       <Button variant="white" color="rgba(8, 8, 8, 1)" size="md" onClick={handleBack}>
//         Back
//       </Button>
//       <div className="ml-20 mt-20">
//         <div className="flex">
//           <img
//             className="w-[300px] h-[400px]"
//             src="src/assets/images/Forgot_Password/image.png"
//             alt=""
//           />
//           <div className="wrap">
//             <h1 className="mt-24 ml-24 font-bold w-[200px]">Forgot Your Password?</h1>
//             <form onSubmit={handleClick}>
//               <div className="w-[400px] h-[300px] mt-10 ml-24">
//                 <div className="mt-10 mr-32">
//                   {error && (
//                     <Alert title="Error" color="red">
//                       {error}
//                     </Alert>
//                   )}
//                   <div className="input-box flex mt-20">
//                     <TextInput
//                       label="Email"
//                       placeholder="Enter Your E-mail"
//                       required
//                       value={email}
//                       onChange={handleChange}
//                       className="border-b-[4px] border-[#09335F] w-[550px]"
//                     />
//                   </div>
//                   <Button
//                     type="submit"
//                     className="mt-8 mr-6 w-[250px]"
//                     variant="gradient"
//                     gradient={{
//                       from: "rgba(78, 135, 194, 1)",
//                       to: "rgba(24, 53, 84, 1)",
//                       deg: 94,
//                     }}
//                     size="md"
//                     radius="md"
//                   >
//                     Reset Password
//                   </Button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Forgot_Password;



// import { Alert, Button, TextInput } from "@mantine/core";
// import "../../Login/Login.css";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// const Forgot_Password = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");

//   const handleClick = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:4000/forgot-password", { email });
//       const { message } = response.data;

//       if (message === "Email not found") {
        
//         setError("Email not found");
//       } else if (message === "Account found" ) {
//       const sendOTPResponse = await axios.post("http://localhost:4000/send-otp", { email });
//       const { message: sendOTPMessage } = sendOTPResponse.data;

//       if (sendOTPMessage === "OTP sent to email") {
//       alert("Otp sent to your email")
//         window.location.href = "/otp";
//       }
//       }
//     } catch (err) {
//       console.log(err);
//       setError("An error occurred while processing your request");
//     }
//   };

//   const handleChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleBack = () => {
//     navigate("/");
//   };

//   return (
//     <div className="flex">
//       <Button variant="white" color="rgba(8, 8, 8, 1)" size="md" onClick={handleBack}>
//         Back
//       </Button>
//       <div className="ml-20 mt-20">
//         <div className="flex">
//           <img
//             className="w-[300px] h-[400px]"
//             src="src/assets/images/Forgot_Password/image.png"
//             alt="Forgot Password"
//           />
//           <div className="wrap">
//             <h1 className="mt-24 ml-24 font-bold w-[200px]">Forgot Your Password?</h1>
//             <form onSubmit={handleClick}>
//               <div className="w-[400px] h-[300px] mt-10 ml-24">
//                 <div className="mt-10 mr-32">
//                   {error && (
//                     <Alert title="Error" color="red">
//                       {error}
//                     </Alert>
//                   )}
//                   <div className="input-box flex mt-20">
//                     <TextInput
//                       label="Email"
//                       placeholder="Enter Your E-mail"
//                       required
//                       value={email}
//                       onChange={handleChange}
//                       className="border-b-[4px] border-[#09335F] w-[550px]"
//                     />
//                   </div>
//                   <Button
//                     type="submit"
//                     className="mt-8 mr-6 w-[250px]"
//                     variant="gradient"
//                     gradient={{
//                       from: "rgba(78, 135, 194, 1)",
//                       to: "rgba(24, 53, 84, 1)",
//                       deg: 94,
//                     }}
//                     size="md"
//                     radius="md"
//                   >
//                     Reset Password
//                   </Button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Forgot_Password;



import { Alert, Button, TextInput } from "@mantine/core";
import "../../Login/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Forgot_Password = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleClick = async (event) => {
    event.preventDefault();
    console.log("handleClick called with email:", email);

    try {
      const forgotPasswordResponse = await axios.post("http://localhost:4000/forgot-password", { email });
      console.log("forgot-password response:", forgotPasswordResponse);

      const { message: forgotPasswordMessage } = forgotPasswordResponse.data;

      if (forgotPasswordMessage === "Email not found") {
        setError("Email not found");
        return;
      }

      if (forgotPasswordMessage === "Account found") {
        const sendOTPResponse = await axios.post("http://localhost:4000/send-otp", { email }, { withCredentials: true });
        console.log("send-otp response:", sendOTPResponse);

        const { message: sendOTPMessage } = sendOTPResponse.data;

        if (sendOTPMessage === "OTP sent to email") {
          alert("OTP sent to your email");
          navigate("/otp"); // Use navigate for redirection
        } else {
          setError("Failed to send OTP. Please try again.");
        }
      }
    } catch (err) {
      console.log("Error during API call:", err);
      setError("An error occurred while processing your request");
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
    setError(""); // Clear error when email is changed
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="flex">
      <Button variant="white" color="rgba(8, 8, 8, 1)" size="md" onClick={handleBack}>
        Back
      </Button>
      <div className="ml-20 mt-20">
        <div className="flex">
          <img
            className="w-[300px] h-[400px]"
            src="/path/to/your/image.png"
            alt="Forgot Password"
          />
          <div className="wrap">
            <h1 className="mt-24 ml-24 font-bold w-[200px]">Forgot Your Password?</h1>
            <form onSubmit={handleClick}>
              <div className="w-[400px] h-[300px] mt-10 ml-24">
                <div className="mt-10 mr-32">
                  {error && (
                    <Alert title="Error" color="red">
                      {error}
                    </Alert>
                  )}
                  <div className="input-box flex mt-20">
                    <TextInput
                      label="Email"
                      placeholder="Enter Your E-mail"
                      required
                      value={email}
                      onChange={handleChange}
                      className="border-b-[4px] border-[#09335F] w-[550px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="mt-8 mr-6 w-[250px]"
                    variant="gradient"
                    gradient={{
                      from: "rgba(78, 135, 194, 1)",
                      to: "rgba(24, 53, 84, 1)",
                      deg: 94,
                    }}
                    size="md"
                    radius="md"
                  >
                    Reset Password
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot_Password;


