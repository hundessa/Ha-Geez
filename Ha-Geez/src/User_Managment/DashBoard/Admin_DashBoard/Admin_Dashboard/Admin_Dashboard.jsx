import "./Admin.css";
import Home from "./Home";
import Footer from "../../../../Pages/Home page/Components/Footer";
import image from "../../../../assets/images/Admin/joshua-reddekopp-SyYmXSDnJ54-unsplash.jpg";
import Admin_Side_NavBar from "../Admin_Side_NavBar/Admin_Side_NavBar";
import Admin_Header_Nav_Bar from "../Admin_Side_NavBar/Admin_Header_Nav_Bar/Admin_Header_Nav_Bar";

const Admin_Dashboard = () => {
  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  return (
    <div>
      <Admin_Header_Nav_Bar />
      <Admin_Side_NavBar />
      <Home />

      <div className="mt-10 ml-32">
        <h1 className="font-bold bg-[#F2F8FF] rounded-lg drop-shadow-xl w-[200px] h-[50px] flex items-center justify-center">Top Rated Courses</h1>
        <div className="ml-4 mt-7">
          <table className="w-1/2 bg-[#F2F8FF]">
            <thead>
              <tr className="bg-white">
                <th className="py-2 px-4 border-b border-gray-200 text-left opacity-50">
                  Course Name
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left opacity-50">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody className="text-[#2B3674]">
              <tr>
                <td className="py-2 px-4 border-b border-gray-200 flex items-center">
                  <img src={image} className="rounded-lg w-[60px] h-[40px] mr-2" alt="" />
                  <p>Web Development</p>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">4.5</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200 flex items-center">
                  <img src={image} className="rounded-lg w-[60px] h-[40px] mr-2" alt="" />
                  <p>Marketing</p>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">4.2</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200 flex items-center">
                  <img src={image} className="rounded-lg w-[60px] h-[40px] mr-2" alt="" />
                  <p>Graphics Design</p>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">4.7</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200 flex items-center">
                  <img src={image} className="rounded-lg w-[60px] h-[40px] mr-2" alt="" />
                  <p>UI/UX Design</p>
                </td>
                <td className="py-2 px-4 border-b border-gray-200">4.6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 ml-10">
        <Footer />
      </div>
    </div>
  );
};

export default Admin_Dashboard;
