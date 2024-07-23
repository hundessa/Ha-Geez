import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";

/* eslint-disable react/prop-types */
const Course_Card = (props) => {

  const navigate = useNavigate();

  return (
    <>
        <div className="border-gray-500 border-[1px] w-[280px] ml-10 mr-4 flex justify-center rounded-lg pb-2">
          <div className="space-y-4">
            <div className="relative">
              <img
                src={props.image}
                alt="course image"
                className="w-[260px] h-[140px] mx-auto mt-2"
              />
              <h1 className="absolute top-0 bg-slate-300 p-2">{props.category}</h1>
            </div>
            <div>
              <h1 className="font-bold flex justify-center">{props.title}</h1>
              <h1 className="font-light flex justify-center mx-auto text-xs max-w-[250px]">
                {props.description}
              </h1>
            </div>
            <div className="flex space-x-4 justify-center">
              <h1 className="fontlight text-xs bg-[#D9D9D9] bg-opacity-55 p-2">
                By Mr. {props.instructorName}
              </h1>
              <h1 className="fontlight text-xs bg-[#D9D9D9] bg-opacity-55 p-2">
                {props.level}
              </h1>
              <h1 className="fontlight text-xs bg-[#D9D9D9] bg-opacity-55 p-2">
                {props.duration}
              </h1>
            </div>
            <div className="flex">
              <h1 className="flex mx-2"><StarRating rating={props.rating}/></h1>
              <h1 className="flex justify-center mx-auto text-black">{props.price} Birr</h1>
            </div>
            <div className="justify-center flex">
              <Button
                variant="filed"
                className="bg-[#DDD] text-black font-semibold w-[200px] hover:bg-[#13569D] hover:text-white"
                onClick={() => navigate("/course_overview")}
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
    </>
  );
};

export default Course_Card;
