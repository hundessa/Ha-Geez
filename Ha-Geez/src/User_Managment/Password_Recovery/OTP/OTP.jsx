// import { Alert, Button } from "@mantine/core";
// import "../../Login/Login.css"
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// const OTP = () => {
//     const navigate = useNavigate();
// const [otp, setOtp] = useState();
// const [error, setError] = useState();

// const handleClick = async() => {
//   try{

//     const response = await axios.post("http://localhost:4000/verify-otp");
    
//     const {message} = response.data;
    
//     if ( message === "Session expired. Please try again."){
//       setError("Session expired. Please try again.")
//     }else if( message === "Invalid OTP"){
//       setError("Invalid OTP")
//     }else if ( message === "Expired OTP"){
//       setError("Expired OTP")
//     }else if( message === "OTP verified"){
//   navigate("/reset_password")
// }else {
//   console.log("opt verification error");
//   setError("An unexpected error occurred");
// }
// }catch(err){
//   console.log("Error during API call:: ", err);
//   setError("An error occurred while processing your request")
// }
// }

//   return (
//     <div className="flex">
//       <Button variant="white" color="rgba(8, 8, 8, 1)" size="md" onClick={() => navigate("/forgot_password")}>
//         Back
//       </Button>

//       <div className="wrap">
//         <h1 className="mt-40 ml-64 font-medium">Please Enter Your OTP</h1>
//         <p  className=" ml-64 font-regular">Input the code sent to your email for verification</p>
//         {error && (
//                     <Alert title="Error" color="red">
//                       {error}
//                     </Alert>
//                   )}
//         <form action="" onSubmit={handleClick}>
//           <div className=" w-[400px] h-[300px] mt-10 ml-64">
//             <div className="mt-28 ml-16">
//               <div className="input-box flex ">
//                 <input 
//                   type="text"
//                   placeholder="Enter the six-digit code"
//                   required
//                   className=" border-b-[4px] border-[#09335F] w-[650px]"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                 />
//               </div>

//               <div className=""> 
//               <div className="flex">
//                  <p className="text-sm mt-2"> Didn't receive a code? </p> 
//               <Button variant="transparent" href="#" className="text-[#09335F] text-sm font-medium" >
//                Resend OTP
//                 </Button>
//               </div>
                
//               <Button
//                 className="mt-12 ml-14 w-[100px]"
//                 variant="filled"
//                 color="#09335F"
//                 size="md"
//                 radius="sm"
//                 onClick={() => navigate("/reset_password")}
//               >
//                 Next
//               </Button>
//               </div>
              
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default OTP;




import { Alert, Button } from "@mantine/core";
import "../../Login/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const OTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleClick = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post(
        "http://localhost:4000/verify-otp",
        { otp },
        { withCredentials: true } // Ensure cookies are included in the request
      );
      console.log("Response:", response);
  
      const { message } = response.data;
  
      if (message === "OTP verified") {
        navigate("/reset_password");
      } else if (message === "Invalid OTP") {
        setError("Invalid OTP");
      } else if (message === "Expired OTP") {
        setError("Expired OTP");
      } else if (message === "Session expired. Please try again.") {
        setError("Session expired. Please try again.");
      } else {
        setError("An unexpected error occurred");
      }
    } catch (error) {
      console.error("Error during API call:", error);
      setError("An error occurred while processing your request");
    }
  };

  return (
    <div className="flex">
      <Button
        variant="white"
        color="rgba(8, 8, 8, 1)"
        size="md"
        onClick={() => navigate("/forgot_password")}
      >
        Back
      </Button>

      <div className="wrap">
        <h1 className="mt-40 ml-64 font-medium">Please Enter Your OTP</h1>
        <p className="ml-64 font-regular">Input the code sent to your email for verification</p>
        {error && (
          <Alert title="Error" color="red">
            {error}
          </Alert>
        )}
        <form onSubmit={handleClick}>
          <div className="w-[400px] h-[300px] mt-10 ml-64">
            <div className="mt-28 ml-16">
              <div className="input-box flex">
                <input
                  type="text"
                  placeholder="Enter the six-digit code"
                  required
                  className="border-b-[4px] border-[#09335F] w-[650px]"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)} // Update OTP state on input change
                />
              </div>

              <div className="flex">
                <p className="text-sm mt-2">Did not receive a code?</p>
                <Button variant="transparent" href="#" className="text-[#09335F] text-sm font-medium">
                  Resend OTP
                </Button>
              </div>

              <Button
                type="submit"
                className="mt-12 ml-14 w-[100px]"
                variant="filled"
                color="#09335F"
                size="md"
                radius="sm"
              >
                Next
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTP;
