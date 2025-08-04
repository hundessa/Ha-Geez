import { useMemo, useState } from "react";
import Student_Header from "./Components/Student_Header";
import Student_side_navbar from "./Components/Student_side_navbar";
import Footer from "../../../../Pages/Home page/Components/Footer"
import { Button } from "@mantine/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../../Pages/Home page/Components/popular.css";
// import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../Context/AuthContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import { courses, learningdata } from "../../../../Pages/Home page/Course_Overview/Reviews/Reviews";
import Course_Card from "../../../../Pages/Home page/Components/styled-components/Course_Card";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";


const ITEMS_PER_PAGE = 4;

const Student_LandinPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [progress, setProgress] = useState();

  const filteredCourses = useMemo(() => {
    let filteredList = courses;

    return filteredList;
  }, []);

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);

  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // const navigate = useNavigate();
  const { user } = useUser();

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Student_Header />
        <Student_side_navbar />
        <main className="flex-grow">
          <div className="flex justify-around">
            <div className="p-2 mx52 h-[100px] bg-[#A2CBF5] rounded-[10px] flex mt-20 w-[700px]">
              <div className="mx-12">
                <h1 className="text-2xl font-bold">
                  {" "}
                  Hello, {user?.firstname}
                </h1>
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
              className="text-black mt-24"
            >
              My Learning
            </Button>
          </div>

          <h2 className="ml-32 font-bold text-xl mt-3">Your Courses</h2>

          <div className="mt-5 slickslider overflow-xscroll px-20">
            <Swiper
              // slidesPerView={5}
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
                  slidesPerView: 5,
                },
              }}
              grid={{
                rows: 1,
              }}
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              modules={[Grid, Pagination]}
              // className="mySwiper"
            >
              {learningdata.map((d, index) => {
                return (
                  <div key={index}>
                    <SwiperSlide key={index}>
                      <div
                        key={index}
                        className="mx-10 w-[300px] mb-10  bg-blue-100 rounded-lg"
                      >
                        <img
                          className="w-full w[200px] h-[150px] p-2"
                          src={d.img}
                        />
                        <div className="ml-4 mt-4">
                          <h2 className="font-bold">{d.title}</h2>
                          <p className="text-sm mt-1 mb-4">{d.instructor}</p>
                          <div className="flex">
                            <progress
                              className="w-[200px] mb-4 h-3 appearance-none mr-4"
                              value={d.progress}
                              max="100"
                              style={{
                                borderRadius: "5px",
                                overflow: "hidden",
                              }}
                            />
                            <h1 className="text-right text-sm mt-[-4px]">
                              {d.progress}%
                            </h1>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>
          </div>

          <div className="bg-[#DDD] bg-opacity-30 h[700px] wfull mt-20">
            <div className="pt-10 flex-1 text-center">
              {/* <div> */}
              <h2 className="font-bold text-2xl">Recommended Courses</h2>
              <p className="sm:mt-1 mt-3 mx-4 sm:mx-0">
                Based on your learning activity we have curated a course just
                for you.
              </p>
              {/* </div> */}
            </div>

            <div className="flex justify-center">
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[-20px] mt-10 mx-10 ml-[-10px]"> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mt-10 sm:mx-10 mx-auto">
                {paginatedCourses.map((course, index) => {
                  return (
                    <div key={index} className="my-4">
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
                })}
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-10 pb-12">
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                <GrFormPrevious size={32} />
              </Button>

              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                <GrFormNext size={32} />
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Student_LandinPage;
