import Student_Header from "./Components/Student_Header";
import Student_side_navbar from "./Components/Student_side_navbar";
import { Button } from "@mantine/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../Pages/Home page/Components/popular.css";
import image from "../../../../assets/images/Cart/ilya-pavlov-OqtafYT5kTw-unsplash.jpg";
// import img from"../../../../assets/images/Cart/oskar-yildiz-cOkpTiJMGzA-unsplash.jpg";

const data = [
  {
    title: "Social Media Marketing",
    img: image,
    // icon: "",
    progress: "65%",
    instructor: "By Lidiya Fissha",
  },
  {
    title: "Social Media Marketing",
    img: image,
    // icon: "",
    progress: "65%",
    instructor: "By Lidiya Fissha",
  },
  {
    title: "Social Media Marketing",
    img: image,
    // icon: "",
    progress: "65%",
    instructor: "By Lidiya Fissha",
  },
  {
    title: "Social Media Marketing",
    img: image,
    // icon: "",
    progress: "65%",
    instructor: "By Lidiya Fissha",
  },
];
const Student_LandinPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <Student_Header />
      <Student_side_navbar />

      <div className="flex">
        <div className="p-2 mx-52 h-[100px] bg-[#A2CBF5] rounded-[10px] flex mt-5 w-[700px]">
          <div className=" ml-20 ">
            <h1 className="text-2xl font-bold"> Hello, Lidiya</h1>
            <p>
              Nice to have you back, what an exciting day! Get ready and
              continue your lesson today.
            </p>
          </div>
        </div>

        <Button
          variant="filled"
          color="#BADBFF"
          radius="xl"
          className="text-black mt-2"
        >
          My Learning
        </Button>
      </div>

      <h2 className="ml-20 font-bold size-[10px] mt-3 w-[150px] ">
        Your Courses
      </h2>

      <div className="slick-slider">

         <Slider {...settings}>
      {data.map((d, index) => (
        <div key={index} className=" mt-10 ml-20">
          <img className="w-[200px] h-[100px]" src={d.img}/>
          <h2>{d.title}</h2>
          <p className="text-sm mt-1">{d.instructor}</p>
          {/* <p>{d.icon}</p> */}
          <p className="mt-3">{d.progress}</p>
        </div>
      ))}
       </Slider>
      </div>
     
    </>
  );
};

export default Student_LandinPage;
