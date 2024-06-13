import Student_Header from "./Components/Student_Header";
import Student_side_navbar from "./Components/Student_side_navbar";
import { Button } from "@mantine/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../Pages/Home page/Components/popular.css";
import image from "../../../../assets/images/Cart/ilya-pavlov-OqtafYT5kTw-unsplash.jpg";
import { FaStar } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";

const data2 = [
  {
    name: "Advanced Web Development",
    img: "src/assets/images/Popular Courses/thomas-lefebvre-gp8BLyaTaA0-unsplash.jpg",
    top: "Technology",
    duration: "10hr 15mins",
    icon: <FaRegCirclePlay />,
    rating: <FaStar />,
    rating2: "4.5(20)",
    photo:
      "src/assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
    instructor: "Mr. Abebe",
    price: "200$",
  },
  {
    name: "Advanced Web Development",
    img: "src/assets/images/Popular Courses/thomas-lefebvre-gp8BLyaTaA0-unsplash.jpg",
    top: "Technology",
    duration: "10hr 15mins",
    icon: <FaRegCirclePlay />,
    rating: <FaStar />,
    rating2: "4.5(20)",
    photo:
      "src/assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
    instructor: "Mr. Abebe",
    price: "200$",
  },
  {
    name: "Advanced Web Development",
    img: "src/assets/images/Popular Courses/thomas-lefebvre-gp8BLyaTaA0-unsplash.jpg",
    top: "Technology",
    duration: "10hr 15mins",
    icon: <FaRegCirclePlay />,
    rating: <FaStar />,
    rating2: "4.5(20)",
    photo:
      "src/assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
    instructor: "Mr. Abebe",
    price: "200$",
  },
  {
    name: "Advanced Web Development",
    img: "src/assets/images/Popular Courses/thomas-lefebvre-gp8BLyaTaA0-unsplash.jpg",
    top: "Technology",
    duration: "10hr 15mins",
    icon: <FaRegCirclePlay />,
    rating: <FaStar />,
    rating2: "4.5(20)",
    photo:
      "src/assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
    instructor: "Mr. Abebe",
    price: "200$",
  },
];


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
        <div className="p-2 mx-52 h-[100px] bg-[#A2CBF5] rounded-[10px] flex mt-20 w-[700px]">
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

    

      <h2 className="ml-32 font-bold text-xl size-[10px] mt-3 w-[150px] ">
        Your Courses
      </h2>

      <div className="mt-5  ml-14 bg-blue-100 slick-slider">
        <Slider {...settings}>
          {data.map((d) => (
            <div className=" mt-10 ml-20">
              <img className="w-[200px] h-[100px]" src={d.img} />
              <h2 className="font-bold">{d.title}</h2>
              <p className="text-sm mt-1">{d.instructor}</p>
              {/* <p>{d.icon}</p> */}
              <p className="mt-3">{d.progress}</p>
            </div>
          ))}
        </Slider>
      </div>

      

<div className="bg-[#D9D9D9] h-[700px] w-[1300px] mt-20">
  <div className="flex">
        <div>
          <h2 className="mt-10 ml-20 font-bold text-xl ">Recommended Courses</h2>
          <p className="ml-24 mt-5">
            Based on your learning activity we have curated a course just for
            you.
          </p>
        </div>

       
      </div>

      <div className=" slick-slider mt-16 ml-20">
        <Slider {...settings}>
          {data2.map((d) => (
            <div key={d} className=" h-[650px]">
              <div className="h-[490px] w-[265px] border-[3px]  justify-center items-center ">
                <p className="p-2 bg-[#C7C2C2] absolute">{d.top}</p>
                <img src={d.img} alt="" className="h-44 w-150 " />
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl font-bold fontsize-40">{d.name} </p>
                  <div className="flex ml-28 gap-1">
                    <p>{d.duration}</p>
                    <p>{d.icon}</p>
                  </div>
                  <div className="flex mr-40 gap-2">
                    <p>{d.rating}</p>
                    <p>{d.rating2}</p>
                  </div>
                  <div className="flex  mr-32 gap-2 ">
                    <img
                      src={d.photo}
                      alt=""
                      className="h-10 w-10 rounded-full"
                    />
                    <p className="w-[110px]">{d.instructor}</p>
                  </div>
                  <div className="border-t-2 w-[265px] flex gap-9 ml-1">
                    <p className="ml-3 mt-3 font-bold">{d.price}</p>
                    <Button
                      variant="default"
                      color="rgba(0, 0, 0, 1)"
                      size="md"
                      className="mt-2"
                      onClick={() => navigate("/course_overview")}
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

</div>
    
    </>
  );
};

export default Student_LandinPage;
