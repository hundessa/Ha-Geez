/* eslint-disable react/prop-types */
import ReactDOM from "react-dom";
import { Button } from "@mantine/core";
import { IoClose } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const InstructorDetailModal = ({ openmodal, setOpenmodal, instructor }) => {
  if (!openmodal || !instructor) return null;

  const getProfessionalCertificateUrl = () => {
    if (
      !instructor.professionalcertificate ||
      !instructor.professionalcertificate.data
    ) {
      return "";
    }

    const data = instructor.professionalcertificate.data;
    const bytes = new Uint8Array(data);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    const base64Data = window.btoa(binary); // Use window.btoa to encode binary data to base64

    const imageUrl = `data:${instructor.professionalcertificate.contentType};base64,${base64Data}`;
    return imageUrl;
  };

  return ReactDOM.createPortal(
    <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-[rgba(0, 0, 0, 0.5)] z-50">
      <div className="bg-white p-8 ml-24 mt-24 w-full h-screen overflow-auto rounded-lg shadow-lg">
        <div className="flex justify-end">
          <Button
            variant="transparent"
            className="text-red-600 focus:text-red-500"
            onClick={() => setOpenmodal(false)}
          >
            <IoClose size={30} />
          </Button>
        </div>

        <div className="mt-4 mb-10">
          <h1 className="font-semibold text-xl mb-2">Instructor Detail</h1>
          <div className="mb-4">
            <h2 className="font-semibold">Name:</h2>
            <p>{`${instructor.firstname} ${instructor.lastname}`}</p>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold">Email:</h2>
            <p>{instructor.email}</p>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold">Phone Number:</h2>
            <p>{instructor.phonenumber}</p>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold">Level of Education:</h2>
            <p>{instructor.levelofeducation}</p>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold">Field of Study:</h2>
            <p>{instructor.fieldofstudy}</p>
          </div>
          <div className="mb-4">
            <h2 className="font-semibold">Years of Experience:</h2>
            <p>{instructor.yearsofexperiance}</p>
          </div>
          {instructor.professionalcertificate ? (
            <div className="mb-4">
              <h2 className="font-semibold">Professional Certificate:</h2>
              <img
                src={getProfessionalCertificateUrl()} // Use function to get data URL
                alt="Professional Certificate"
                // style={{ maxWidth: '100%' }}
                className="w-[300px] h-[300px]"
              />
            </div>
          ) : (
            <div>
              <h2 className="font-semibold">Professional Certificate:</h2>
             <p>No Certificate found</p> 
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default InstructorDetailModal;
