import { Button } from "@mantine/core";
// import { FaStar } from "react-icons/fa";
// import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const New_Card = (props) => {
  const progress = 65;
  const navigate = useNavigate();
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
          </div>
          <div className="flex space-x-4 justify-center">
            <h1 className="font-light text-xs bg-[#D9D9D9] bg-opacity-55 p-1">
              By Mrs.Angela Yu {props.Name}
            </h1>
          </div>

          <div className="App">
            <div className="flex">
              <progress
                className="w-[150px] h-3 appearance-none mr-4"
                value={progress}
                style={{
                  overflow: "hidden",
                  borderRadius: "5px",
                  backgroundColor: "gray",
                }}
              />
              <h1>{progress}%</h1>
            </div>
          </div>
          <div className="justify-center flex">
            <Button
              variant="filed"
              className="bg-[#DDD] text-black font-semibold w-[200px] hover:bg-[#13569D] hover:text-white"
              onClick={() => navigate("/student_learning")}
            >
              Go To Course
            </Button>
          </div>
        </div>
      </div>
      {/* </Slider> */}
    </>
  );
};

export default New_Card;
