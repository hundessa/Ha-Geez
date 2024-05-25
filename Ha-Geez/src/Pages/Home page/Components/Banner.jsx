import book from "../../../assets/images/Banner/book-anime.jpg";
import { Button } from "@mantine/core";

const Banner = () => {
  return (
    <>
      <div className="flex bg-[#09335F] bg-opacity-80 mb-20">
        <div className="flex mt-16 ml-10">
          <div>
            <h1 className="font-bold text-5xl mb-10">
              Learn online from well-known: <br />
              <span className="text-blue-400">Sales professionals</span>{" "}
            </h1>
            <p className="w-[400px] font-medium text-white mb-8">
              Learn from the best professionals Learn valuable methods and
              techniques explained by top experts in different sector.
            </p>
            <div className="flex ml-14">
              <Button
                variant="filled"
                color="#f9fff9"
                className="text-black mr-12 rounded-[30px]"
              >
                Enroll Now
              </Button>
              <Button
                variant="filled"
                color="#1E5389"
                className="text-[#FFFDFD] font-medium border-white rounded-[30px]"
              >
                Explore Courses
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10 mr-10 h-[500px]">
          <img
            src={book}
            alt="logo"
            className="w-[700px] h-[400px] rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
