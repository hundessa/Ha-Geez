import { Button } from '@mantine/core';
// import { FaStar } from "react-icons/fa";
// import { FaRegCirclePlay } from "react-icons/fa6";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./popular.css";
import { useNavigate } from "react-router-dom";
import Course_Card from './styled-components/Course_Card';
import { courses } from '../Course_Overview/Reviews/Reviews';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual, Pagination } from 'swiper/modules';

// const data = [
//   {
//     name: "Advanced Web Development",
//     img: "src/assets/images/Popular Courses/thomas-lefebvre-gp8BLyaTaA0-unsplash.jpg",
//     top: "Technology",
//     duration: "10hr 15mins",
//     icon: <FaRegCirclePlay />,
//     rating: <FaStar />,
//     rating2: "4.5(20)",
//     photo:
//       "src/assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
//     instructor: "Mr. Abebe",
//     price: "200$",
//   },
//   {
//     name: "Advanced Web Development",
//     img: "src/assets/images/Popular Courses/thomas-lefebvre-gp8BLyaTaA0-unsplash.jpg",
//     top: "Technology",
//     duration: "10hr 15mins",
//     icon: <FaRegCirclePlay />,
//     rating: <FaStar />,
//     rating2: "4.5(20)",
//     photo:
//       "src/assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
//     instructor: "Mr. Abebe",
//     price: "200$",
//   },
//   {
//     name: "Advanced Web Development",
//     img: "src/assets/images/Popular Courses/thomas-lefebvre-gp8BLyaTaA0-unsplash.jpg",
//     top: "Technology",
//     duration: "10hr 15mins",
//     icon: <FaRegCirclePlay />,
//     rating: <FaStar />,
//     rating2: "4.5(20)",
//     photo:
//       "src/assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
//     instructor: "Mr. Abebe",
//     price: "200$",
//   },
//   {
//     name: "Advanced Web Development",
//     img: "src/assets/images/Popular Courses/thomas-lefebvre-gp8BLyaTaA0-unsplash.jpg",
//     top: "Technology",
//     duration: "10hr 15mins",
//     icon: <FaRegCirclePlay />,
//     rating: <FaStar />,
//     rating2: "4.5(20)",
//     photo:
//       "src/assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
//     instructor: "Mr. Abebe",
//     price: "200$",
//   },
// ];

const Popular_Courses = () => {

  const navigate = useNavigate();

  // const settings = {
  //   // dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  // };

  return (
    <div className=" w-3/4 m-auto mt-20">
      <div className="flex">
        <h1 className="flex mx-auto font-bold text-3xl mb-10">
          Our Popular Courses
        </h1>
      </div>
      <div className="flex mx-auto w-[800px] mb-10">
        <p className="flex text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          eos nostrum beatae nemo non adipisci aperiam exercitationem quam
          recusandae cum amet earum porro harum ad, maiores dolore veritatis
          placeat corporis.
        </p>
      </div>
      <div className="flex justify-center ml-[-10px] mr-[-50px]">
          <Swiper
            modules={[Virtual, Navigation, Pagination]}
            slidesPerView={3}
            spaceBetween={-40}
            navigation={true}
          >
            {courses.map((course, index) => {
              return (
                <div key={index} className="">
                  <SwiperSlide key={index}>
                    <Course_Card
                      image={course.image}
                      category={course.category}
                      title={course.title}
                      description={course.description}
                      instructorName={course.instructorName}
                      level={course.level}
                      duration={course.duration}
                      price={course.price}
                      rating={course.rating}
                    />
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>
      {/* <div className="custom-slider slick-slider mt-20"> */}
        {/* <Slider {...settings}> */}
        {/* {courses.map((course, index) => {
          return (
            <div key={index} className="mr-14">
              <Course_Card
                      image={course.image}
                      category={course.category}
                      title={course.title}
                      description={course.description}
                      instructorName={course.instructorName}
                      level={course.level}
                      duration={course.duration}
                      price={course.price}
                      rating={course.rating}
                    />
                </div>
              );
            })} */}
          {/* {data.map((d) => (
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
                      className="mt-2 hover:bg-[#09335F] hover:text-white"
                      onClick={() => navigate("/course_overview")}
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
        {/* </Slider> */}
      {/* </div> */}
      <Button color="rgba(9, 51, 95, 1)" className="mt-[50px] flex justify-center mx-auto" onClick={() => navigate("/course_list")}>
        Browse All Courses
      </Button>
    </div>
  );
};

export default Popular_Courses;
