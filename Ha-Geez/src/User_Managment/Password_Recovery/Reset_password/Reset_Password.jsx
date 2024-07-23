// import { Button, } from "@mantine/core";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "@mantine/form";
// import Forms from "../../Sign_up/Student_Sign_up/Forms/Forms";
// import { useState } from "react";
// import axios from "axios";

// const Reset_Password = () => {
//   const navigate = useNavigate();
//   const [password, setPassword] = useState("");

//   const handleClick = async () => {
// const response = await axios.post("http://localhost:4000/reset-password");
// const { message } = response.data;

//   }

//   const validation = {
//     password: (value) =>
//       value.length == 0 ? "password  can't be empty" : null,
//     confirmpassword: (value, values) =>
//       value.length == 0
//         ? "password can't be empty"
//         : value !== values.password
//         ? "Passwords did not match"
//         : null,
//   };

//   const form = useForm({
//     initialValues: {
//       password: "",
//       confirmpassword: "",
//     },
//     validate: validation,
//   });

//   return (
//     <div>
//       <Button
//         variant="white"
//         color="rgba(0, 0, 0, 1)"
//         size="md"
//         radius="xl"
//         onClick={() => navigate("/forgot_password")}
//       >
//         Back
//       </Button>

//       <div className="mt-24 ml-[500px]">
//         <h1 className="font-bold text-2xl">Reset Your Password</h1>
//         <p>Set a new password below</p>
//       </div>

//       <div className=" flex">
//         <img
//           src="src/assets/images/Reset_Password/Reset Password image.png"
//           alt=""
//         />

//         <div className="mt-28">
//           <form onSubmit={form.onSubmit(handleClick)}>
//             <Forms
//             form={form}
//             withAsterisk
//             type="password"
//             label="Password"
//             placeholder="password"
//             validation={validation}
//             field="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             />
//             <Forms
//             form={form}
//             withAsterisk
//             type="password"
//             label="Confirm Password"
//             placeholder="confirm password"
//             validation={validation}
//             field="confirmpassword"
//             />
//             {/* <PasswordInput
//               type="text"
//               placeholder="Enter New Password"
//               className="w-[350px]"    
//               key={form.key("password")}
//               {...form.getInputProps("password")}
//             />
//             <PasswordInput
//               type="text"
//               placeholder="Confirm New Password"
//               className="w-[350px] mt-5"             
//               key={form.key("confirmPassword")}
//               {...form.getInputProps("confirmPassword")}
//             /> */}
//           <Button
//             variant="filled"
//             color="#09335F"
//             radius="xs"
//             className="ml-36 mt-4 w-[100px]"
//             type="submit"
//           >
//             Reset
//           </Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reset_Password;


import { Alert, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import Forms from "../../Sign_up/Student_Sign_up/Forms/Forms";
import { useState } from "react";
import axios from "axios";

const Reset_Password = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleClick = async (values) => {
    try {
      const response = await axios.post("http://localhost:4000/reset-password", {
        newPassword: values.password,
      }, { withCredentials: true });

      const { message } = response.data;

      if (message === "Password reset successfully") {
        navigate("/login");
      } else {
        setError(message);
      }
    } catch (error) {
      console.error("Error during API call:", error);
      setError("An error occurred while processing your request");
    }
  };

  const validation = {
    password: (value) => (value.length === 0 ? "Password can't be empty" : null),
    confirmpassword: (value, values) =>
      value.length === 0
        ? "Password can't be empty"
        : value !== values.password
        ? "Passwords did not match"
        : null,
  };

  const form = useForm({
    initialValues: {
      password: "",
      confirmpassword: "",
    },
    validate: validation,
  });

  return (
    <div>
      <Button
        variant="white"
        color="rgba(0, 0, 0, 1)"
        size="md"
        radius="xl"
        onClick={() => navigate("/forgot_password")}
      >
        Back
      </Button>

      <div className="mt-24 ml-[500px]">
        <h1 className="font-bold text-2xl">Reset Your Password</h1>
        <p>Set a new password below</p>
      </div>

      <div className="flex">
        <img
          src="src/assets/images/Reset_Password/Reset Password image.png"
          alt=""
        />

        <div className="mt-28">
        {error && (
          <Alert title="Error" color="red">
            {error}
          </Alert>
        )}
          <form onSubmit={form.onSubmit(handleClick)}>
            <Forms
              form={form}
              withAsterisk
              type="password"
              label="Password"
              placeholder="password"
              validation={validation}
              field="password"
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
            <Button
              variant="filled"
              color="#09335F"
              radius="xs"
              className="ml-36 mt-4 w-[100px]"
              type="submit"
            >
              Reset
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset_Password;

