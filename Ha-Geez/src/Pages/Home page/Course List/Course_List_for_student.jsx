// import React from 'react';
// import { useNavigate } from "react-router-dom";
// import Student_Header from "../../../User_Managment/DashBoard/Student_DashBoard/Student_Landing_Page/Components/Student_Header";
// import Student_side_navbar from "../../../User_Managment/DashBoard/Student_DashBoard/Student_Landing_Page/Components/Student_side_navbar";
// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../Home page/Components/popular.css";
// import { Button } from "@mantine/core";
// import { FaStar } from "react-icons/fa";
// import { FaRegCirclePlay } from "react-icons/fa6";

// const data = [
//   {
//     name: "Advanced Web Development",
//     img: "src/assets/images/Popular Courses/thomas-lefebvre-gp8BLyaTaA0-unsplash.jpg",
//     top: "Technology",
//     duration: "10hr 15mins",
//     icon: <FaRegCirclePlay />,
//     rating: <FaStar />,
//     rating2: "4.5(20)",
//     photo:
//       "src/assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
//     instructor: "Mr. Abebe",
//     price: "200$",
//   },
//   {
//     name: "Advanced Web Development",
//     img: "src/assets/images/Popular Courses/thomas-lefebvre-gp8BLyaTaA0-unsplash.jpg",
//     top: "Technology",
//     duration: "10hr 15mins",
//     icon: <FaRegCirclePlay />,
//     rating: <FaStar />,
//     rating2: "4.5(20)",
//     photo:
//       "src/assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
//     instructor: "Mr. Abebe",
//     price: "200$",
//   },
//   {
//     name: "Advanced Web Development",
//     img: "src/assets/images/Popular Courses/thomas-lefebvre-gp8BLyaTaA0-unsplash.jpg",
//     top: "Technology",
//     duration: "10hr 15mins",
//     icon: <FaRegCirclePlay />,
//     rating: <FaStar />,
//     rating2: "4.5(20)",
//     photo:
//       "src/assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
//     instructor: "Mr. Abebe",
//     price: "200$",
//   },
//   {
//     name: "Advanced Web Development",
//     img: "src/assets/images/Popular Courses/thomas-lefebvre-gp8BLyaTaA0-unsplash.jpg",
//     top: "Technology",
//     duration: "10hr 15mins",
//     icon: <FaRegCirclePlay />,
//     rating: <FaStar />,
//     rating2: "4.5(20)",
//     photo:
//       "src/assets/images/Popular Courses/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
//     instructor: "Mr. Abebe",
//     price: "200$",
//   },
// ];

// const Course_List_for_student = () => {
//   const [filter, setFilter] = useState("All");

//   const handleFilterChange = (event) => {
//     setFilter(event.target.value);
//   };

//   const navigate = useNavigate();

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//   };

//   return (
//     <>
//       <Student_Header />
//       <Student_side_navbar />
//       <div className=" mt-20">
//         <div className="p-2 mx-52 h-[100px] bg-[#A2CBF5] flex border-[3px] border-black w-[700px]">
//           <img
//             className="w-[100px] h-[80px]"
//             src="src/assets/images/Course List/Course List image.jpg"
//             alt="Course List"
//           />
//           <div className="ml-20">
//             <h1 className="text-2xl font-bold">HA-GEEZ COURSES</h1>
//             <p>Explore Inspiring Online Courses</p>
//           </div>
//         </div>

//         <div className="mx-52 mt-5">
//           <label htmlFor="sort" className="mr-3">
//             Sort By:
//           </label>
//           <select
//             id="sort"
//             value={filter}
//             onChange={handleFilterChange}
//             className="border p-1"
//           >
//             <option value="All">All</option>
//             <option value="technology">(A-Z) ascending</option>
//             <option value="design">(A-Z) descending</option>
//           </select>
//         </div>

//         <div className=" slick-slider mt-16 ml-20">
//           <Slider {...settings}>
//             {data.map((d) => (
//               <div key={d} className=" h-[650px]">
//                 <div className="h-[490px] w-[265px] border-[3px]  justify-center items-center ">
//                   <p className="p-2 bg-[#C7C2C2] absolute">{d.top}</p>
//                   <img src={d.img} alt="" className="h-44 w-150 " />
//                   <div className="flex flex-col justify-center items-center gap-4 p-4">
//                     <p className="text-xl font-bold fontsize-40">{d.name} </p>
//                     <div className="flex ml-28 gap-1">
//                       <p>{d.duration}</p>
//                       <p>{d.icon}</p>
//                     </div>
//                     <div className="flex mr-40 gap-2">
//                       <p>{d.rating}</p>
//                       <p>{d.rating2}</p>
//                     </div>
//                     <div className="flex  mr-32 gap-2 ">
//                       <img
//                         src={d.photo}
//                         alt=""
//                         className="h-10 w-10 rounded-full"
//                       />
//                       <p className="w-[110px]">{d.instructor}</p>
//                     </div>
//                     <div className="border-t-2 w-[265px] flex gap-9 ml-1">
//                       <p className="ml-3 mt-3 font-bold">{d.price}</p>
//                       <Button
//                         variant="default"
//                         color="rgba(0, 0, 0, 1)"
//                         size="md"
//                         className="mt-2"
//                         onClick={() => navigate("")}
//                       >
//                         Enroll Now
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Course_List_for_student;
import React, { useState } from "react";
import Student_Header from "../../../User_Managment/DashBoard/Student_DashBoard/Student_Landing_Page/Components/Student_Header";
import Student_side_navbar from "../../../User_Managment/DashBoard/Student_DashBoard/Student_Landing_Page/Components/Student_side_navbar";
import Course_Card from "../Components/styled-components/Course_Card";
import { courses } from "../../Home page/Course_Overview/Reviews/Reviews";

const chunkArray = (array, size) => {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
};

const Course_List_for_student = () => {
  const [filter, setFilter] = useState("All");
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const chunkedCourses = chunkArray(courses, 4);
  return (
    <>
      <Student_Header />
      <Student_side_navbar />
      <div className="absolute mt-20">
        <div className="p-2 mx-52 h-[100px] bg-[#A2CBF5] flex border-[3px]  border-black mt-5 w-[700px]">
          <img
            className="w-[100px] h-[80px]"
            src="src/assets/images/Course List/Course List image.jpg"
            alt="Course List"
          />
          <div className="ml-20">
            <h1 className="text-2xl font-bold">HA-GEEZ COURSES</h1>
            <p>Explore Inspiring Online Courses</p>
          </div>
        </div>

        <div className="mx-52 mt-5">
          <label htmlFor="sort" className="mr-3">
            Sort By:
          </label>
          <select
            id="sort"
            value={filter}
            onChange={handleFilterChange}
            className="border p-1"
          >
            <option value="All">All</option>
            <option value="technology">(A-Z) ascending</option>
            <option value="design">(Z-A) descending</option>
          </select>
        </div>

        <div className="flex flex-col mt-10 m-0">
          {chunkedCourses.map((courseRow, rowIndex) => (
            <div key={rowIndex} className="flex justify-center mb-7">
              {courseRow.map((course, index) => (
                <div key={index} className="ml-20 flex">
                  <Course_Card
                    image={course.image}
                    title={course.title}
                    description={course.description}
                    instructorName={course.instructorName}
                    level={course.level}
                    duration={course.duration}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Course_List_for_student;
