// import React, { useState } from "react";
// import Header from "../Components/Header";
// import Footer from "../Components/Footer";
// import Course_Card from "../Components/styled-components/Course_Card";
// import { courses } from "../../Home page/Course_Overview/Reviews/Reviews";

// const chunkArray = (array, size) => {
//   const chunkedArray = [];
//   for (let i = 0; i < array.length; i += size) {
//     chunkedArray.push(array.slice(i, i + size));
//   }
//   return chunkedArray;
// };

// const Course_List = () => {
//   const [filter, setFilter] = useState("All");
//   const handleFilterChange = (event) => {
//     setFilter(event.target.value);
//   };

//   const chunkedCourses = chunkArray(courses, 3);
//   return (
//     <>
//       <Header />
//       <div className="p-2 mx-52 h-[100px] bg-[#A2CBF5] flex border-[3px] border-black mt-5 w-[700px]">
//         <img
//           className="w-[100px] h-[80px]"
//           src="src/assets/images/Course List/Course List image.jpg"
//           alt="Course List"
//         />
//         <div className="ml-20">
//           <h1 className="text-2xl font-bold">HA-GEEZ COURSES</h1>
//           <p>Explore Inspiring Online Courses</p>
//         </div>
//       </div>

//       <div className="mx-52 mt-5">
//         <label htmlFor="sort" className="mr-3">
//           Sort By:
//         </label>
//         <select
//           id="sort"
//           value={filter}
//           onChange={handleFilterChange}
//           className="border p-1"
//         >
//           <option value="All">All</option>
//           <option value="technology">(A-Z) ascending</option>
//           <option value="design">(A-Z) descending</option>
//         </select>
//       </div>

//       <div className="flex flex-col mt-10 m-0">
//         {chunkedCourses.map((courseRow, rowIndex) => (
//           <div key={rowIndex} className="flex justify-center mb-10">
//             {courseRow.map((course, index) => (
//               <div key={index} className="ml-20 flex">
//                 <Course_Card
//                   image={course.image}
//                   title={course.title}
//                   description={course.description}
//                   instructorName={course.instructorName}
//                   level={course.level}
//                   duration={course.duration}
//                 />
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Course_List;


import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Course_Card from "../Components/styled-components/Course_Card";
import { courses } from "../../Home page/Course_Overview/Reviews/Reviews";

const chunkArray = (array, size) => {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
};

const Course_List = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [levelFilter, setLevelFilter] = useState("All");

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevelFilter(event.target.value);
  };

  const filteredCourses = courses.filter((course) => {
    return (
      (categoryFilter === "All" || course.category === categoryFilter) &&
      (levelFilter === "All" || course.level === levelFilter)
    );
  });

  const chunkedCourses = chunkArray(filteredCourses, 3);

  return (
    <>
      <Header />
      <div className="p-2 mx-52 h-[100px] bg-[#A2CBF5] flex border-[3px] border-black mt-5 w-[700px]">
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
        <label htmlFor="category" className="mr-3">
          Sort By Category:
        </label>
        <select
          id="category"
          value={categoryFilter}
          onChange={handleCategoryChange}
          className="border p-1 mr-5"
        >
          <option value="All">All</option>
          <option value="technology">Technology</option>
          <option value="design">Design</option>
        </select>

        <label htmlFor="level" className="mr-3">
          Sort By Level:
        </label>
        <select
          id="level"
          value={levelFilter}
          onChange={handleLevelChange}
          className="border p-1"
        >
          <option value="All">All</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="flex flex-col mt-10 m-0">
        {chunkedCourses.map((courseRow, rowIndex) => (
          <div key={rowIndex} className="flex justify-center mb-10">
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
      <Footer />
    </>
  );
};

export default Course_List;
