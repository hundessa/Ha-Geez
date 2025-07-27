import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiStar } from "react-icons/ci";
import user_1 from "../../../assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg";
import StarRating from "./styled-components/StarRating";
// import "./popular.css";

const data = [
  {
    name: "Lidiya Fissha",
    photo: user_1,
    title: "Datascientist",
    rating: 4,
    rating2: <CiStar />,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiaseos nostrum beatae nemo non adipisci aperiam exercitationem quamrecusandae cum amet earum porro harum ad, maiores dolore veritatisplaceat corporis.",
  },
  {
    name: "Lidiya Fissha",
    photo: user_1,
    title: "Datascientist",
    rating: 4.5,
    rating2: <CiStar />,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiaseos nostrum beatae nemo non adipisci aperiam exercitationem quamrecusandae cum amet earum porro harum ad, maiores dolore veritatisplaceat corporis.",
  },
  {
    name: "Lidiya Fissha",
    photo: user_1,
    title: "Datascientist",
    rating: 4,
    rating2: <CiStar />,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiaseos nostrum beatae nemo non adipisci aperiam exercitationem quamrecusandae cum amet earum porro harum ad, maiores dolore veritatisplaceat corporis.",
  },
  {
    name: "Lidiya Fissha",
    photo: user_1,
    title: "Datascientist",
    rating: 4,
    rating2: <CiStar />,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiaseos nostrum beatae nemo non adipisci aperiam exercitationem quamrecusandae cum amet earum porro harum ad, maiores dolore veritatisplaceat corporis.",
  },
];

const testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // screen < 1024px (tablet)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // screen < 640px (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center">
      <div className="w-3/4 mt-40">
        <div className="flex justify-center">
          <h1 className="text-center font-bold text-3xl mb-10">
            What Our Students Say About Us
          </h1>
        </div>
        <div className="w-full max-w-7xl mx-auto px-4">
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d} className="my-8 px-2">
                <div className="bg-[#09335F] space-y-6 p-6 rounded-xl">
                  <div className="flex justify-center items-center pt-10">
                    <img
                      src={d.photo}
                      alt=""
                      className="h-16 w-16 sm:h-20 sm:w-20 rounded-full"
                    />
                    <div className=" text-white ml-3">
                      <p className="text-lg sm:text-xl font-bold">{d.name} </p>
                      <p className="text-sm sm:text-base">{d.title}</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <StarRating rating={d.rating} />
                  </div>

                  <div className="flex justify-center pb-10">
                    <p className="text-white font-light text-sm sm:text-base w-full sm:w-[250px] text-justify">
                      {d.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default testimonials;
