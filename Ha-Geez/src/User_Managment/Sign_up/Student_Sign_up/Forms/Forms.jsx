/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import { Button, Group, PasswordInput, TextInput } from "@mantine/core";
// import { useForm } from "@mantine/form";
// // import { useRef } from "react";
// // import { useNavigate } from "react-router-dom";

// const Forms = ({ type, label, placeholder, value, onChange, validation }) => {
//   // const navigate = useNavigate();
//   // const name = useRef()
//   // const email = useRef();
//   // const password = useRef();

//   const form = useForm({
//     mode: "controlled",
//     initialValues: {
//       firstname: "",
//       lastname: "",
//       username: "",
//       phonenumber: "",
//       email: "",
//       password: "",
//       confirmpassword: "",
//       termsOfService: false,
//     },

//     validate: {
//       firstname: (value) =>
//         value.length == 0
//           ? "first name can't be empty"
//           : !/^[A-Za-z]+$/.test(value)
//           ? "First name must contain only alphabets"
//           : value.length < 4
//           ? "Name must have at least 4 letters"
//           : null,
//       lastname: (value) =>
//         value.length == 0
//           ? "last name can't be empty"
//           : !/^[A-Za-z]+$/.test(value)
//           ? "Last name must contain only alphabets"
//           : value.length < 4
//           ? "Name must have at least 4 letters"
//           : null,
//       username: (value) =>
//         value.length == 0
//           ? "user name can't be empty"
//           : !/^[A-Za-z]+$/.test(value)
//           ? "User name must contain only alphabets"
//           : value.length < 4
//           ? "Name must have at least 4 letters"
//           : null,
//       email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
//       password: (value) =>
//         value.length == 0 ? "password  can't be empty" : null,
//       confirmpassword: (value, values) =>
//         value.length == 0
//           ? "password can't be empty"
//           : value !== values.password
//           ? "Passwords did not match"
//           : null,
//     },
//   });
//   const handleSignup = (values) => {
//     const formData = JSON.parse(localStorage.getItem("formData")) || [];
//     formData.push({
//       name: values.firstname,
//       email: values.email,
//       password: values.password,
//     });
//     localStorage.setItem("formData", JSON.stringify(formData));
//     alert("Signup successful");
//     form.reset();
//     //  navigate("/login")
//   };

//   const validateField = (field, value) => {
//     if (validation && validation[field]) {
//       return validation[field](value);
//     }
//     return null;
//   };

//   let inputComponent;
  
//   switch (type) {
//     case "text":
//       inputComponent = (
//         <TextInput
//           label={label}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           error={form.errors[field]}
//           onBlur={() => form.validateField(field)}
//         />
//       );
//       break;
//     case "password":
//       inputComponent = (
//         <PasswordInput
//           label={label}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           error={form.errors[field]}
//           onBlur={() => form.validateField(field)}
//         />
//       );
//       break;
//     default:
//       inputComponent = null;
//   }

//   // <div>
//   //     {
//   //       for (const item of conf) {
//   //         switch (item.name) {
//   //           case textfield:
//   //             return <TextInput ...item>
//   //             break ;

//   //           default:
//   //             break;
//   //         }
//   //       }
//   //     }
//   // </div>
//   return (
//     <>
//       <form
//         onSubmit={form.onSubmit((values) => {
//           handleSignup(values);
//         })}
//       >
// {inputComponent}
//         {/* <TextInput
//           withAsterisk
//           label="First Name"
//           placeholder="first name"
//           {...form.getInputProps("firstname")}
//           mb="md"
//         />
//         <TextInput
//           withAsterisk
//           label="Last Name"
//           placeholder="last name"
//           {...form.getInputProps("lastname")}
//           mb="md"
//         />
//         <TextInput
//           withAsterisk
//           label="User Name"
//           placeholder="user name"
//           {...form.getInputProps("username")}
//           mb="md"
//         />
//         <TextInput
//           withAsterisk
//           label="Email"
//           placeholder="your@email.com"
//           {...form.getInputProps("email")}
//           mb="md"
//         />
//         <TextInput
//           withAsterisk
//           label="Phone Number"
//           placeholder="phone number"
//           type="number"
//           {...form.getInputProps("phonenumber")}
//           mb="md"
//         />
//         <PasswordInput
//           withAsterisk
//           label="Password"
//           placeholder="input password"
//           {...form.getInputProps("password")}
//           mb="md"
//         />
//         <PasswordInput
//           withAsterisk
//           label="Confirm Password"
//           placeholder="confirm password"
//           {...form.getInputProps("confirmpassword")}
//           mb="md"
//         /> */}

//         <Group justify="flex-end" mt="xl">
//           <Button type="submit" className="bg-[#09335F] rounded-3xl w-full mt4">
//             Sign Up
//           </Button>
//         </Group>
//       </form>
//     </>
//   );
// };

// export default Forms;


import { PasswordInput, TextInput } from "@mantine/core";
// import { useEffect, useState } from "react";

const Forms = ({ type, label, placeholder, value, field, withAsterisk, form, componentMask, mask }) => {


  let inputComponent;

  switch (type) {
    case "text":
      inputComponent = (
        <TextInput
        withAsterisk={withAsterisk}
          label={label}
          placeholder={placeholder}
          value={value}
          {...form.getInputProps(field)}
          component={componentMask} mask={mask}
        />
      );
      break;
    case "password":
      inputComponent = (
        <PasswordInput
        withAsterisk={withAsterisk}
          label={label}
          placeholder={placeholder}
          value={value}
          {...form.getInputProps(field)}
        />
      );
      break;
    default:
      inputComponent = null;
  }

  return (
    <>
        {inputComponent}
     
    </>
  );
};


export default Forms;
