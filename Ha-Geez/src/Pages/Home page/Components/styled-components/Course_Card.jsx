import { Button } from "@mantine/core";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

/* eslint-disable react/prop-types */
const Course_Card = (props) => {
//   const settings = {
//     dots: true,
    
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   };

  return (
    <>
      {/* <Slider {...settings}> */}
        <div className="border-gray-500 border-[1px] w-[240px] mx-2 flex justify-center rounded-lg pb-2">
          <div className="space-y-4">
            <div>
              <img
                src={props.image}
                alt="course image"
                className="w-[220px] h-[120px]  mx-auto mt-2"
              />
            </div>
            <div>
              <h1 className="font-bold flex justify-center">{props.title}</h1>
              <h1 className="font-light flex justify-center mx-auto text-xs max-w-[210px]">
                {props.description}
              </h1>
            </div>
            <div className="flex space-x-4 justify-center">
              <h1 className="font-light text-xs bg-[#D9D9D9] bg-opacity-55 p-1">
                By Mr. {props.instructorName}
              </h1>
              <h1 className="font-light text-xs bg-[#D9D9D9] bg-opacity-55 p-1">
                {props.level}
              </h1>
              <h1 className="font-light text-xs bg-[#D9D9D9] bg-opacity-55 p-1">
                {props.duration}
              </h1>
            </div>
            <div className="justify-center flex">
              <Button
                variant="filed"
                className="bg-[#DDD] text-black font-semibold w-[200px] hover:bg-[#13569D] hover:text-white"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      {/* </Slider> */}
    </>
  );
};

export default Course_Card;
