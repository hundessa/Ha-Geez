import Student_Header from "./Components/Student_Header";
import Student_side_navbar from "./Components/Student_side_navbar";
import { Button } from "@mantine/core";
import { FaTrash } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import image from "../../../../assets/images/Cart/ilya-pavlov-OqtafYT5kTw-unsplash.jpg";
import img from"../../../../assets/images/Cart/oskar-yildiz-cOkpTiJMGzA-unsplash.jpg";
import { useNavigate } from "react-router-dom";

const data = [
  {
    title: "Complete Web Development",
    img: image,
    lecture: "50lectures",
    duration: "10 total hours",
    icon: <FaTrash />,
    remove: "Remove",
    rating: <FaStar />,
    rating2: "(1000)",
    instructor: "By Lidiya Fissha",
    price: "Birr 200",
  },
  {
    title: "Advanced Web Development",
    img: img,
    lecture: "60 lectures",
    duration: "20 total hours",
    icon: <FaTrash />,
    remove: "Remove",
    rating: <FaStar />,
    rating2: "(9000)",
    instructor: "By Hundessa Serbessa",
    price: "Birr 200",
    status: "Bestseller",
  },
];
const Cart = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Student_Header />
        <Student_side_navbar />
      </div>

      <div className="flex">
        <Button
          variant="transparent"
          color="#13569D"
          size="md"
          className="ml-20"
          onClick={() => navigate("/student_landingpage")}
        >
          <IoArrowBackSharp className="size-8" />
        </Button>
        <Button
          variant="filled"
          color="#BADBFF"
          radius="xl"
          className="text-black ml-[1000px] mt-2 "
        >
          My Learning
        </Button>
      </div>

      <div className="ml-20 flex">
        <div className="mt-10">
          <h1 className="font-bold text-[20px] w-[220px]">Shopping Cart</h1>
          <h3 className="mt-2">2 courses in cart</h3>
        </div>

        <div className="ml-[800px] w-[200px] ml-3 h-[150px] bg-[#5A94D0] mt-8">
          <h2>Summary</h2>
          <hr />
          <p>Subtotal:</p>
          <p>Birr 400</p>
          <Button variant="filled" color="#13569D" size="md" radius="md">
            Go To Checkout
          </Button>
        </div>
      </div>

      {data.map((d, index) => (
        <div key={index} className="ml-20 flex">
          <div className="flex border-2 w-[400px] h-[100px]">
            <img src={d.img} className="w-[100px] h-[100px]" />

            <div className="align ml-4">
              <h2 className="font-bold">{d.title}</h2>
              <p>{d.instructor}</p>
              <div className="flex">
                <p>{d.rating}</p>
                <p>{d.rating2}</p>
              </div>
              <div className="flex gap-4">
                <p>{d.duration}</p>
                <p>{d.lecture}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 ml-2">
            <p>{d.price}</p>
            <div className="mt-5 flex">
              <p>{d.icon}</p>
              <p>{d.remove}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
