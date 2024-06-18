import React from "react";
import Admin_Header from "../../../Pages/Home page/Components/Admin_Header";
import { Button } from "@mantine/core";

const Instructor_Profile_View = () => {
  return (
    <div>
      <Admin_Header />

      <Button
        variant="transparent"
        color="#13569D"
        size="md"
        className="ml-20 mt-20"
        onClick={() => navigate("/")}
      >
        <IoArrowBackSharp className="size-8" />
      </Button>
      <div>
        <h1>Hundessa Serbessa</h1>
        <h3>Software Developer</h3>
      </div>

      <h2>Profile</h2>
      <div>
        <p>
          Hello, my name is Hundessa, I have a bachelor's degree in Software
          Engineering and a Master's degree in Project management As an
          Ethiopian who lived abroad, I realized how powerful programming
          language is to address and express our thoughts and insights to the
          surrounding society which will pave the way to the ultimate goal of
          software development which is to solve people’s problems.
        </p>
        <h2>Contact</h2>
      </div>
    </div>
  );
};

export default Instructor_Profile_View;
