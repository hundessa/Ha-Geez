import { Button } from "@mantine/core";
import { FaStar } from "react-icons/fa";

/* eslint-disable react/prop-types */
const Course_Card = (props) => {

  return (
    <>
        <div className="border-gray-500 border-[1px] w-[240px] ml-12  flex justify-center rounded-lg pb-2">
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
            <div className="flex">
              <h1 className="flex mx-2"><FaStar className="mt-1 mr-2 text-yellow-500"/>{props.rating}</h1>
              <h1 className="flex justify-center mx-auto">{props.price} Birr</h1>
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
