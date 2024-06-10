import { useState } from "react";
import Student_Header from "../Student_Landing_Page/Components/Student_Header";
import Student_side_navbar from "../Student_Landing_Page/Components/Student_side_navbar";
import { Button } from "@mantine/core";
import {
  FaAngleUp,
  FaArrowLeft,
  FaRegClock,
  FaRegLightbulb,
  FaRegStickyNote,
  FaShare,
  FaCheckSquare,
} from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import video from "../../../../assets/videos/Preview_videos/Short_Video.mp4";
import { BiSolidDislike, BiSolidLike, BiCheckbox } from "react-icons/bi";
import {
  Reviews,
  items,
} from "../../../../Pages/Home page/Course_Overview/Reviews/Reviews";

const Student_Learning = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [checkbox, setCheckBox] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [reviewStatus, setReviewStatus] = useState(
    Array(Reviews.length).fill({ like: false, dislike: false })
  );
  const navigate = useNavigate();

  const checkboxhandler = () => {
setCheckBox(!checkbox);
  }

  const contentClickedHandler = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const likeButtonHandler = (index) => {
    setReviewStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      if (prevStatus[index].like) {
        newStatus[index] = { like: false, dislike: false };
      } else {
        newStatus[index] = { like: true, dislike: false };
      }
      return newStatus;
    });
  };

  const dislikeButtonHandler = (index) => {
    setReviewStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      if (prevStatus[index].dislike) {
        newStatus[index] = { like: false, dislike: false };
      } else {
        newStatus[index] = { like: false, dislike: true };
      }
      return newStatus;
    });
  };
  return (
    <>
      <Student_Header />
      <div className="flex">
        <Student_side_navbar setSidebarExpanded={setSidebarExpanded} />
        <div
          className={`transition-all duration-300 mt-10 ml-[55px] ${
            sidebarExpanded ? "" : ""
          }`}
        >
          <div className="bg-[#E7F3FF] mt-4 ml10 flex items-center">
            <Button
              variant="transparent"
              className="text-black focus:text-black ml-"
              onClick={() => navigate("/student_landingpage")}
            >
              <FaArrowLeft size="25px" />
            </Button>
            <div className="flex-grow">
              <h1 className="font-semibold text-xl">Introduction</h1>
            </div>
          </div>
          <div className="flex mt-6">
            <div className="bg-[#c4dbf2] px-2 rounded-xl">
              <div className="justify-center">
                <div className="px-[25px] justify-center">
                  <ReactPlayer
                    controls
                    width="860px"
                    height="500px"
                    url={video}
                  />
                </div>
                <div className="flex justify-center items center mt-2">
                  <h1 className="flex font-semibold text-xl mt2">
                    Introduction to web development
                  </h1>
                  <Button
                    variant="outline"
                    className="flex text-black border-black justify-end mr-[-200px] ml-40  active:text-black"
                  >
                    Share <FaShare className="ml-2" />
                  </Button>
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <h1 className="font-bold flex justify-center mx-auto text-lg">
                    Overview
                  </h1>
                </div>
                <div className="ml-10 mb-10">
                  <div>
                    <h1 className="font-bold ml2 mb-2">Course Description</h1>
                  </div>
                  <div className="mb-8">
                    <h1 className="text-justify ml2 mb8">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum, numquam. Dolore iste nihil animi, ipsa voluptates
                      voluptas harum ea nam, culpa dolores suscipit! Qui, quasi
                      et. In excepturi natus consectetur.
                    </h1>
                  </div>
                  <div>
                    <h1 className="font-bold ml2 mb-2">Course Outcome</h1>
                  </div>
                  <div className="mb-8">
                    <h1 className="text-justify ml2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum, numquam. Dolore iste nihil animi, ipsa voluptates
                      voluptas harum ea nam, culpa dolores suscipit! Qui, quasi
                      et. In excepturi natus consectetur.
                    </h1>
                  </div>
                  <div className="ml4">
                    <h1 className="font-bold mb-4">Who is this course for:</h1>
                    <div className="ml-2">
                      <li>
                        Beginner-level designers interested in user interface &
                        user experience design (UI/UX)
                      </li>
                      <li>
                        Beginner/Intermediate designers interested in earning
                        income as a freelance designer
                      </li>
                      <li>
                        Any-level designers looking to get into web & mobile app
                        designs (graphical user interface)
                      </li>
                      <li>
                        Entrepreneurs wanting to turn their app ideas from a
                        sketch to a realistic mockup and prototype.
                      </li>
                      <li>
                        Anyone looking to jump into a new exciting career with
                        graphic design.
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-center items-center mx-auto mt-6">
                  <h1 className="font-bold text-3xl">Reviews</h1>
                </div>
                {Reviews.map((review, index) => (
                  <div key={index} className="bg-white rounded-lg">
                    <div className="border-[1px] border-gray-400">
                      <div className="flex">
                        <div className="m-6">
                          <img
                            src={review.image}
                            alt="student 1"
                            className="size-14 rounded-[100%]"
                          />
                        </div>
                        <div className="mt-6">
                          <h1 className="font-semibold">{review.name}</h1>
                          <h1 className="fontlight text-gray-400">
                            {review.date}
                          </h1>
                        </div>
                      </div>
                      <div className="flex justify-center items-center mx-auto">
                        <h1 className="w-[350px] text-justify text-sm">
                          {review.content}
                        </h1>
                      </div>
                      <div className="flex justify-center items-center mx-auto mt-4">
                        <h1 className="font-semibold">
                          Was this review helpful?
                        </h1>
                        <Button
                          variant="transparent"
                          className="p-0 mx-6"
                          onClick={() => likeButtonHandler(index)}
                        >
                          <BiSolidLike
                            className={`text-black size-6 transition-colors duration-200 ease-in-out ${
                              reviewStatus[index].like
                                ? "text-red500 fill-red-500"
                                : "text-black"
                            }`}
                          />
                        </Button>
                        <Button
                          variant="transparent"
                          className="p-0"
                          onClick={() => dislikeButtonHandler(index)}
                        >
                          <BiSolidDislike
                            className={`text-black size-6 transition-colors duration-200 ease-in-out ${
                              reviewStatus[index].dislike
                                ? "text-red500 fill-red-500"
                                : "text-black"
                            }`}
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-[280px] mr-0">
              <div className="flex justify-center mb-4">
                <h1 className="font-bold text-[30px]">Course Content</h1>
              </div>
              <div className="pb-10 bg-[#A2CBF5] bg-opacity-20 rounded-lg px-4 w-full">
                <div className="flex mb-10 pt-4 font-bold text-[15px] space-x-2">
                  <h1>
                    <span className="font-semibold">5</span> modules
                  </h1>
                  <h1>
                    <span className="font-semibold">20</span> lectures
                  </h1>
                  <h1 className="flex">
                    <FaRegClock className="mt-[4px]" /> 5hrs
                  </h1>
                </div>
                <div className="bg-[#5A94D0] bg-opacity-[8%] w-[260px] shadow-lg pb10 mx[-10px] rounded-lg">
                  {items.map((item, index) => (
                    <div key={index}>
                      <div
                        className="items-center space-x-2 h-14 cursor-pointer pt-1 bg-[#5A94D0] bg-opacity-10 mx-0"
                        onClick={() => contentClickedHandler(index)}
                      >
                        <div className="flex items-center mt-2">
                          <FaAngleUp className="mt[2px] mx-2 size-[15px]" />
                          <h1 className="text-sm font-medium ">
                            {item.section}
                          </h1>
                          <h1 className="font-medium text-sm ml-2">
                            {item.title}
                          </h1>
                        </div>
                        <div className="flex space-x-2 fontthin font-light text-xs">
                          <h1 className="ml-6">{item.lecture}</h1>
                          <h1 className="">{item.time}</h1>
                        </div>
                      </div>
                      <div
                        className={` space-y-2 ${
                          activeIndex === index ? "block my-2" : "hidden"
                        }`}
                      >
                        <div className="" onClick={checkboxhandler}>
                          <div className="flex space-x-4">
                            <BiCheckbox className={`size-6 ${checkbox ? "hidden" : "block"}`} />
                            <FaCheckSquare className={`size-4 ${checkbox ? "block ml-[-40px]" : "hidden"}`}/>
                            <h1 className="text-xs">Introduction</h1>
                          </div>
                          <div className="flex space-x-4">
                            <MdOndemandVideo className="mt-[3px] ml-[37px]" />
                            <h1 className="text-xs">6 min</h1>
                          </div>
                        </div>
                        <div className="">
                          <div className="flex space-x-4">
                            <BiCheckbox className="size-6" />
                            <h1 className="text-xs">Introduction</h1>
                          </div>
                          <div className="flex space-x-4">
                            <MdOndemandVideo className="mt-[3px] ml-[37px]" />
                            <h1 className="text-xs">6 min</h1>
                          </div>
                        </div>
                        <div className="">
                          <div className="flex space-x-4">
                            <BiCheckbox className="size-6" />
                            <h1 className="text-xs">Introduction</h1>
                          </div>
                          <div className="flex space-x-4">
                            <FaRegStickyNote className="mt-[3px] ml-[37px]" />
                            <h1 className="text-xs">6 min</h1>
                          </div>
                        </div>
                        <div className="">
                          <div className="flex space-x-4">
                            <BiCheckbox className="size-6" />
                            <h1 className="text-xs">Introduction</h1>
                          </div>
                          <div className="flex space-x-4">
                            <FaRegLightbulb className="mt-[3px] ml-[37px]" />
                            <h1 className="text-xs">6 min</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student_Learning;
