import React from "react";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
const navigate = useNavigate();

  return (
    <div className="mx-40">
      <div className="m-auto items-center justify-center">
        <div className="flex mt-10">
          <h2 className=" mx-auto font-bold text-3xl m-10">About Us</h2>
        </div>

        <div className=" gap-20  flex">
          <div>
            <p className="w-[450px] text-align">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur ducimus tenetur magni consectetur! Odit est, ratione
              corporis magnam itaque velit esse dolores eaque odio consequuntur,
              harum natus ex aliquam incidunt! <br /> <br /> <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur ducimus tenetur magni consectetur! Odit est, ratione
              corporis magnam itaque velit esse dolores eaque odio consequuntur,
              harum natus ex
              <br /> <br /> <br />
              aliquam incidunt! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Aspernatur ducimus tenetur magni consectetur!
              Odit est, ratione corporis magnam itaque velit esse dolores eaque
              odio consequuntur, harum natus ex aliquam incidunt!
            </p>

            <Button className="mt-10" variant="filled" color="#09335F"  onClick={() => navigate("/instructor_profile_view")}>applicant_details
              Readmore
            </Button>
          </div>

          <img
            src="src/assets/images/About_Us/charlesdeluvio-Lks7vei-eAg-unsplash.jpg"
            className="w-[500px] h-[500px] "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
