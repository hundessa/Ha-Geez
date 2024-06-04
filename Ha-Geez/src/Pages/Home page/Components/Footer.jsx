import { FaInstagramSquare, FaTelegram, FaYoutube} from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <div className="h-60">
        <hr className="flex bg-gray-900 mx-auto h-[4px] drop-shadow-sm w-[1240px] rounded-b-3xl shadow-md shadow-black" />
        <div className="flex">
          <div className="flex my-auto justify-center items-center">
            <div className="font-bold ml-10">
            <h1 className="mt-16">Contact Us</h1>
            <h1 className="mt-6">Tel: +2519878787</h1>
            <div className="flex mt-2 mx-auto justify-center items-center">
            <FaInstagramSquare className="mx-[6px] size-6 rounded-2xl hover:text-[#4176e7] hover:size-6xl cursor-pointer"/>
            <FaTelegram className="mx-[6px] size-6 hover:text-[#4176e7] hover:text-lg cursor-pointer"/>
            <FaYoutube className="mx-[6px]  size-[26px] hover:text-[#4176e7] hover:text-lg cursor-pointer"/>
            </div>
          </div>
          </div>
          
          <div className="flex flex-col justify-end space-y-2 ml-auto mr-32 font-semibold cursor-pointer first:hover:text-[20px]">
            <li className="list-none hover:text-[#4176e7] hover:text-[17px]">Home</li>
            <li className="list-none hover:text-[#4176e7] hover:text-[17px]">Courses</li>
            <li className="list-none hover:text-[#4176e7] hover:text-[17px]">About Us</li>
          </div>
        </div>
        <div className="flex justify-center items-center font-extralight mt-8"><h1>&copy; 2024 Ha-Geez Ethiopia. All rights reserved </h1></div>
        
      </div>
    </>
  );
};

export default Footer;
