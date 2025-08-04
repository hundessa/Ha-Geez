import { Button } from '@mantine/core';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./popular.css";
import { useNavigate } from "react-router-dom";
import Course_Card from './styled-components/Course_Card';
import { courses } from '../Course_Overview/Reviews/Reviews';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Virtual, Pagination } from 'swiper/modules';



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
    <div className="md:w-3/4 mx-auto mt-40">
      <div className="flex sm:justify-center mx-auto sm:w-full w-3/4">
        <h1 className="text-center font-bold text-3xl mb-10">
          Our Popular Courses
        </h1>
      </div>
      <div className="w-3/4 md:w-[800px] mx-auto mb-10">
        <p className="text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          eos nostrum beatae nemo non adipisci aperiam exercitationem quam
          recusandae cum amet earum porro harum ad, maiores dolore veritatis
          placeat corporis.
        </p>
      </div>
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          slidesPerView={4}
          spaceBetween={0}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
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
      <Button
        color="rgba(9, 51, 95, 1)"
        className="mt-[50px] flex justify-center mx-auto"
        onClick={() => navigate("/course_list")}
      >
        Browse All Courses
      </Button>
    </div>
  );
};

export default Popular_Courses;
