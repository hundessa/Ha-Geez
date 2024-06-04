import { Button } from "@mantine/core";
// import styled from "styled-components";
const AboutUs = () => {
  return (
    <>
      <div className="">
        <div className="flex">
          <h2 className=" mx-auto font-bold text-3xl m-10">About Us</h2>
        </div>

        
          <div className="flex w[500px] h[1000px] ml-[730px]">
            <div className="size[300px]">
            <img
              src="src/assets/images/About_Us/charlesdeluvio-Lks7vei-eAg-unsplash.jpg"
              className="rounded-[30px] w-[300px]"
            /></div>
            <p className=" w-[500px] ml-52 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              vel aspernatur sunt magni harum doloribus molestias facere quasi
              officia quam distinctio ad similique ipsam quaerat saepe ratione
              eos excepturi ipsa. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Quidem, vel aspernatur sunt magni harum
              doloribus molestias facere quasi officia quam distinctio ad
              similique ipsam quaerat saepe ratione eos excepturi ipsa.
            </p>
          </div>
          <Button
            variant="filled"
            color="rgba(14, 26, 130, 1)"
            size="sm"
            radius="md"
            className="ml-96 mt-10"
          >
            Read More
          </Button>
        </div>
    </>
  );
};

export default AboutUs;
