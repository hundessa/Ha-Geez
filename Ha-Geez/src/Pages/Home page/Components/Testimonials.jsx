import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiStar } from "react-icons/ci";
// import "./popular.css";

const data = [
  {
    name: "Lidiya Fissha",
    photo:
      "src/assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
    title: "Datascientist",
    rating: <FaStar />,
    rating2: <CiStar />,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiaseos nostrum beatae nemo non adipisci aperiam exercitationem quamrecusandae cum amet earum porro harum ad, maiores dolore veritatisplaceat corporis.",
  },
  {
    name: "Lidiya Fissha",
    photo:
      "src/assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
    title: "Datascientist",
    rating: <FaStar />,
    rating2: <CiStar />,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiaseos nostrum beatae nemo non adipisci aperiam exercitationem quamrecusandae cum amet earum porro harum ad, maiores dolore veritatisplaceat corporis.",
  },
  {
    name: "Lidiya Fissha",
    photo:
      "src/assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
    title: "Datascientist",
    rating: <FaStar />,
    rating2: <CiStar />,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiaseos nostrum beatae nemo non adipisci aperiam exercitationem quamrecusandae cum amet earum porro harum ad, maiores dolore veritatisplaceat corporis.",
  },
  {
    name: "Lidiya Fissha",
    photo:
      "src/assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
    title: "Datascientist",
    rating: <FaStar />,
    rating2: <CiStar />,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiaseos nostrum beatae nemo non adipisci aperiam exercitationem quamrecusandae cum amet earum porro harum ad, maiores dolore veritatisplaceat corporis.",
  },
];

const testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className=" w-3/4 m-auto ">
      <div className="">
        <h1 className=" mx-auto font-bold text-3xl m-20">
          What Our Students Say About Us
        </h1>
      </div>
      <div className=" mb-32">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d} className="px-0.5 h-[750px]">
              <div className="h-96 bg-[#09335F] ">
                <div className="flex">
                  <img
                    src={d.photo}
                    alt=""
                    className="h-20 w-20 rounded-full ml-1 mt-6"
                  />
                  <div className=" text-white mt-10 ml-3">
                    <p className="text-xl font-bold fontsize-40">{d.name} </p>
                    <p className="ml-3">{d.title}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex">
                    <p className="ml-3">{d.rating}</p>
                    <p className="ml-3">{d.rating}</p>
                    <p className="ml-3">{d.rating}</p>
                    <p className="ml-3">{d.rating}</p>
                    <p className="ml-3 ">{d.rating2}</p>
                  </div>

                  <p className="text-white font-light ml-5 w-[250px]">{d.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default testimonials;
