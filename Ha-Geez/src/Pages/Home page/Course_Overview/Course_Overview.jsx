import { useState } from "react";
import Header from "../Components/Header";
import course from "../../../assets/images/Courses/Course_Overview/course-1.jpg";
import { Button } from "@mantine/core";
import {
  FaShare,
  FaRegPlayCircle,
  FaArrowLeft,
  FaDollarSign,
  FaRegClock,
  FaAngleUp,
  FaVideo,
  FaRegStickyNote,
  FaRegLightbulb,
} from "react-icons/fa";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { Reviews, items } from "./Reviews/Reviews";
import Preview_modal from "./Previews/Preview_modal/Preview_modal";

const Course_Overview = () => {
  const [openmodal, setOpenmodal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [reviewStatus, setReviewStatus] = useState(
    Array(Reviews.length).fill({ like: false, dislike: false })
  );
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
      <Header />
      <Button variant="outline" className="text-black border-none ml-4">
        <FaArrowLeft size="25px" />
      </Button>
      <div className=" flex ml-10">
        <div className="flex bg-[#A2CBF5] bg-opacity-55 w-[800px] h[100vh] rounded-xl">
          <div className="">
            <div className="mx-10 mt-10">
              <div className="">
                <img
                  src={course}
                  alt="course"
                  className="w-96 wfull mr-40 h-72 rounded-2xl blur-[2px]"
                />

                <div className="absolute top-48 ml-16 top flex flex-col items-center justify-center space-y-4">
                  <Button
                    variant="default"
                    className="bg-white border-none bg-opacity-50 rounded-full size-28 top[-200px]"
                    onClick={() => setOpenmodal(true)}
                  >
                    <FaRegPlayCircle className="size-28 text-black" />
                  </Button>
                  <h1 className="text-white text-2xl font-bold bgblack bg-opacity50 p-2 rounded">
                    Preview this course
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <Button
                variant="outline"
                className="flex text-black border-black justify-end ml-auto mr-10 mt-2"
              >
                Share <FaShare className="ml-2" />
              </Button>
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
          </div>
          <div className="mt-10">
            <h1 className="font-semibold text-[36px]">
              Introduction to web programming
            </h1>

            <h1 className="flex justify-end ml-auto mr-12">
              By Lidiya Fissiha
            </h1>
            <h1 className="font-extrabold text-2xl mb-6 ml-2 flex">
              <FaDollarSign className="mt-[6px]" /> Birr 200
            </h1>
            <div className="mx-4">
              <Button color="#13569D" className="block w-[300px]" mb="md">
                Add to Cart
              </Button>
              <Button variant="light" className="w-[300px]">
                <FaDollarSign /> Buy Now
              </Button>
            </div>
          </div>
        </div>
        <div className="ml-6">
          <div className="flex justify-center mx-auto mb-4">
            <h1 className="font-bold text-[36px]">Course Content</h1>
          </div>
          <div className="mr-6 pb-10 bg-[#A2CBF5] bg-opacity-20 rounded-lg px-4">
            <div className="flex mb-10 mx-4 pt-4 font-bold text-[20px] space-x-4">
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
            <div className="bg-[#5A94D0] bg-opacity-[8%] w-[400px] shadow-lg pb-10 px10 rounded-lg">
              {items.map((item, index) => (
                <div key={index}>
                  <div
                    className="flex items-center space-x-2 h-10 cursor-pointer border-[1px] border-gray-400"
                    onClick={() => contentClickedHandler(index)}
                  >
                    <FaAngleUp className="mt-[2px] ml-2 size-[20px]" />
                    <h1 className="font-semibold text-xl">{item.title}</h1>
                    <div className="flex flex-grow justify-end space-x-2 pr-2">
                      <h1 className="">{item.lecture}</h1>
                      <h1 className="">{item.time}</h1>
                    </div>
                  </div>
                  <div
                    className={` ${activeIndex === index ? "block" : "hidden"}`}
                  >
                    <div className="flex space-x-3">
                      <FaVideo className="mt-[2px]" />
                      <h1>Introduction</h1>
                      <h1>6 min</h1>
                    </div>
                    <div className="flex space-x-3">
                      <FaVideo className="mt-[2px]" />
                      <h1>Introduction</h1>
                      <h1>6 min</h1>
                    </div>
                    <div className="flex space-x-3">
                      <FaRegStickyNote className="mt-[2px]" />
                      <h1>Introduction</h1>
                      <h1>6 min</h1>
                    </div>
                    <div className="flex space-x-3">
                      <FaRegLightbulb className="mt-[2px]" />
                      <h1>Introduction</h1>
                      <h1>6 min</h1>
                    </div>
                  </div>
                </div>
              ))}
              
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
        </div>
      </div>
      <Preview_modal openmodal={openmodal} setOpenmodal={setOpenmodal}/>
    </>
  );
};

export default Course_Overview;



